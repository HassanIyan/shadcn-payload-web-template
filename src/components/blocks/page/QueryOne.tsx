'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import React, { FC } from 'react'

export interface QueryOneProps {
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
    blockType: 'query-one'
}

export const QueryOne: FC<QueryOneProps> = ({ ...props }) => {
    const newsArticles = [
        {
            image: '/images/graduation-ceremony.jpg',
            title: 'Class of 2024 Achieves Outstanding A-Level Results',
            description:
                'We are proud to announce that our Class of 2024 has achieved exceptional A-Level results, with 100% pass rate and 85% of students securing places at top universities worldwide. This remarkable achievement reflects the dedication of our students and the excellence of our academic program.',
            category: 'Academic News',
            date: 'March 15, 2024',
            featured: true,
        },
        {
            image: '/images/sports-day.jpg',
            title: 'Annual Sports Day 2024 Highlights',
            description:
                'Students showcased their athletic talents in a day filled with competition and school spirit.',
            category: 'Events',
            date: 'March 12, 2024',
        },
        {
            image: '/images/science-lab.jpg',
            title: 'New Science Laboratory Opens',
            description: 'State-of-the-art facilities enhance our STEM education capabilities.',
            category: 'Facilities',
            date: 'March 8, 2024',
        },
        {
            image: '/images/art-exhibition.jpg',
            title: 'Student Art Exhibition Success',
            description:
                'Creative works by our talented students displayed at the National Art Gallery.',
            category: 'Arts',
            date: 'March 5, 2024',
        },
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Latest News</h2>
                    <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
                        Stay up to date with the latest happenings at Ahmadhiyya International
                        School
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        {newsArticles
                            .filter((a) => a.featured)
                            .map((article) => (
                                <Card
                                    key={article.title}
                                    className="shadow-sm border border-[#E5E7EB] overflow-hidden"
                                >
                                    <div className="relative h-64">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="object-cover w-full h-full"
                                            loading="lazy"
                                        />
                                        {article.featured && (
                                            <div className="absolute top-4 left-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-[#51BDA0] text-white">
                                                Featured
                                            </div>
                                        )}
                                    </div>
                                    <CardContent>
                                        <div className="flex items-center gap-4 mb-3 text-sm text-[#6B7280]">
                                            <span>{article.date}</span>
                                            <span>•</span>
                                            <span>{article.category}</span>
                                        </div>
                                        <CardTitle className="text-2xl mb-3">
                                            {article.title}
                                        </CardTitle>
                                        <CardDescription className="text-[#6B7280] mb-4">
                                            {article.description}
                                        </CardDescription>
                                        <Button className="bg-[#51BDA0] hover:bg-[#459985] text-white">
                                            Read Full Story
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                    </div>

                    <div className="space-y-6">
                        {newsArticles
                            .filter((a) => !a.featured)
                            .map((article) => (
                                <Card
                                    key={article.title}
                                    className="shadow-sm border border-[#E5E7EB] flex overflow-hidden"
                                >
                                    <div className="relative w-24 h-24 flex-shrink-0">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="object-cover w-full h-full"
                                            loading="lazy"
                                        />
                                    </div>
                                    <CardContent className="p-4 flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-[#51BDA0]/10 text-[#51BDA0]">
                                                {article.category}
                                            </div>
                                            <span className="text-xs text-[#6B7280]">
                                                {article.date}
                                            </span>
                                        </div>
                                        <CardTitle className="text-sm font-semibold mb-2">
                                            {article.title}
                                        </CardTitle>
                                        <CardDescription className="text-xs text-[#6B7280] leading-relaxed">
                                            {article.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
