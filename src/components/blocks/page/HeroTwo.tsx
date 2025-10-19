'use client'
import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart } from 'lucide-react'
export interface HeroTwoProps {
    icon?: string | null
    colors?: {
        primary?: string | null
        secondary?: string | null
    }
    title?: {
        first_part?: string | null
        second_part?: string | null
    }
    description?: string | null
    buttons?:
        | {
              title?: string | null
              link?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'hero-two'
}

export const HeroTwo: FC<HeroTwoProps> = ({ ...props }) => {
    return (
        <section className="relative overflow-hidden pt-24 pb-16">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-coral-300/20 rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-sky-300/20 rounded-full blur-xl" />

            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Icon */}
                    <div className="inline-block p-4 bg-sky-100 rounded-full mb-6">
                        <Heart className="h-12 w-12 text-sky-600" />
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                        We Believe in
                        <span className="block text-sky-500">Curious Minds</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                        For over four decades, Ahmadhiyya International School has been nurturing
                        young minds and preparing them for success in an interconnected world.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-coral-500 hover:bg-coral-600 text-white rounded-full px-8 py-4 text-lg font-semibold"
                        >
                            Take a Virtual Tour
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-sky-500 text-sky-600 hover:bg-sky-50 rounded-full px-8 py-4 text-lg font-semibold"
                        >
                            Download Prospectus
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
