import React, { FC, Suspense, use } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, MapPin } from 'lucide-react'
import { Category, Event } from '@/payload-types'
import { QueryTwoAction } from '@/app/(frontend)/[[...fragments]]/action'
import { Skeleton } from '@/components/ui/skeleton'
import { PaginatedDocs } from 'payload'

export interface QueryTwoProps {
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
    blockType: 'query-two'
}

// Skeleton Loader
const EventsSkeleton: FC = () => (
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

// Server Component for content
const QueryTwoContent = ({ query }: { query: QueryTwoProps['query'] }) => {
    const events = use(QueryTwoAction(query)) as unknown as PaginatedDocs<Event>

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events?.docs?.map((event) => (
                <Card
                    key={event.id}
                    className="bg-background border-border text-card-foreground shadow-sm hover:shadow-md overflow-hidden transition-shadow"
                >
                    <div className="flex flex-col space-y-1.5 px-4">
                        <div className="flex items-start justify-between">
                            <div className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-2.5 py-0.5 text-xs font-semibold mb-2">
                                {(event.category as Category)?.name}
                            </div>
                            <div className="text-right text-sm text-muted-foreground">
                                <div className="font-semibold">{event.start_date}</div>
                            </div>
                        </div>
                        <div className="font-semibold tracking-tight text-foreground text-lg leading-tight">
                            {event.title}
                        </div>
                    </div>

                    <CardContent className="pt-0">
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                <span>{event.audience}</span>
                            </div>
                        </div>

                        <Button className="w-full mt-4 h-9 px-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg bg-background">
                            Add to Calendar
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export const QueryTwo: FC<QueryTwoProps> = ({ title, description, query = {} }) => {
    return (
        <section className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
                </div>

                <Suspense fallback={<EventsSkeleton />}>
                    <QueryTwoContent query={query} />
                </Suspense>
            </div>
        </section>
    )
}
