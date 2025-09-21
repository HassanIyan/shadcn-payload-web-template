import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { Metadata } from 'next'
import { Events } from '@/components/blocks/events'
import { Posts } from '@/components/blocks/posts'

interface Props {
    params: Promise<{ id: string }>
}

export default async function TagPage({ params }: Props) {
    const { id } = await params
    const tag = await getTag(id)

    return (
        <main className="my-12">
            <h1 className="font-bold text-4xl container text-center mb-8">{tag?.name}</h1>
            <Posts
                className="container mb-8"
                where={{
                    _status: {
                        equals: 'published',
                    },
                    tags: {
                        in: [tag?.id],
                    },
                }}
                enableNotFound={false}
            >
                <h1 className="col-span-1 lg:col-span-3 font-bold text-2xl">{'Posts'}</h1>
            </Posts>
            <Events
                className="container mb-8"
                where={{
                    _status: {
                        equals: 'published',
                    },
                    tags: {
                        in: [tag?.id],
                    },
                }}
                enableNotFound={false}
            >
                <h1 className="col-span-1 lg:col-span-3 font-bold text-2xl">{'Events'}</h1>
            </Events>
        </main>
    )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const tag = await getTag(id)

    return {
        title: tag.name,
    }
}

const getTag = cache(async (id: string) => {
    try {
        const payload = await getPayload({ config })
        return await payload.findByID({ collection: 'tags', id: parseInt(id) || 0 })
    } catch (error: unknown) {
        if ((error as Error).message === 'Not Found') return notFound()
        throw error
    }
})
