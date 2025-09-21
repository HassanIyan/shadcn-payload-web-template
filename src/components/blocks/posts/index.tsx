import React, { FC, ReactNode } from 'react'
import { getPayload, Sort, Where } from 'payload'
import config from '@payload-config'
import { PostClient } from './client'
import { notFound } from 'next/navigation'

export interface PostsProps {
    where?: Where
    draft?: boolean
    sort?: Sort
    className?: string
    landing?: boolean
    children?: ReactNode
    enableNotFound?: boolean
}

export const Posts: FC<PostsProps> = async ({
    where,
    draft,
    sort,
    className,
    landing,
    enableNotFound = true,
    children,
}) => {
    const { docs, nextPage, totalDocs } = await loadMorePosts({ where, draft, sort })

    if ((totalDocs || 0) === 0) {
        if (enableNotFound) {
            notFound()
        } else {
            return null
        }
    }

    return (
        <PostClient
            docs={docs}
            nextPage={nextPage}
            landing={landing}
            loadMore={async (nextPage) => {
                'use server'
                return await loadMorePosts({ nextPage, where, draft, sort })
            }}
            className={className}
        >
            {children}
        </PostClient>
    )
}

const loadMorePosts = async ({
    where,
    draft,
    sort,
    nextPage = 1,
}: PostsProps & { nextPage?: number }) => {
    const payload = await getPayload({ config })

    return await payload.find({
        collection: 'posts',
        where,
        draft,
        sort,
        page: nextPage,
    })
}
