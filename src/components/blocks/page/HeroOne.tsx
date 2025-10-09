import { Media } from '@/payload-types'
import React, { FC } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export interface HeroOneProps {
    image?: null | Media
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
    stats?:
        | {
              name?: string | null
              value?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'hero-one'
}

export const HeroOne: FC<HeroOneProps> = ({ image, badge, title, description, buttons, stats }) => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-[calc(100vh-80px)] w-full flex items-center justify-center"
            style={{ backgroundImage: `url('${image?.url}')` }}
        >
            <span className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white/80" />
            <div className="container relative text-center">
                <Badge>{badge}</Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    <span className="block">{title?.first_part}</span>
                    <span className="text-primary">{title?.second_part}</span>
                </h1>
                <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">{description}</p>
                <div className="mb-16 flex gap-4">
                    {buttons?.map(({ id, title, type, link }) => (
                        <Button key={id} asChild variant={type} size={'lg'}>
                            <Link href={link || '#'}>{title}</Link>
                        </Button>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-4">
                    {stats?.map(({ id, name, value }) => (
                        <div key={id} className="p-6 bg-background">
                            <h5>{value}</h5>
                            <h6>{name}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
