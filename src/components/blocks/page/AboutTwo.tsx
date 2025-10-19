'use client'

import { Media } from '@/payload-types'
import React, { FC } from 'react'
import RichText from '../rich-text'
import Image from 'next/image'

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
    image?: Media
    id?: string | null
    blockName?: string | null
    blockType: 'about-two'
}

export const AboutTwo: FC<AboutTwoProps> = ({ color, badge, lead, bullet, image }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div
                            className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent rounded-full px-4 py-2 text-sm font-semibold"
                            style={{
                                backgroundColor: `${color}14` || undefined,
                                color: color || undefined,
                            }}
                        >
                            {badge}
                        </div>

                        <RichText>{lead}</RichText>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-4">
                            {bullet?.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div
                                        style={{ backgroundColor: item.color || undefined }}
                                        className={`w-3 h-3 rounded-full`}
                                    />
                                    <span className="text-foreground/75 font-medium">
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {image?.url && (
                        <Image
                            src={image?.url}
                            alt={image?.alt || ''}
                            width={image?.width || 0}
                            height={image?.height || 0}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}
