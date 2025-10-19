'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
    LucidePhone,
    LucideFileText,
    LucideCircleCheckBig,
    LucideUsers,
    LucideCalendar,
} from 'lucide-react'
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

export const TimelineOne: FC<TimelineOneProps> = ({ ...props }) => {
    const steps = [
        {
            id: 1,
            title: 'Inquiry',
            description: 'Submit initial inquiry form or contact our admissions team',
            icon: LucidePhone,
            bg: 'bg-coral-500',
            textColor: 'text-coral-700',
            gradient: 'from-coral-100 to-coral-50',
        },
        {
            id: 2,
            title: 'Application',
            description: 'Complete the full application form with required documents',
            icon: LucideFileText,
            bg: 'bg-sky-500',
            textColor: 'text-sky-700',
            gradient: 'from-sky-100 to-sky-50',
        },
        {
            id: 3,
            title: 'Assessment',
            description: 'Student assessment and entrance evaluation',
            icon: LucideCircleCheckBig,
            bg: 'bg-mint-500',
            textColor: 'text-mint-700',
            gradient: 'from-mint-100 to-mint-50',
        },
        {
            id: 4,
            title: 'Interview',
            description: 'Meet with our admissions team and school leadership',
            icon: LucideUsers,
            bg: 'bg-yellow-500',
            textColor: 'text-yellow-700',
            gradient: 'from-yellow-100 to-yellow-50',
        },
        {
            id: 5,
            title: 'Enrollment',
            description: 'Complete enrollment process and join our community',
            icon: LucideCalendar,
            bg: 'bg-coral-500',
            textColor: 'text-coral-700',
            gradient: 'from-coral-100 to-coral-50',
        },
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Application Process
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Follow these simple steps to join our school community
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Center vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-coral-500 to-sky-500 rounded-full"></div>

                    <div className="space-y-16">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 1
                            const Icon = step.icon

                            return (
                                <div
                                    key={step.id}
                                    className={`flex items-center ${isEven ? 'flex-row-reverse' : ''}`}
                                >
                                    {/* Card */}
                                    <div className="w-1/2 px-4">
                                        <Card
                                            className={`bg-gradient-to-br ${step.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                                        >
                                            <CardContent className="p-6 space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-full ${step.bg}`}>
                                                        <Icon className="h-5 w-5 text-white" />
                                                    </div>
                                                    <h3
                                                        className={`text-2xl font-semibold ${step.textColor}`}
                                                    >
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <p className="text-gray-600">{step.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Step number */}
                                    <div
                                        className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-white font-bold text-lg"
                                        style={{ backgroundColor: step.bg.replace('bg-', '') }}
                                    >
                                        {step.id}
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
