'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Media } from '@/payload-types'
import React, { FC } from 'react'

export interface GalleryOneProps {
    images?: Media[] | null
    id?: string | null
    blockName?: string | null
    blockType: 'gallery-one'
}

const galleryData = {
    Recent: [
        '/images/graduation-ceremony.jpg',
        '/images/science-lab.jpg',
        '/images/art-exhibition.jpg',
        '/images/music-room.jpg',
        '/images/library.jpg',
        '/images/computer-lab.jpg',
        '/images/cafeteria.jpg',
        '/images/playground.jpg',
    ],
    Events: ['/images/event1.jpg', '/images/event2.jpg', '/images/event3.jpg'],
    Academics: ['/images/academic1.jpg', '/images/academic2.jpg'],
    Sports: ['/images/sports1.jpg', '/images/sports2.jpg', '/images/sports3.jpg'],
}

type GalleryCategory = keyof typeof galleryData

export const GalleryOne: FC<GalleryOneProps> = ({ ...props }) => {
    const [activeTab, setActiveTab] = useState<GalleryCategory>('Recent')

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Photo Gallery</h2>
                    <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
                        Capturing the memorable moments and achievements of our school community
                    </p>
                </div>

                <Tabs
                    value={activeTab}
                    onValueChange={(val) => setActiveTab(val as GalleryCategory)}
                >
                    <TabsList className="grid grid-cols-4 gap-2 bg-gray-50 rounded-2xl p-2 border border-gray-200 mb-12">
                        {Object.keys(galleryData).map((category) => (
                            <TabsTrigger
                                key={category}
                                value={category}
                                className="text-sm font-medium rounded-xl data-[state=active]:bg-[#51BDA0] data-[state=active]:text-white data-[state=active]:shadow-lg text-[#606062] hover:text-[#51BDA0] py-3 transition-all duration-300"
                            >
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {Object.entries(galleryData).map(([category, images]) => (
                        <TabsContent key={category} value={category}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square bg-gray-100 rounded-2xl shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden border border-gray-200 group"
                                    >
                                        <img
                                            src={src}
                                            alt={`${category} ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
