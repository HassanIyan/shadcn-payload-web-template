'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Post } from '@/payload-types'
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
        <section className={cn('container', className)}>
            {docs?.map((doc) => (
                <PostCard key={doc?.id} {...doc} />
            ))}

            {nextPage && <Button onClick={loadMore}>{'Load more'}</Button>}
        </section>
    )
}

export const PostCard: FC<Post & { size?: 'sm' | 'lg' }> = ({}) => {
    return <div></div>
}
