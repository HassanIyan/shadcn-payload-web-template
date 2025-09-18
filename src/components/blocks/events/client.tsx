'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Category, Event, Tag } from '@/payload-types'
import { PaginatedDocs } from 'payload'
import React, { FC, Fragment, ReactNode, useCallback, useState } from 'react'
import { format } from 'date-fns'
import Link from 'next/link'
import {
    ArrowLeftIcon,
    Loader2Icon,
    MapPinIcon,
    ShareIcon,
    TimerIcon,
    UserIcon,
} from 'lucide-react'
import RichText from '../rich-text'

export interface EventClientProps {
    docs?: Event[]
    nextPage?: number | null
    loadMore?: (nextPage: number) => Promise<PaginatedDocs<Event>>
    className?: string
}

export const EventClient: FC<EventClientProps> = ({ className, ...props }) => {
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
        <section className={cn('grid lg:grid-cols-3 grid-cols-1 gap-4', className)}>
            {docs?.map((doc) => (
                <EventCard key={doc?.id} {...doc} />
            ))}

            {nextPage && (
                <div className="col-span-1 lg:col-span-3 flex items-center justify-center">
                    <Button onClick={loadMore} disabled={loading}>
                        {loading && <Loader2Icon className="animate-spin" />}
                        {loading ? 'Loading...' : 'Load more'}
                    </Button>
                </div>
            )}
        </section>
    )
}

export const EventCard: FC<Event & { className?: string }> = ({ id, className, ...props }) => {
    const category = props.category as Category
    const url = `/events/${id}`

    return (
        <div
            className={cn(
                'flex flex-col border p-4 border-border rounded-md transition-all cursor-default overflow-hidden',
                'hover:shadow-lg hover:-translate-y-3',
                'bg-card text-card-foreground',
                className,
            )}
        >
            <div className="flex gap-4 justify-between items-start">
                <span className="bg-primary text-primary-foreground px-4 rounded-md">
                    {category?.name}
                </span>

                <span className="flex items-center gap-1 text-xs">
                    {`${format(props.start_date, 'MMMM dd, yyyy hh:mm')} ${props?.end_date && `to ${format(props.end_date, 'MMMM dd, yyyy hh:mm')}`}`}
                </span>
            </div>
            <div className="p-2 flex flex-col flex-1 mb-4">
                <span className="font-bold text-lg mb-4 flex-1 lg:flex-none">{props.title}</span>
                <div className="flex items-center justify-between flex-wrap">
                    {(props.location || '')?.length > 0 && (
                        <span className="flex items-center gap-1 text-xs">
                            <MapPinIcon size={12} />
                            {props.location}
                        </span>
                    )}
                    {(props.audience || '')?.length > 0 && (
                        <span className="flex items-center gap-1 text-xs">
                            <UserIcon size={12} />
                            {props.audience}
                        </span>
                    )}
                </div>
            </div>
            <Button
                asChild
                variant={'outline'}
                className="border-primary text-primary hover:text-primary/80"
            >
                <Link href={url}>{'More...'}</Link>
            </Button>
        </div>
    )
}

export const EventView: FC<Event & { relatedEvents?: ReactNode }> = ({
    id,
    relatedEvents,
    ...event
}) => {
    const tags = event?.tags as Tag[]
    const url = `/events/${id}`

    return (
        <Fragment>
            <article className="max-w-5xl mx-auto mt-8 container">
                <Link
                    href={'/events'}
                    className="text-primary hover:opacity-85 flex gap-2 items-center mb-4"
                >
                    <ArrowLeftIcon /> {'Back to Events'}
                </Link>
                <h1 className="text-foreground text-3xl lg:text-5xl font-bold mb-4">
                    {event?.title}
                </h1>
                <div className="text-sm text-accent-foreground flex items-center lg:gap-4 gap-2 flex-wrap mb-4">
                    <span className="flex items-center gap-2">
                        <TimerIcon size={16} />
                        {format(event.createdAt, 'MMMM dd, yyyy')}
                    </span>
                    <Button
                        variant={'outline'}
                        onClick={() => navigator?.share({ url: url, title: event.title })}
                        className="ms-auto cursor-pointer"
                    >
                        <ShareIcon /> {'Share'}
                    </Button>
                </div>

                <RichText>{event?.description}</RichText>

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
                    {relatedEvents}
                </div>
            </section>
        </Fragment>
    )
}
