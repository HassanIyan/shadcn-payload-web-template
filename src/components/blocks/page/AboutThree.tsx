'use client'

import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'
import { Media } from '@/payload-types'
import React, { FC } from 'react'

export interface AboutThreeProps {
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
              id?: string | null
          }[]
        | null
    buttons?:
        | {
              title?: string | null
              link?: string | null
              id?: string | null
          }[]
        | null
    image?: (number | null) | Media
    id?: string | null
    blockName?: string | null
    blockType: 'about-three'
}

export const AboutThree: FC<AboutThreeProps> = ({ ...props }) => {
    const facilities = [
        'Science Laboratories',
        'Computer Labs',
        'Library & Media Center',
        'Sports Facilities',
        'Art Studios',
        'Music Rooms',
        'Cafeteria',
        'Prayer Room',
    ]

    return (
        <section className="py-20 bg-gradient-to-r from-sky-50 to-mint-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-mint-100 text-mint-700 hover:bg-mint-200 rounded-full px-4 py-2 text-sm font-semibold">
                            Our Campus
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            A Modern Learning
                            <span className="text-mint-500"> Environment</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our state-of-the-art campus in Machchangolhi, Malé, provides students
                            with world-class facilities designed to enhance learning and personal
                            development.
                        </p>

                        {/* Facilities Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {facilities.map((facility, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-mint-500 rounded-full" />
                                    <span className="text-gray-700">{facility}</span>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <Button className="inline-flex items-center gap-2 h-10 bg-mint-500 hover:bg-mint-600 text-white rounded-full px-8 py-3 font-semibold">
                            <MapPin className="h-5 w-5 mr-2" />
                            Take a Virtual Tour
                        </Button>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-full h-full bg-mint-200/30 rounded-3xl"></div>
                        <img
                            alt="School campus"
                            src="/placeholder.svg"
                            loading="lazy"
                            width={600}
                            height={500}
                            className="relative rounded-3xl shadow-xl"
                            style={{ color: 'transparent' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
