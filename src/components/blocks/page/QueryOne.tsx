import React, { FC, Suspense, use } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock } from 'lucide-react'
import { Category, Media, Post } from '@/payload-types'
import { QueryOneAction } from '@/app/(frontend)/[[...fragments]]/action'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'

export interface QueryOneProps {
    title?: string | null
    description?: string | null
    query?: { [k: string]: unknown } | unknown[] | string | number | boolean | null
    id?: string | null
    blockName?: string | null
    blockType: 'query-one'
}

// Skeleton Loader for the posts
const PostsSkeleton: FC = () => (
    <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
            <Skeleton className="h-64 w-full rounded-lg" />
            <div className="space-y-2">
                <Skeleton className="h-6 w-1/3 rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-10 w-32 rounded" />
            </div>
        </div>
        <div className="space-y-6">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4">
                    <Skeleton className="w-24 h-24 rounded-lg flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-1/2 rounded" />
                        <Skeleton className="h-4 w-3/4 rounded" />
                        <Skeleton className="h-3 w-full rounded" />
                    </div>
                </div>
            ))}
        </div>
    </div>
)

const QueryOneContent: FC<{ query: QueryOneProps['query'] }> = ({ query }) => {
    const posts = use(QueryOneAction(query))
    const [featured, ...others] = (posts?.docs as Post[]) || []

    return (
        <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            <div className="lg:col-span-2">
                <Card className="bg-muted border-border pt-0 text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-64">
                        <Image
                            src={(featured?.feature_image as Media)?.url as string}
                            alt={featured?.title as string}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-primary text-primary-foreground px-2.5 py-0.5 text-xs font-semibold">
                            Featured
                        </div>
                    </div>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {featured?.date}
                            </span>
                            <span>•</span>
                            <span>{(featured?.category as Category)?.name}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                            {featured?.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            {featured?.description}
                        </p>
                        <Button
                            asChild
                            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                        >
                            <Link href={`/posts/${featured?.id}`}>
                                Read Full Story
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Side Posts */}
            <div className="space-y-6">
                {others?.map((post) => (
                    <Link key={post.id} href={`/posts/${post.id}`} className="block">
                        <Card className="bg-muted border-border py-0 text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                            <div className="flex">
                                <div className="relative w-24 h-24 flex-shrink-0">
                                    <Image
                                        src={(post?.feature_image as Media)?.url as string}
                                        alt={post?.title as string}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="p-2 flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="inline-flex items-center rounded-full bg-primary/10 text-primary border border-transparent px-2.5 py-0.5 text-xs font-semibold">
                                            {(post?.category as Category)?.name}
                                        </div>
                                        <span className="text-xs text-muted-foreground">
                                            {post?.date}
                                        </span>
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-2 text-sm leading-tight line-clamp-2">
                                        {post?.title}
                                    </h4>
                                </CardContent>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export const QueryOne: FC<QueryOneProps> = ({ title, description, query = {} }) => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
                </div>

                <Suspense fallback={<PostsSkeleton />}>
                    <QueryOneContent query={query} />
                </Suspense>
            </div>
        </section>
    )
}
