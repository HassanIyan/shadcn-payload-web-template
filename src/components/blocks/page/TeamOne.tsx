'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/payload-types'
import React, { FC } from 'react'

export interface TeamOneProps {
    title?: string | null
    description?: string | null
    team?:
        | {
              image?: Media
              name?: string | null
              designation?: string | null
              sub_title?: string | null
              description?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'team-one'
}

export const TeamOne: FC<TeamOneProps> = ({ ...props }) => {
    const leaders = [
        {
            name: 'Dr. Ahmed Hassan',
            title: 'Principal',
            experience: '15+ years in education',
            description: 'Leading with vision and dedication to academic excellence.',
            image: '/placeholder.svg',
        },
        {
            name: 'Ms. Mariyam Ali',
            title: 'Vice Principal',
            experience: '12+ years in administration',
            description: 'Passionate about student development and innovative teaching.',
            image: '/placeholder.svg',
        },
        {
            name: 'Mr. Ibrahim Mohamed',
            title: 'Academic Director',
            experience: '18+ years in curriculum development',
            description: 'Expert in international curricula and educational standards.',
            image: '/placeholder.svg',
        },
    ]
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Leadership &amp; Legacy
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {`Meet the dedicated leaders who guide our school's vision and ensure
                        excellence in education.`}
                    </p>
                </div>

                {/* Leader Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {leaders.map((leader, idx) => (
                        <Card
                            key={idx}
                            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Image with gradient overlay */}
                            <div className="relative">
                                <img
                                    alt={leader.name}
                                    src={leader.image}
                                    loading="lazy"
                                    width={300}
                                    height={300}
                                    className="w-full h-64 object-cover"
                                    style={{ color: 'transparent' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>

                            {/* Content */}
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">
                                    {leader.name}
                                </h3>
                                <p className="text-sky-600 font-semibold mb-2">{leader.title}</p>
                                <p className="text-sm text-gray-500 mb-3">{leader.experience}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {leader.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
