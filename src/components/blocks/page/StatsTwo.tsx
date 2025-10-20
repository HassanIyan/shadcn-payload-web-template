import React, { FC } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export interface StatsTwoProps {
    title?: string | null
    description?: string | null
    stat?:
        | {
              name?: string | null
              value?: string | null
              description?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'stats-two'
}

export const StatsTwo: FC<StatsTwoProps> = ({ title, description, stat }) => {
    return (
        <section className="py-20 bg-muted/75">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    {title && (
                        <h2 className="text-4xl font-bold text-muted-foreground mb-4">{title}</h2>
                    )}
                    {description && (
                        <p className="text-xl text-muted-foreground/75 max-w-3xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {stat?.map(({ id, name, value, description }) => (
                        <Card
                            key={id}
                            className="text-center border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            <CardContent className="pt-8 pb-6 px-6">
                                <div className="text-5xl font-bold text-primary mb-2">{value}</div>
                                <h3 className="text-xl font-semibold text-card-foreground/80 mb-2">
                                    {name}
                                </h3>
                                <p className="text-card-foreground/60">{description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
