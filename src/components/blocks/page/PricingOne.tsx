'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LucideDollarSign, LucideCircleCheckBig } from 'lucide-react'
import React, { FC } from 'react'

export interface PricingOneProps {
    title?: string | null
    description?: string | null
    color?: string | null
    price?:
        | {
              color?: string | null
              icon?: string | null
              title?: string | null
              sub_title?: string | null
              price?: string | null
              basis?: string | null
              bullet?:
                  | {
                        title?: string | null
                        id?: string | null
                    }[]
                  | null
              button?: {
                  title?: string | null
                  link?: string | null
              }
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'pricing-one'
}

export const PricingOne: FC<PricingOneProps> = ({ ...props }) => {
    const feeCategories = [
        {
            name: 'Kindergarten',
            age: 'Ages 3-5',
            price: 'MVR 2,500',
            benefits: ['Play-based learning', 'Nutritious meals', 'Extended care'],
            bgColor: 'bg-coral-500',
            gradient: 'from-coral-100 to-coral-50',
            btnColor: 'bg-coral-500 hover:bg-coral-600',
            iconColor: 'text-white',
        },
        {
            name: 'Primary',
            age: 'Grades 1-5',
            price: 'MVR 3,200',
            benefits: ['Cambridge Primary', 'Specialist teachers', 'After-school activities'],
            bgColor: 'bg-sky-500',
            gradient: 'from-sky-100 to-sky-50',
            btnColor: 'bg-sky-500 hover:bg-sky-600',
            iconColor: 'text-white',
        },
        {
            name: 'Secondary',
            age: 'Grades 6-11',
            price: 'MVR 4,000',
            benefits: ['IGCSE preparation', 'Science labs', 'Career guidance'],
            bgColor: 'bg-mint-500',
            gradient: 'from-mint-100 to-mint-50',
            btnColor: 'bg-mint-500 hover:bg-mint-600',
            iconColor: 'text-white',
        },
        {
            name: 'A-Levels',
            age: 'Grades 12-13',
            price: 'MVR 4,800',
            benefits: ['University prep', 'Small classes', 'Personal tutoring'],
            bgColor: 'bg-yellow-500',
            gradient: 'from-yellow-100 to-yellow-50',
            btnColor: 'bg-yellow-500 hover:bg-yellow-600',
            iconColor: 'text-white',
        },
    ]

    return (
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Fees & Scholarships
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Transparent pricing with scholarship opportunities for deserving students
                    </p>
                </div>

                {/* Fee Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {feeCategories.map((cat) => (
                        <Card
                            key={cat.name}
                            className={`rounded-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${cat.gradient}`}
                        >
                            <CardContent className="flex flex-col space-y-4 text-center">
                                <div className="flex flex-col items-center space-y-2">
                                    <div
                                        className={`w-16 h-16 ${cat.bgColor} rounded-full flex items-center justify-center mb-2`}
                                    >
                                        <LucideDollarSign className={`h-8 w-8 ${cat.iconColor}`} />
                                    </div>
                                    <div
                                        className={`font-semibold text-xl ${cat.gradient.split(' ')[0].replace('from-', 'text-')}`}
                                    >
                                        {cat.name}
                                    </div>
                                    <div className="text-sm text-gray-600">{cat.age}</div>
                                </div>
                                <div>
                                    <div className="mb-4">
                                        <span className="text-3xl font-bold text-gray-800">
                                            {cat.price}
                                        </span>
                                        <span className="block text-sm text-gray-600">
                                            per month
                                        </span>
                                    </div>
                                    <ul className="space-y-2 mb-6">
                                        {cat.benefits.map((benefit) => (
                                            <li
                                                key={benefit}
                                                className="text-sm text-gray-600 flex items-center justify-center gap-2"
                                            >
                                                <LucideCircleCheckBig
                                                    className={`h-4 w-4 ${cat.bgColor}`}
                                                />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        className={`w-full ${cat.btnColor} text-white rounded-full h-10`}
                                    >
                                        Apply Now
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Scholarship Section */}
                <Card className="rounded-md shadow-lg mx-auto max-w-4xl">
                    <CardContent className="text-center space-y-4">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="inline-block p-3 bg-mint-500 rounded-full mb-2">
                                <LucideCircleCheckBig className="h-8 w-8 text-white" />
                            </div>
                            <div className="text-2xl font-semibold text-mint-700">
                                Scholarship Opportunities
                            </div>
                            <div className="text-gray-600 text-lg">
                                We believe every deserving student should have access to quality
                                education
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <h4 className="font-semibold text-gray-800 mb-2">
                                    Academic Excellence
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Up to 50% fee reduction for outstanding academic performance
                                </p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold text-gray-800 mb-2">
                                    Need-Based Support
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Financial assistance for families demonstrating need
                                </p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold text-gray-800 mb-2">
                                    Sibling Discount
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    10% discount for families with multiple children enrolled
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
