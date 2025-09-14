import React, { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
    params: Promise<{ id: string }>
}

export default async function TagPage({ params }: Props) {
    const { id } = await params
    const tag = await getTag(id)

    return <div>{JSON.stringify(tag)}</div>
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
