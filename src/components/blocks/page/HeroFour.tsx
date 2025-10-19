'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Globe } from 'lucide-react'
import React, { FC } from 'react'

export interface HeroFourProps {
    colors?: {
        primary?: string | null
        secondary?: string | null
        accent?: string | null
    }
    title?: {
        first_part?: string | null
        second_part?: string | null
    }
    description?: string | null
    /**
     * @minItems 2
     * @maxItems 2
     */
    coordniates?: [number, number] | null
    name?: string | null
    address?: string | null
    button?: {
        title?: string | null
        link?: string | null
    }
    id?: string | null
    blockName?: string | null
    blockType: 'hero-four'
}

export const HeroFour: FC<HeroFourProps> = ({ ...props }) => {
    return (
        <section className="pt-24 pb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-mint-500/10" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-block p-4 bg-sky-100 rounded-full mb-6">
                        <MapPin className="h-12 w-12 text-sky-600" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                        Visit Us & <span className="block text-sky-500">Get in Touch</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                        {`Located in the heart of Malé, we're here to answer your questions and
                        welcome you to our community.`}
                    </p>
                </div>

                {/* Map / Info Card */}
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-lg text-card-foreground bg-white border-0 shadow-xl overflow-hidden">
                        <div className="relative h-96 bg-gradient-to-br from-sky-100 to-mint-100 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="h-16 w-16 text-sky-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    Ahmadhiyya International School
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Machchangolhi, Malé 20026, Maldives
                                </p>
                                <Button
                                    asChild
                                    className="h-10 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full"
                                >
                                    <a
                                        href="https://www.google.com/maps?q=Ahmadhiyya+International+School,+Malé,+Maldives"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2"
                                    >
                                        <Globe className="h-4 w-4" /> View on Google Maps
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
