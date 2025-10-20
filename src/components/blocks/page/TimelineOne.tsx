import { Card, CardContent } from '@/components/ui/card'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'

export interface TimelineOneProps {
    title?: string | null
    description?: string | null
    timeline?:
        | {
              color?: string | null
              icon?: string | null
              title?: string | null
              description?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'timeline-one'
}

export const TimelineOne: FC<TimelineOneProps> = ({ title, description, timeline }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    {title && (
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                            {description}{' '}
                        </p>
                    )}
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Center vertical line */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full  rounded-full"
                        style={{
                            background: `linear-gradient(to bottom, ${timeline
                                ?.filter((item) => item?.color)
                                .map((item) => item.color)
                                .join(', ')})`,
                        }}
                    />

                    <div className="space-y-16">
                        {timeline?.map((step, index) => {
                            const isEven = index % 2 === 1
                            // @ts-expect-error: icon is not typed
                            const Icon = dynamic(dynamicIconImports[step?.icon])

                            return (
                                <div
                                    key={step.id}
                                    className={`flex items-center ${isEven ? 'flex-row-reverse' : ''}`}
                                >
                                    {/* Card */}
                                    <div className="w-1/2 px-4">
                                        <Card
                                            className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                                            style={{
                                                backgroundColor: `${step.color}14` || undefined,
                                            }}
                                        >
                                            <CardContent className="p-6 space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`p-2 rounded-full`}
                                                        style={{
                                                            backgroundColor:
                                                                step.color || undefined,
                                                        }}
                                                    >
                                                        {/* @ts-expect-error: not typed */}
                                                        <Icon className="h-5 w-5 text-white" />
                                                    </div>
                                                    <h3
                                                        className={`text-2xl font-semibold`}
                                                        style={{ color: step.color || undefined }}
                                                    >
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <p className="text-card-foreground">
                                                    {step.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Step number */}
                                    <div
                                        className="relative w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-white font-bold text-lg"
                                        style={{ backgroundColor: step.color || undefined }}
                                    >
                                        {index + 1}
                                    </div>

                                    <div className="w-1/2"></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
