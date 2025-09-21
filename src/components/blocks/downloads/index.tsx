import React, { FC, ReactNode } from 'react'
import { getPayload, Sort, Where } from 'payload'
import config from '@payload-config'
import { DownloadClient } from './client'
import { notFound } from 'next/navigation'

export interface DownloadsProps {
    where?: Where
    draft?: boolean
    sort?: Sort
    className?: string
    children?: ReactNode
    enableNotFound?: boolean
}

export const Downloads: FC<DownloadsProps> = async ({
    where,
    draft,
    sort,
    className,
    children,
    enableNotFound = true,
}) => {
    const { docs, nextPage, totalDocs } = await loadMoreDownloads({ where, draft, sort })

    if ((totalDocs || 0) === 0) {
        if (enableNotFound) {
            notFound()
        } else {
            return null
        }
    }

    return (
        <DownloadClient
            docs={docs}
            nextPage={nextPage}
            loadMore={async (nextPage) => {
                'use server'
                return await loadMoreDownloads({ nextPage, where, draft, sort })
            }}
            className={className}
        >
            {children}
        </DownloadClient>
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
