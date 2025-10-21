'use client'

import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'

export interface GalleryTwoProps {
    title?: string | null
    description?: string | null
    images?:
        | {
              image?: Media
              link?: string | null
              title?: string | null
              description?: string | null
              id?: string | null
          }[]
        | null
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
    blockType: 'gallery-two'
}

export const GalleryTwo: FC<GalleryTwoProps> = ({ title, description, images, buttons }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {title || description ? (
                    <div className="text-center mb-16">
                        {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
                        {description && (
                            <p className="text-xl max-w-2xl mx-auto text-foreground/60">
                                {description}
                            </p>
                        )}
                    </div>
                ) : null}

                {images && images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {images.map((item) => (
                            <Link key={item.id} href={item?.link || '#'}>
                                <Card className="aspect-square rounded-md shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden border border-gray-200 relative">
                                    {item.image?.url && (
                                        <div className="absolute inset-0 w-full h-full">
                                            <Image
                                                src={item.image.url}
                                                alt={item.image.alt || ''}
                                                width={item?.image?.width || 0}
                                                height={item?.image?.height || 0}
                                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                            />
                                        </div>
                                    )}
                                    {(item.title || item.description) && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <CardContent className="text-white text-sm p-0">
                                                {item.title && (
                                                    <p className="font-semibold">{item.title}</p>
                                                )}
                                                {item.description && (
                                                    <p className="text-xs opacity-90">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </CardContent>
                                        </div>
                                    )}
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}

                {buttons && buttons.length > 0 && (
                    <div className="text-center flex flex-wrap justify-center gap-4">
                        {buttons.map((btn) => (
                            <Button
                                key={btn.id ?? btn.title}
                                variant={btn.type ?? 'default'}
                                className="px-8 py-3 font-medium"
                                asChild
                            >
                                <Link href={btn.link ?? '#'}>{btn.title}</Link>
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
