'use client'

import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GlobeIcon, MapPinIcon } from 'lucide-react'
import Link from 'next/link'

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

export const HeroFour: FC<HeroFourProps> = ({
    title,
    description,
    colors,
    name,
    address,
    button,
    coordniates,
    id,
}) => {
    return (
        <section
            id={id ?? undefined}
            className="relative overflow-hidden py-8"
            style={{
                background: `linear-gradient(to right, ${colors?.primary}, ${colors?.secondary})`,
            }}
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                        <MapPinIcon
                            className="h-12 w-12"
                            style={{
                                color: colors?.accent || undefined,
                            }}
                        />
                    </div>
                    {title?.first_part && title?.second_part && (
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {title.first_part}{' '}
                            <span className="block" style={{ color: colors?.accent || undefined }}>
                                {title.second_part}
                            </span>
                        </h1>
                    )}
                    {description && (
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                {/* Map / Info Card */}
                <div className="max-w-6xl mx-auto">
                    <Card className="rounded-md p-0 border-0 relative shadow-xl overflow-hidden text-card-foreground bg-background">
                        <div className={'absolute inset-0'}>
                            <iframe
                                src={`https://maps.google.com/maps?q=${coordniates?.[0]},${coordniates?.[1]}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                width="100%"
                                height="100%"
                                className={'absolute inset-0'}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                                style={{ border: 0 }}
                            />
                            <span className={'absolute inset-0 bg-white/80'} />
                        </div>

                        <div className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                            <div className="text-center">
                                <MapPinIcon
                                    className="h-16 w-16 mx-auto mb-4"
                                    style={{ color: colors?.accent || undefined }}
                                />
                                {name && (
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        {name}
                                    </h3>
                                )}
                                {address && <p className="text-muted-foreground mb-4">{address}</p>}
                                {button?.title && button?.link && (
                                    <Button
                                        asChild
                                        className="h-10 px-4 py-2 rounded-full text-background"
                                        style={{
                                            backgroundColor: colors?.accent || undefined,
                                        }}
                                    >
                                        <Link
                                            href={button.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2"
                                        >
                                            <GlobeIcon className="h-4 w-4" /> {button.title}
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
