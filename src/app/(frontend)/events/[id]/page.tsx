import React, { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { EventView } from '@/components/blocks/events/client'
import { Events } from '@/components/blocks/events'

interface Props {
    params: Promise<{ id: string }>
}

export default async function EventPage({ params }: Props) {
    const { id } = await params
    const Event = await getEvent(id)

    return (
        <main>
            <EventView
                {...Event}
                relatedEvents={
                    <Events
                        where={{
                            tags: {
                                in: Event?.tags?.map((tag) =>
                                    typeof tag === 'number' ? tag : tag.id,
                                ),
                            },
                        }}
                    />
                }
            />
        </main>
    )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const event = await getEvent(id)

    return {
        title: event?.title,
    }
}

const getEvent = cache(async (id: string) => {
    try {
        const payload = await getPayload({ config })
        const res = await payload.findByID({ collection: 'events', id: parseInt(id) || 0 })
        if (res?._status === 'published') return res
        else throw new Error('Not Found')
    } catch (error: unknown) {
        if ((error as Error).message === 'Not Found') return notFound()
        throw error
    }
})

export const dynamic = 'force-dynamic'
