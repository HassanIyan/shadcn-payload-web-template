import React, { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
    params: Promise<{ id: string }>
}

export default async function EventPage({ params }: Props) {
    const { id } = await params
    const event = await getEvent(id)

    return <div>{JSON.stringify(event)}</div>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const event = await getEvent(id)

    return {
        title: event.title,
    }
}

const getEvent = cache(async (id: string) => {
    try {
        const payload = await getPayload({ config })
        return await payload.findByID({ collection: 'events', id: parseInt(id) || 0 })
    } catch (error: unknown) {
        if ((error as Error).message === 'Not Found') return notFound()
        throw error
    }
})
