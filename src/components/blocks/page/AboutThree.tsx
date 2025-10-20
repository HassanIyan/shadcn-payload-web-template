import { Button } from '@/components/ui/button'
import { Media } from '@/payload-types'
import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RichText from '../rich-text'

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
    image?: null | Media
    id?: string | null
    blockName?: string | null
    blockType: 'about-three'
}

export const AboutThree: FC<AboutThreeProps> = ({ color, badge, lead, bullet, buttons, image }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div
                            className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  rounded-full px-4 py-2 text-sm font-semibold"
                            style={{
                                backgroundColor: `${color}20` || undefined,
                                color: color ? color : undefined,
                            }}
                        >
                            {/* bg-mint-100 text-mint-700 hover:bg-mint-200 */}
                            {badge}
                        </div>

                        <RichText>{lead}</RichText>

                        <div className="grid grid-cols-2 gap-4">
                            {bullet?.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div
                                        className="w-2 h-2 rounded-full"
                                        style={{ backgroundColor: color || undefined }}
                                    />
                                    <span className="text-foreground/75">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        {buttons?.map(({ id, link, title }) => (
                            <Button
                                key={id}
                                asChild
                                className="inline-flex items-center gap-2 h-10 text-white rounded-full font-semibold"
                                style={{ backgroundColor: color || undefined }}
                            >
                                <Link href={link || '#'}>{title}</Link>
                            </Button>
                        ))}
                    </div>

                    {image?.url && (
                        <Image
                            src={image?.url}
                            width={image?.width || 0}
                            height={image?.height || 0}
                            alt={image?.alt || ''}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}
