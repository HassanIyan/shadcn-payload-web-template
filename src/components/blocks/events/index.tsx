import React, { FC } from 'react'
import { getPayload, Sort, Where } from 'payload'
import config from '@payload-config'
import { EventClient } from './client'
import { notFound } from 'next/navigation'

export interface EventsProps {
    where?: Where
    draft?: boolean
    sort?: Sort
    className?: string
}

export const Events: FC<EventsProps> = async ({ where, draft, sort, className }) => {
    const { docs, nextPage, totalDocs } = await loadMoreEvents({ where, draft, sort })

    if ((totalDocs || 0) === 0) notFound()

    return (
        <EventClient
            docs={docs}
            nextPage={nextPage}
            loadMore={async (nextPage) => {
                'use server'
                return await loadMoreEvents({ nextPage, where, draft, sort })
            }}
            className={className}
        />
    )
}

const loadMoreEvents = async ({
    where,
    draft,
    sort,
    nextPage = 1,
}: EventsProps & { nextPage?: number }) => {
    const payload = await getPayload({ config })

    return await payload.find({
        collection: 'events',
        where,
        draft,
        sort,
        page: nextPage,
    })
}
