import React, { FC } from 'react'
import { getPayload, Sort, Where } from 'payload'
import config from '@payload-config'
import { DownloadClient } from './client'
import { notFound } from 'next/navigation'

export interface DownloadsProps {
    where?: Where
    draft?: boolean
    sort?: Sort
    className?: string
    landing?: boolean
}

export const Downloads: FC<DownloadsProps> = async ({ where, draft, sort, className, landing }) => {
    const { docs, nextPage, totalDocs } = await loadMoreDownloads({ where, draft, sort })

    if ((totalDocs || 0) === 0) notFound()

    return (
        <DownloadClient
            docs={docs}
            nextPage={nextPage}
            landing={landing}
            loadMore={async (nextPage) => {
                'use server'
                return await loadMoreDownloads({ nextPage, where, draft, sort })
            }}
            className={className}
        />
    )
}

const loadMoreDownloads = async ({
    where,
    draft,
    sort,
    nextPage = 1,
}: DownloadsProps & { nextPage?: number }) => {
    const payload = await getPayload({ config })

    return await payload.find({
        collection: 'downloads',
        where,
        draft,
        sort,
        page: nextPage,
    })
}
