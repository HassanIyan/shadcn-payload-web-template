'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Category, Media, Post, Tag, User } from '@/payload-types'
import Image from 'next/image'
import { PaginatedDocs } from 'payload'
import React, { FC, Fragment, ReactNode, useCallback, useState } from 'react'
import { format } from 'date-fns'
import Link from 'next/link'
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    Loader2Icon,
    ShareIcon,
    TimerIcon,
    UserIcon,
} from 'lucide-react'
import RichText from '../rich-text'

export interface PostClientProps {
    docs?: Post[]
    nextPage?: number | null
    loadMore?: (nextPage: number) => Promise<PaginatedDocs<Post>>
    className?: string
    landing?: boolean
}

export const PostClient: FC<PostClientProps> = ({ className, landing = true, ...props }) => {
    const [nextPage, setNextPage] = useState(props.nextPage)
    const [docs, setDocs] = useState(props.docs)
    const [loading, setLoading] = useState(false)

    const loadMore = useCallback(async () => {
        try {
            setLoading(true)
            if (props.loadMore && nextPage) {
                const res = await props.loadMore(nextPage)
                setDocs((d) => [...(d || []), ...res.docs])
                setNextPage(res?.nextPage)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }, [props, nextPage])

    return (
        <section className={cn('grid lg:grid-cols-4 grid-cols-2 gap-4', className)}>
            {docs?.map((doc, index) => (
                <PostCard
                    key={doc?.id}
                    size={index === 0 && landing ? 'lg' : 'sm'}
                    className={cn(index === 0 && landing && 'lg:col-span-4 col-span-2')}
                    {...doc}
                />
            ))}

            {nextPage && (
                <div className="col-span-2 lg:col-span-4 flex items-center justify-center">
                    <Button onClick={loadMore} disabled={loading}>
                        {loading && <Loader2Icon className="animate-spin" />}
                        {loading ? 'Loading...' : 'Load more'}
                    </Button>
                </div>
            )}
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

    if (size === 'lg')
        return (
            <div
                className={cn(
                    'grid grid-cols-2 border border-border rounded-md transition-all cursor-default overflow-hidden',
                    'hover:shadow-lg hover:-translate-y-3',
                    'bg-card text-card-foreground',
                    className,
                )}
            >
                <div className="relative">
                    <Image
                        src={feature_image?.url as string}
                        alt={feature_image?.alt}
                        width={feature_image?.width as number}
                        height={feature_image?.height as number}
                        className="h-full object-cover aspect-video"
                    />
                    <span className="bg-primary text-primary-foreground absolute top-2 left-2 px-4 rounded-md">
                        {category?.name}
                    </span>
                </div>
                <div className="p-4 flex flex-col">
                    <div className="text-xs flex items-center lg:gap-4 gap-2 flex-wrap mb-2">
                        <span className="flex items-center gap-2">
                            <UserIcon size={12} />
                            {author?.name}
                        </span>
                        <span className="flex items-center gap-2">
                            <TimerIcon size={12} />
                            {format(props.createdAt, 'MMMM dd, yyyy')}
                        </span>
                    </div>
                    <span className="font-bold lg:text-4xl mb-4">{props.title}</span>
                    <span className="text-sm line-clamp-3 mb-6 flex-1">{props.description}</span>
                    <div className="flex items-center gap-2 flex-wrap">
                        <Button asChild>
                            <Link href={url}>
                                {'Read Full Article'} <ArrowRightIcon />
                            </Link>
                        </Button>
                        <Button
                            variant={'outline'}
                            onClick={() => navigator?.share({ url: url, title: props.title })}
                            className="cursor-pointer"
                        >
                            <ShareIcon /> {'Share'}
                        </Button>
                    </div>
                </div>
            </div>
        )
    return (
        <div
            className={cn(
                'flex flex-col border border-border rounded-md transition-all cursor-default overflow-hidden',
                'hover:shadow-lg hover:-translate-y-3',
                'bg-card text-card-foreground',
                className,
            )}
        >
            <div className="relative">
                <Image
                    src={feature_image?.url as string}
                    alt={feature_image?.alt}
                    width={feature_image?.width as number}
                    height={feature_image?.height as number}
                    className="aspect-video object-cover"
                />
                <span className="bg-primary text-primary-foreground absolute top-2 left-2 px-4 rounded-md">
                    {category?.name}
                </span>
            </div>
            <div className="p-2 flex flex-col flex-1">
                <span className="text-xs flex items-center gap-2 mb-2">
                    <UserIcon size={12} />
                    {author?.name}
                </span>
                <span className="font-bold mb-2 flex-1 lg:flex-none">{props.title}</span>
                <div className="flex-1 mb-4 lg:inline hidden">
                    <span className="text-sm line-clamp-3">{props.description}</span>
                </div>
                <div className="flex items-center justify-between flex-wrap">
                    <span className="flex items-center gap-1 text-xs">
                        <TimerIcon size={12} />
                        {format(props.createdAt, 'MMMM dd, yyyy')}
                    </span>
                    <Button asChild variant={'ghost'} className=" text-primary">
                        <Link href={url}>
                            {'Read Full Article'} <ArrowRightIcon />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export const PostView: FC<Post & { relatedPosts?: ReactNode }> = ({
    id,
    relatedPosts,
    ...post
}) => {
    const feature_image = post?.feature_image as Media
    const author = post?.author as User
    const tags = post?.tags as Tag[]
    const url = `/posts/${id}`

    return (
        <Fragment>
            <article className="max-w-5xl mx-auto my-8 container">
                <Link
                    href={'/posts'}
                    className="text-primary hover:opacity-85 flex gap-2 items-center mb-4"
                >
                    <ArrowLeftIcon /> {'Back to News'}
                </Link>
                <h1 className="text-foreground text-3xl lg:text-5xl font-bold mb-4">
                    {post?.title}
                </h1>
                <div className="text-sm text-accent-foreground flex items-center lg:gap-4 gap-2 flex-wrap mb-4">
                    <span className="flex items-center">
                        <UserIcon size={16} />
                        {author?.name}
                    </span>
                    <span className="flex items-center gap-2">
                        <TimerIcon size={16} />
                        {format(post.createdAt, 'MMMM dd, yyyy')}
                    </span>
                    <Button
                        variant={'outline'}
                        onClick={() => navigator?.share({ url: url, title: post.title })}
                        className="ms-auto cursor-pointer"
                    >
                        <ShareIcon /> {'Share'}
                    </Button>
                </div>
                <Image
                    src={feature_image?.url as string}
                    alt={feature_image?.alt}
                    width={feature_image?.width as number}
                    height={feature_image?.height as number}
                    className="w-full mb-4"
                />

                <RichText>{post?.lead}</RichText>

                <hr className="border border-border" />

                <section className="flex gap-6 my-4">
                    <h6 className="font-medium">Tags</h6>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        {tags?.map((tag, index) => (
                            <Link
                                key={index}
                                href={`/tags/${tag.id}`}
                                className="bg-primary/15 text-primary rounded-full py-1 px-4 text-sm hover:opacity-75"
                            >
                                {tag.name}
                            </Link>
                        ))}
                    </div>
                </section>
            </article>
            <section className="bg-accent text-accent-foreground py-12">
                <div className="container">
                    <h6 className="font-bold mb-6 text-lg">{'Related Articles'}</h6>
                    {relatedPosts}
                </div>
            </section>
        </Fragment>
    )
}
