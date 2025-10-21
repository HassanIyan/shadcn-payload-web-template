'use client'

import React, { FC, useState } from 'react'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export interface GalleryOneProps {
    images?: Media[] | null
    id?: string | null
    blockName?: string | null
    blockType: 'gallery-one'
}

export const GalleryOne: FC<GalleryOneProps> = ({ images }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openLightbox = (index: number) => {
        setCurrentIndex(index)
        setLightboxOpen(true)
    }

    const closeLightbox = () => setLightboxOpen(false)

    const prevImage = () =>
        setCurrentIndex((prev) => (prev === 0 ? (images?.length ?? 1) - 1 : prev - 1))
    const nextImage = () =>
        setCurrentIndex((prev) => (prev === (images?.length ?? 1) - 1 ? 0 : prev + 1))

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images?.map((img: Media, index: number) => (
                        <Card
                            key={img.id ?? index}
                            className="aspect-square p-0 rounded-md shadow-professional hover:shadow-professional-lg transition-all duration-300 cursor-pointer overflow-hidden border border-border group bg-muted"
                            onClick={() => openLightbox(index)}
                        >
                            <CardContent className="p-0 relative w-full h-full">
                                <Image
                                    src={img.url || '#'}
                                    alt={img.alt ?? `Gallery Image ${index + 1}`}
                                    width={img.width || 0}
                                    height={img.height || 0}
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && images && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <div
                        className="relative max-w-[90%] max-h-[90%]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[currentIndex].url || '#'}
                            alt={images[currentIndex].alt ?? `Gallery Image ${currentIndex + 1}`}
                            width={images[currentIndex].width || 0}
                            height={images[currentIndex].height || 0}
                            className="object-contain max-h-[80vh] max-w-full"
                        />

                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-2 right-2 text-white text-2xl font-bold bg-black/30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/50 transition"
                        >
                            &times;
                        </button>

                        {/* Prev/Next Buttons */}
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/30 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/50 transition"
                        >
                            &#10094;
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/30 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/50 transition"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}
