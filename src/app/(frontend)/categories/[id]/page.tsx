import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { Metadata } from 'next'

interface Props {
    params: Promise<{ id: string }>
}

export default async function CategoryPage({ params }: Props) {
    const { id } = await params
    const category = await getCategory(id)

    return <div>{JSON.stringify(category)}</div>
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
