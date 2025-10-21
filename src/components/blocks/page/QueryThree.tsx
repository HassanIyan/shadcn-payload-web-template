import React, { FC, Suspense, use } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Download } from '@/payload-types'
import { QueryThreeAction } from '@/app/(frontend)/[[...fragments]]/action'
import { Skeleton } from '@/components/ui/skeleton'
import { PaginatedDocs } from 'payload'
import { DownloadCard } from '../downloads/client'

export const colors = ['E76565', '0EA5E9', '22C55E', 'EAB308']

export interface QueryThreeProps {
    title?: string | null
    description?: string | null
    query?:
        | {
              [k: string]: unknown
          }
        | unknown[]
        | string
        | number
        | boolean
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'query-three'
}

const DownloadsSkeleton: FC = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
                key={i}
                className="bg-background border-border text-card-foreground shadow-sm overflow-hidden"
            >
                <div className="flex flex-col space-y-2 px-4 py-4">
                    <Skeleton className="h-4 w-1/3 rounded-full" />
                    <Skeleton className="h-6 w-full rounded" />
                    <Skeleton className="h-4 w-3/4 rounded" />
                </div>
                <CardContent className="pt-0">
                    <Skeleton className="h-4 w-2/3 mb-2 rounded" />
                    <Skeleton className="h-4 w-1/2 mb-2 rounded" />
                    <Skeleton className="h-9 w-full rounded" />
                </CardContent>
            </Card>
        ))}
    </div>
)

const QueryThreeContent = ({ query }: { query: QueryThreeProps['query'] }) => {
    const downloads = use(QueryThreeAction(query)) as unknown as PaginatedDocs<Download>

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads?.docs?.map((doc, index) => (
                <DownloadCard key={doc?.id} color={`#${colors[index]}`} {...doc} />
            ))}
        </div>
    )
}

export const QueryThree: FC<QueryThreeProps> = ({ title, description, query = {} }) => {
    return (
        <section className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
                </div>

                <Suspense fallback={<DownloadsSkeleton />}>
                    <QueryThreeContent query={query} />
                </Suspense>
            </div>
        </section>
    )
}
