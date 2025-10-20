'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export interface ResourcesOneProps {
    title?: string | null
    description?: string | null
    resources?:
        | {
              icon?: string | null
              title?: string | null
              description?: string | null
              detail?: string | null
              button?: {
                  title?: string | null
                  link?: string | null
              }
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'resources-one'
}

export const ResourcesOne: FC<ResourcesOneProps> = ({ title, description, resources }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    {title && (
                        <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources?.map(({ id, title, description, detail, button }) => (
                        <Card
                            key={id}
                            className="group border border-border bg-card hover:shadow-md transition-transform duration-300 hover:-translate-y-1"
                        >
                            <CardHeader className="text-center">
                                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Download className="h-8 w-8 text-primary-foreground" />
                                </div>
                                {title && (
                                    <CardTitle className="text-lg font-semibold text-foreground">
                                        {title}
                                    </CardTitle>
                                )}
                                {description && (
                                    <CardDescription className="text-muted-foreground">
                                        {description}
                                    </CardDescription>
                                )}
                            </CardHeader>

                            <CardContent className="text-center space-y-4">
                                {detail && (
                                    <p className="text-sm text-muted-foreground">{detail}</p>
                                )}
                                {button && (
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                    >
                                        <Link href={button.link || '#'}>
                                            {button.title || 'Learn More'}
                                        </Link>
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
