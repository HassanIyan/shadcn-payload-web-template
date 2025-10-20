'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Media } from '@/payload-types'
import React, { FC } from 'react'

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

export const GalleryTwo: FC<GalleryTwoProps> = ({ ...props }) => {
    const socialMoments = [
        {
            src: '/images/kindergarten-class.jpg',
            alt: 'Social moment 1',
            caption: 'Amazing moment from our school life! 📚✨',
        },
        {
            src: '/images/primary-students.jpg',
            alt: 'Social moment 2',
            caption: 'Amazing moment from our school life! 📚✨',
        },
        {
            src: '/images/secondary-students.jpg',
            alt: 'Social moment 3',
            caption: 'Amazing moment from our school life! 📚✨',
        },
        {
            src: '/images/alevels-students.jpg',
            alt: 'Social moment 4',
            caption: 'Amazing moment from our school life! 📚✨',
        },
        {
            src: '/images/science-lab.jpg',
            alt: 'Social moment 5',
            caption: 'Amazing moment from our school life! 📚✨',
        },
        {
            src: '/images/art-exhibition.jpg',
            alt: 'Social moment 6',
            caption: 'Amazing moment from our school life! 📚✨',
        },
        {
            src: '/images/music-room.jpg',
            alt: 'Social moment 7',
            caption: 'Amazing moment from our school life! 📚✨',
        },
        {
            src: '/images/library.jpg',
            alt: 'Social moment 8',
            caption: 'Amazing moment from our school life! 📚✨',
        },
    ]

    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-8 w-8 text-[#51BDA0]"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                        <h2 className="text-4xl font-bold text-[#1A1A1A]">#AhmadhiyyaMoments</h2>
                    </div>
                    <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
                        Follow our social media for daily updates and behind-the-scenes moments
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {socialMoments.map((item, index) => (
                        <div
                            key={index}
                            className="aspect-square rounded-md shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden border border-gray-200 relative"
                        >
                            {/* <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            /> */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <div className="text-white text-sm">
                                    <div className="flex items-center gap-2 mb-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4 w-4"
                                        >
                                            <rect
                                                width="20"
                                                height="20"
                                                x="2"
                                                y="2"
                                                rx="5"
                                                ry="5"
                                            ></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                        </svg>
                                        <span>@ahmadhiyyaschool</span>
                                    </div>
                                    <p className="text-xs opacity-90">{item.caption}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center flex flex-wrap justify-center gap-4">
                    <Button className="bg-[#51BDA0] hover:bg-[#459985] text-white px-8 py-3 font-medium flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                        Follow @ahmadhiyyaschool
                    </Button>

                    <Button
                        variant="outline"
                        className="border-[#51BDA0] text-[#51BDA0] hover:bg-[#51BDA0] hover:text-white px-8 py-3 font-medium"
                    >
                        View All Posts
                    </Button>
                </div>
            </div>
        </section>
    )
}
