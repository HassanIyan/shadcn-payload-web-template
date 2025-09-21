'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Category, Download, Media } from '@/payload-types'
import { PaginatedDocs } from 'payload'
import React, { FC, ReactNode, useCallback, useState } from 'react'
import { DownloadIcon, Loader2Icon } from 'lucide-react'
import Link from 'next/link'
import { extension } from 'mime-types'
import { filesize } from 'filesize'

export interface DownloadClientProps {
    docs?: Download[]
    nextPage?: number | null
    loadMore?: (nextPage: number) => Promise<PaginatedDocs<Download>>
    className?: string
    children?: ReactNode
}

export const DownloadClient: FC<DownloadClientProps> = ({ className, children, ...props }) => {
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

    const colors = ['E76565', '0EA5E9', '22C55E', 'EAB308']

    return (
        <section className={cn('grid lg:grid-cols-3 grid-cols-1 gap-4', className)}>
            {children}
            {docs?.map((doc, index) => (
                <DownloadCard key={doc?.id} color={`#${colors[index % colors.length]}`} {...doc} />
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

export const DownloadCard: FC<Download & { className?: string; color?: string }> = ({
    className,
    color,
    ...props
}) => {
    const category = props.category as Category
    const file = props.file as Media
    const url = file?.url || ''

    return (
        <div
            className={cn(
                'rounded-md shadow-md hover:shadow-lg hover:-translate-y-2 transition-all cursor-default p-4',
                'flex flex-col text-card-foreground',
                className,
            )}
            style={{ backgroundColor: `${color}30` }}
        >
            <div className="flex items-start justify-between mb-2">
                <span style={{ backgroundColor: color }} className="text-white rounded-full p-3">
                    <DownloadIcon />
                </span>
                <div className="text-xs flex flex-col text-end">
                    <span>{extension(file?.mimeType || '')}</span>
                    <span>{filesize(file?.filesize || '')}</span>
                </div>
            </div>
            <span style={{ color }} className="font-bold text-lg mb-2">
                {props?.name}
            </span>
            <span className="mb-2">{props?.description}</span>
            <div className="flex gap-4 items-center justify-between">
                <span
                    style={{ color, backgroundColor: `${color}30` }}
                    className="text-xs py-1 px-2 rounded-full"
                >
                    {category.name}
                </span>
                <Link
                    style={{ backgroundColor: color }}
                    className="text-white px-3 py-1 rounded-full hover:opacity-85"
                    href={url}
                >
                    {'Download'}
                </Link>
            </div>
        </div>
    )
}
