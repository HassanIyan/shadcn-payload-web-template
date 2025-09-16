'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Category, Media, Post, User } from '@/payload-types'
import { PaginatedDocs } from 'payload'
import React, { FC, useCallback, useState } from 'react'

export interface PostClientProps {
    docs?: Post[]
    nextPage?: number | null
    loadMore?: (nextPage: number) => Promise<PaginatedDocs<Post>>
    className?: string
}

export const PostClient: FC<PostClientProps> = ({ className, ...props }) => {
    const [nextPage, setNextPage] = useState(props.nextPage)
    const [docs, setDocs] = useState(props.docs)

    const loadMore = useCallback(async () => {
        if (props.loadMore && nextPage) {
            const res = await props.loadMore(nextPage)
            setDocs((d) => [...(d || []), ...res.docs])
            setNextPage(res?.nextPage)
        }
    }, [props, nextPage])

    return (
        <section className={cn('container grid grid-cols-4', className)}>
            {docs?.map((doc, index) => (
                <PostCard
                    key={doc?.id}
                    size={index === 0 ? 'lg' : 'sm'}
                    className={cn(index === 0 && 'lg:col-span-4 col-span-2')}
                    {...doc}
                />
            ))}

            {nextPage && <Button onClick={loadMore}>{'Load more'}</Button>}
        </section>
    )
}

export const PostCard: FC<Post & { size?: 'sm' | 'lg'; className?: string }> = ({
    id,
    size,
    className,
    ...props
}) => {
    const feature_image = props.feature_image as Media
    const category = props.category as Category
    const author = props.author as User
    const url = `/posts/${id}`

    if (size === 'lg') return <div className={cn('', className)}></div>
    return <div className={cn('', className)}></div>
}
