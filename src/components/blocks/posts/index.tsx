import React, { FC } from 'react'
import { getPayload, Sort, Where } from 'payload'
import config from '@payload-config'
import { PostClient } from './client'

export interface PostsProps {
    where?: Where
    draft?: boolean
    sort?: Sort
    className?: string
}

export const Posts: FC<PostsProps> = async ({ where, draft, sort, className }) => {
    const { docs, nextPage } = await loadMorePosts({ where, draft, sort })

    return (
        <PostClient
            docs={docs}
            nextPage={nextPage}
            loadMore={async (nextPage) => {
                'use server'
                return await loadMorePosts({ nextPage, where, draft, sort })
            }}
            className={className}
        />
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
