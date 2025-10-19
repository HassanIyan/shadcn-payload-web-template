'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Users, Heart, Award } from 'lucide-react'
import React, { FC } from 'react'

export interface StatsOneProps {
    items?:
        | {
              icon?: string | null
              color?: string | null
              name?: string | null
              value?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'stats-one'
}

export const StatsOne: FC<StatsOneProps> = ({ ...props }) => {
    const stats = [
        {
            icon: <Calendar className="h-8 w-8 text-white" />,
            value: '42',
            label: 'Years of Excellence',
            bgCircle: 'bg-coral-500',
            gradient: 'from-coral-100 to-coral-50',
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            value: '800+',
            label: 'Students',
            bgCircle: 'bg-sky-500',
            gradient: 'from-sky-100 to-sky-50',
        },
        {
            icon: <Heart className="h-8 w-8 text-white" />,
            value: '60+',
            label: 'Dedicated Staff',
            bgCircle: 'bg-mint-500',
            gradient: 'from-mint-100 to-mint-50',
        },
        {
            icon: <Award className="h-8 w-8 text-white" />,
            value: '100%',
            label: 'A-Level Pass Rate',
            bgCircle: 'bg-yellow-500',
            gradient: 'from-yellow-100 to-yellow-50',
        },
    ]

    return (
        <section className="py-16 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {stats.map((item, index) => (
                        <Card
                            key={index}
                            className={`text-center bg-gradient-to-br ${item.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                        >
                            <CardContent className="p-6 pt-6">
                                <div
                                    className={`mx-auto w-16 h-16 ${item.bgCircle} rounded-full flex items-center justify-center mb-4`}
                                >
                                    {item.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                                    {item.value}
                                </h3>
                                <p className="text-gray-600 font-medium">{item.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
