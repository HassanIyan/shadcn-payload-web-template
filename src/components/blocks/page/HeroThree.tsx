'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import React, { FC } from 'react'

export interface HeroThreeProps {
    badge?: string | null
    title?: {
        first_part?: string | null
        second_part?: string | null
    }
    description?: string | null
    buttons?:
        | {
              title?: string | null
              link?: string | null
              type?: ('default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link') | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'hero-three'
}

export const HeroThree: FC<HeroThreeProps> = ({ ...props }) => {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto space-y-8">
                    {/* Label */}
                    <div className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-[#51BDA0] text-white px-6 py-2 rounded-full text-sm font-medium mb-8">
                        Academic Excellence
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                        Learn. Grow.
                        <span className="block text-[#51BDA0]">Achieve.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-[#6B7280] mb-8 leading-relaxed">
                        Our comprehensive academic program follows the Cambridge International
                        Curriculum, preparing students for success at every level.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="inline-flex items-center gap-2 h-11 bg-[#51BDA0] hover:bg-[#459985] text-white px-8 py-4 text-lg font-medium rounded-lg">
                            Explore Curriculum
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            className="inline-flex items-center gap-2 h-11 border-2 border-[#606062] text-[#606062] hover:bg-[#606062] hover:text-white px-8 py-4 text-lg font-medium rounded-lg bg-transparent"
                        >
                            Download Guides
                            <Download className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
