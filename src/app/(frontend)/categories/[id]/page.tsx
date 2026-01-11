import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { Metadata } from 'next'
import { Events } from '@/components/blocks/events'
import { Posts } from '@/components/blocks/posts'
import { Downloads } from '@/components/blocks/downloads'

interface Props {
    params: Promise<{ id: string }>
}

export default async function CategoryPage({ params }: Props) {
    const { id } = await params
    const category = await getCategory(id)

    return (
        <main className="my-12">
            <h1 className="font-bold text-4xl container text-center mb-8">{category?.name}</h1>
            <Posts
                className="container mb-8"
                where={{
                    _status: {
                        equals: 'published',
                    },
                    category: {
                        equals: category?.id,
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
                    category: {
                        equals: category?.id,
                    },
                }}
                enableNotFound={false}
            >
                <h1 className="col-span-1 lg:col-span-3 font-bold text-2xl">{'Events'}</h1>
            </Events>
            <Downloads
                className="container mb-8"
                where={{
                    category: {
                        equals: category?.id,
                    },
                }}
                enableNotFound={false}
            >
                <h1 className="col-span-1 lg:col-span-3 font-bold text-2xl">{'Downloads'}</h1>
            </Downloads>
        </main>
    )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const category = await getCategory(id)

    return {
        title: category.name,
    }
}

const getCategory = cache(async (id: string) => {
    try {
        const payload = await getPayload({ config })
        return await payload.findByID({ collection: 'categories', id: parseInt(id) || 0 })
    } catch (error: unknown) {
        if ((error as Error).message === 'Not Found') return notFound()
        throw error
    }
})

export const dynamic = 'force-dynamic'
