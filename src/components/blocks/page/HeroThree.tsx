'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
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

export const HeroThree: FC<HeroThreeProps> = ({ badge, title, description, buttons }) => {
    return (
        <section className="bg-gradient-to-b from-primary/10 to-background min-h-[calc(100vh-80px)] flex items-center">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto space-y-8">
                    {/* Label */}
                    <div className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium mb-8">
                        {badge}
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        {title?.first_part}
                        <span className="block text-primary">{title?.second_part}</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-foreground/75 mb-8 leading-relaxed">{description}</p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {buttons?.map(({ id, link, type, title }) => (
                            <Button
                                key={id}
                                asChild
                                className="inline-flex items-center"
                                variant={type}
                                size={'lg'}
                            >
                                <Link href={link || '#'}>{title}</Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
