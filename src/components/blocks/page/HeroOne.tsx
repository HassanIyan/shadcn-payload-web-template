import { Media } from '@/payload-types'
import React, { FC } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
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
    priority?: boolean
}

export const HeroOne: FC<HeroOneProps> = ({
    image,
    badge,
    title,
    description,
    buttons,
    stats,
    priority,
}) => {
    return (
        <section className="relative px-4 py-8 min-h-[calc(100vh-80px)] w-full flex items-center justify-center">
            {image?.url && (
                <Image
                    src={image?.url}
                    fill
                    alt={image?.alt || ''}
                    className="object-cover"
                    priority={priority}
                />
            )}
            <span className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/65" />
            <div className="max-w-3xl mx-auto relative text-center">
                <Badge className="mb-2">{badge}</Badge>
                <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                    <span className="block">{title?.first_part}</span>
                    <span className="text-primary lg:-mt-5 block">{title?.second_part}</span>
                </h1>
                <p className="text-xl mb-10 mx-auto leading-relaxed">{description}</p>
                <div className="mb-16 flex gap-4 items-center justify-center flex-wrap">
                    {buttons?.map(({ id, title, type, link }) => (
                        <Button
                            key={id}
                            asChild
                            variant={type}
                            size={'lg'}
                            className="flex-1 lg:flex-none"
                        >
                            <Link href={link || '#'}>{title}</Link>
                        </Button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 items-center justify-center gap-4">
                    {stats?.map(({ id, name, value }) => (
                        <div
                            key={id}
                            className={cn(
                                'p-6 bg-background rounded-md flex-1 text-center transition-all cursor-pointer',
                                'hover:-translate-y-2 hover:shadow-lg hover:scale-105',
                            )}
                        >
                            <h5 className="text-primary font-bold text-3xl mb-2">{value}</h5>
                            <h6 className="text-muted-foreground text-sm font-semibold">{name}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
