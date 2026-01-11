import { Events } from '@/components/blocks/events'
import { Metadata } from 'next'
import React from 'react'

export default function EventsPage() {
    return (
        <main className="my-12">
            <Events
                className="container"
                where={{
                    _status: {
                        equals: 'published',
                    },
                }}
            />
        </main>
    )
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Events',
    }
}

export const dynamic = 'force-dynamic'
