import { Card, CardContent } from '@/components/ui/card'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'

export interface FeaturesTwoProps {
    color?: string | null
    title?: string | null
    description?: string | null
    features?:
        | {
              icon?: string | null
              color?: string | null
              emoji?: string | null
              title?: string | null
              description?: string | null
              id?: string | null
              blockName?: string | null
              blockType: 'varient-two' | 'varient-one'
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'features-two'
}

export const FeaturesTwo: FC<FeaturesTwoProps> = ({ features, description, title, color }) => {
    return (
        <section
            className="py-20"
            style={{
                backgroundImage: `linear-gradient(to right, ${color}20, ${color})`,
            }}
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
                    <p className="text-xl text-foreground/75 max-w-3xl mx-auto">{description}</p>
                </div>

                <div className="grid grid-cols-12 lg:gap-8 gap-4">
                    {features?.map(({ id, blockType, title, description, color, ...feature }) => {
                        if (blockType === 'varient-one') {
                            const Icon = feature?.icon
                                ? // @ts-expect-error: dynamic icon import
                                  dynamic(dynamicIconImports[feature?.icon])
                                : null

                            return (
                                <Card
                                    key={id}
                                    className="shadow-lg hover:shadow-xl transition-all duration-300 col-span-12 lg:col-span-6 mb-4"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div
                                                className="p-3 rounded-full"
                                                style={{ backgroundColor: color || undefined }}
                                            >
                                                {/* @ts-expect-error: dynamic icon import */}
                                                <Icon className="h-8 w-8 text-background" />
                                            </div>
                                            <div
                                                className="font-semibold tracking-tight text-2xl"
                                                style={{ color: color || undefined }}
                                            >
                                                {title}
                                            </div>
                                        </div>
                                        <p className="text-lg text-foreground/65 leading-relaxed">
                                            {description}
                                        </p>
                                    </CardContent>
                                </Card>
                            )
                        }
                        if (blockType === 'varient-two')
                            return (
                                <Card
                                    key={id}
                                    className={`text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 col-span-6 lg:col-span-4`}
                                    style={{ backgroundColor: color ? `${color}14` : undefined }}
                                >
                                    <CardContent className="p-6 pt-6">
                                        <div className="text-4xl mb-4">{feature?.emoji}</div>
                                        <h3
                                            className={`text-xl font-bold mb-3`}
                                            style={{ color: color || undefined }}
                                        >
                                            {title}
                                        </h3>
                                        <p className="text-foreground/75 text-sm leading-relaxed">
                                            {description}
                                        </p>
                                    </CardContent>
                                </Card>
                            )
                    })}
                </div>
            </div>
        </section>
    )
}
