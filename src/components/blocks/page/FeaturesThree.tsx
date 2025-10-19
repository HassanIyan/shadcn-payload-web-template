'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import React, { FC } from 'react'

export interface FeaturesThreeProps {
    title?: string | null
    description?: string | null
    badge?: string | null
    feature?:
        | {
              emoji?: string | null
              title?: string | null
              sub_title?: string | null
              value?: string | null
              name?: string | null
              tags?:
                  | {
                        title?: string | null
                        id?: string | null
                    }[]
                  | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'features-three'
}

export const FeaturesThree: FC<FeaturesThreeProps> = ({ ...props }) => {
    const houses = [
        {
            name: 'Chaandhanee',
            emoji: '🌙',
            motto: 'Moonlight',
            points: 2450,
            attributes: ['Wisdom', 'Serenity', 'Guidance'],
            color: 'text-[#51BDA0]',
        },
        {
            name: 'Huvandhumaa',
            emoji: '🌊',
            motto: 'Ocean Breeze',
            points: 2380,
            attributes: ['Freedom', 'Adventure', 'Flow'],
            color: 'text-[#51BDA0]',
        },
        {
            name: 'Janavaree',
            emoji: '🌺',
            motto: 'Paradise',
            points: 2520,
            attributes: ['Beauty', 'Growth', 'Harmony'],
            color: 'text-[#51BDA0]',
        },
        {
            name: 'Kaaminee',
            emoji: '⚡',
            motto: 'Lightning',
            points: 2410,
            attributes: ['Energy', 'Speed', 'Power'],
            color: 'text-[#51BDA0]',
        },
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">House System</h2>
                <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                    Every student belongs to one of our four houses, fostering teamwork, leadership,
                    and healthy competition.
                </p>
                <div className="inline-flex items-center border bg-[#51BDA0]/10 text-[#51BDA0] rounded-full px-6 py-2 text-lg font-semibold mt-4">
                    Earn points. Win the cup. 🏆
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {houses.map((house) => (
                    <Card
                        key={house.name}
                        className="group hover:shadow-lg transition-shadow border border-[#E5E7EB]"
                    >
                        <CardHeader className="text-center">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {house.emoji}
                            </div>
                            <CardTitle className="text-2xl font-semibold text-[#1A1A1A]">
                                {house.name}
                            </CardTitle>
                            <CardDescription className="text-sm text-[#6B7280] italic">
                                {house.motto}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center pt-0">
                            <div className="mb-4">
                                <div className={`text-3xl font-bold ${house.color}`}>
                                    {house.points}
                                </div>
                                <div className="text-sm text-[#6B7280]">House Points</div>
                            </div>
                            <div className="flex justify-center gap-2 flex-wrap">
                                {house.attributes.map((attr) => (
                                    <Badge
                                        key={attr}
                                        className={`text-xs font-semibold border-transparent bg-[#51BDA0]/10 ${house.color} hover:bg-primary/80`}
                                    >
                                        {attr}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
