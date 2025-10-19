'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye } from 'lucide-react'
import React, { FC } from 'react'

export interface FeaturesTwoProps {
    color?: string | null
    title?: string | null
    description?: string | null
    features?:
        | (
              | {
                    color?: string | null
                    icon?: string | null
                    title?: string | null
                    description?: string | null
                    id?: string | null
                    blockName?: string | null
                    blockType: 'varient-one'
                }
              | {
                    color?: string | null
                    emoji?: string | null
                    title?: string | null
                    description?: string | null
                    id?: string | null
                    blockName?: string | null
                    blockType: 'varient-two'
                }
          )[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'features-two'
}

export const FeaturesTwo: FC<FeaturesTwoProps> = ({ features, description, title, color }) => {
    const values = [
        {
            emoji: '🏆',
            title: 'Excellence',
            color: 'text-coral-700',
            gradient: 'from-coral-100 to-coral-50',
            description:
                'We strive for the highest standards in everything we do, encouraging students to reach their full potential.',
        },
        {
            emoji: '🤝',
            title: 'Integrity',
            color: 'text-sky-700',
            gradient: 'from-sky-100 to-sky-50',
            description:
                'We foster honesty, respect, and ethical behavior in all our interactions and decisions.',
        },
        {
            emoji: '💡',
            title: 'Innovation',
            color: 'text-mint-700',
            gradient: 'from-mint-100 to-mint-50',
            description:
                'We embrace creativity and forward-thinking approaches to education and problem-solving.',
        },
        {
            emoji: '🌍',
            title: 'Inclusivity',
            color: 'text-yellow-700',
            gradient: 'from-yellow-100 to-yellow-50',
            description:
                'We celebrate diversity and ensure every student feels valued and supported in our community.',
        },
        {
            emoji: '❤️',
            title: 'Compassion',
            color: 'text-coral-700',
            gradient: 'from-coral-100 to-coral-50',
            description:
                'We cultivate empathy and kindness, encouraging students to care for others and their environment.',
        },
        {
            emoji: '🌱',
            title: 'Growth',
            color: 'text-sky-700',
            gradient: 'from-sky-100 to-sky-50',
            description:
                'We believe in continuous learning and development for students, staff, and our institution.',
        },
    ]

    return (
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-coral-500 rounded-full">
                                    <Target className="h-8 w-8 text-white" />
                                </div>
                                <div className="font-semibold tracking-tight text-2xl text-coral-700">
                                    Our Mission
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To provide a world-class education that empowers students to become
                                confident, creative, and compassionate global citizens who
                                contribute positively to society while maintaining their cultural
                                identity and values.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-sky-500 rounded-full">
                                    <Eye className="h-8 w-8 text-white" />
                                </div>
                                <div className="font-semibold tracking-tight text-2xl text-sky-700">
                                    Our Vision
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To be the leading international school in the Maldives, recognized
                                for academic excellence, innovative teaching, and nurturing
                                well-rounded individuals who are prepared to thrive in an
                                ever-changing global landscape.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Core Values */}
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, idx) => (
                        <Card
                            key={idx}
                            className={`text-center bg-gradient-to-br ${value.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                        >
                            <CardContent className="p-6 pt-6">
                                <div className="text-4xl mb-4">{value.emoji}</div>
                                <h3 className={`text-xl font-bold mb-3 ${value.color}`}>
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
