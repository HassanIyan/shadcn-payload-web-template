'use client'

import { Badge } from '@/components/ui/badge'
import { Media } from '@/payload-types'
import React, { FC } from 'react'

export interface AboutTwoProps {
    color?: string | null
    badge?: string | null
    lead?: {
        root: {
            type: string
            children: {
                type: string
                version: number
                [k: string]: unknown
            }[]
            direction: ('ltr' | 'rtl') | null
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
            indent: number
            version: number
        }
        [k: string]: unknown
    } | null
    bullet?:
        | {
              title?: string | null
              color?: string | null
              id?: string | null
          }[]
        | null
    image?: (number | null) | Media
    id?: string | null
    blockName?: string | null
    blockType: 'about-two'
}

export const AboutTwo: FC<AboutTwoProps> = ({ ...props }) => {
    const highlights = [
        { color: 'bg-coral-500', label: 'Cambridge Curriculum' },
        { color: 'bg-sky-500', label: 'International Standards' },
        { color: 'bg-mint-500', label: 'Local Values' },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-100 text-sky-700 hover:bg-sky-200 rounded-full px-4 py-2 text-sm font-semibold">
                            Who We Are
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            A Legacy of Educational
                            <span className="text-sky-500"> Excellence</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Founded in 1982, Ahmadhiyya International School has been at the
                            forefront of educational innovation in the Maldives. We combine the best
                            of international curricula with local values, creating a unique learning
                            environment that prepares students for global success.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our commitment to academic excellence, character development, and
                            holistic education has made us one of the most respected educational
                            institutions in the region.
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className={`w-3 h-3 ${item.color} rounded-full`} />
                                    <span className="text-gray-700 font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="absolute -top-4 -right-4 w-full h-full bg-coral-200/30 rounded-3xl"></div>
                        <img
                            alt="School building"
                            loading="lazy"
                            width={500}
                            height={600}
                            decoding="async"
                            className="relative rounded-3xl shadow-xl"
                            src="/placeholder.svg"
                            style={{ color: 'transparent' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
