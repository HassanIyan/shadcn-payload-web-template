'use client'

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

export const StatsTwo: FC<StatsTwoProps> = ({ ...props }) => {
    const results = [
        {
            value: '100%',
            title: 'A-Level Pass Rate',
            description: 'Three consecutive years of excellence',
        },
        {
            value: '95%',
            title: 'IGCSE A*-C Grades',
            description: 'Consistently high achievement',
        },
        {
            value: '85%',
            title: 'University Acceptance',
            description: 'Top universities worldwide',
        },
    ]

    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                        Outstanding Academic Results
                    </h2>
                    <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                        Our students consistently achieve excellent results in Cambridge
                        examinations, opening doors to top universities worldwide.
                    </p>
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {results.map((result) => (
                        <Card
                            key={result.title}
                            className="text-center border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            <CardContent className="pt-8 pb-6 px-6">
                                <div className="text-5xl font-bold text-[#51BDA0] mb-2">
                                    {result.value}
                                </div>
                                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                                    {result.title}
                                </h3>
                                <p className="text-[#6B7280]">{result.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
