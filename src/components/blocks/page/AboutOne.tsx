import { Badge } from '@/components/ui/badge'
import { Media } from '@/payload-types'
import React, { FC } from 'react'
import RichText from '../rich-text'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { SquareCheckBigIcon } from 'lucide-react'

export interface AboutOneProps {
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
    image?: Media
    bullet?:
        | {
              name?: string | null
              id?: string | null
          }[]
        | null
    button?: {
        title?: string | null
        link?: string | null
        type?: ('default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link') | null
    }
    id?: string | null
    blockName?: string | null
    blockType: 'about-one'
    priority?: boolean
}

export const AboutOne: FC<AboutOneProps> = ({ badge, lead, button, image, priority, bullet }) => {
    return (
        <section className="bg-muted text-muted-foreground py-12 lg:py-24">
            <div className="container grid lg:grid-cols-2 lg:gap-8 gap-4 items-center">
                <div>
                    <Badge className="mb-2">{badge}</Badge>
                    <RichText>{lead}</RichText>
                    <ul className="my-6">
                        {bullet?.map(({ name }, id) => (
                            <li key={id} className="flex gap-2 mb-4">
                                <SquareCheckBigIcon className="text-primary mt-[3px]" size={20} />
                                {name}
                            </li>
                        ))}
                    </ul>
                    {button && (
                        <Button variant={button?.type} size={'lg'}>
                            <Link href={button?.link || '#'}>{button?.title}</Link>
                        </Button>
                    )}
                </div>
                {image?.url && (
                    <Image
                        src={image?.url}
                        width={image?.width || 0}
                        height={image?.height || 0}
                        alt={image?.alt || ''}
                        priority={priority}
                        className="w-full"
                    />
                )}
            </div>
        </section>
    )
}
