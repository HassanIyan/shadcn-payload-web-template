'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import React, { FC } from 'react'

export interface ResourcesOneProps {
    title?: string | null
    description?: string | null
    resources?:
        | {
              icon?: string | null
              title?: string | null
              description?: string | null
              detail?: string | null
              button?: {
                  title?: string | null
                  link?: string | null
              }
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'resources-one'
}

export const ResourcesOne: FC<ResourcesOneProps> = ({ ...props }) => {
    const guides = [
        {
            title: 'Kindergarten Guide',
            description: 'Early years curriculum overview',
            pages: 12,
        },
        {
            title: 'Primary Handbook',
            description: 'Grades 1-5 subject details',
            pages: 24,
        },
        {
            title: 'IGCSE Prospectus',
            description: 'Secondary school options',
            pages: 36,
        },
        {
            title: 'A-Level Guide',
            description: 'University preparation pathway',
            pages: 28,
        },
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                        Curriculum Guides & Resources
                    </h2>
                    <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
                        Download detailed curriculum guides and academic resources to learn more
                        about our programs.
                    </p>
                </div>

                {/* Guides Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {guides.map((guide) => (
                        <div
                            key={guide.title}
                            className="rounded-lg text-card-foreground shadow-sm border border-[#E5E7EB] bg-[#F8F9FA] group hover:shadow-md transition-transform duration-300 hover:-translate-y-1"
                        >
                            {/* Top Content */}
                            <div className="flex flex-col space-y-1.5 p-6 text-center">
                                <div className="mx-auto w-16 h-16 bg-[#51BDA0] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Download className="h-8 w-8 text-white" />
                                </div>
                                <div className="font-semibold tracking-tight text-[#1A1A1A] text-lg">
                                    {guide.title}
                                </div>
                                <div className="text-sm text-[#6B7280]">{guide.description}</div>
                            </div>

                            {/* Bottom Content */}
                            <div className="p-6 pt-0 text-center">
                                <p className="text-sm text-[#6B7280] mb-4">{guide.pages} pages</p>
                                <Button
                                    className="inline-flex items-center justify-center gap-2 w-full h-10 px-4 py-2 border border-[#51BDA0] text-[#51BDA0] hover:bg-[#51BDA0] hover:text-white rounded-lg text-sm font-medium"
                                    variant="outline"
                                >
                                    Download PDF
                                    <Download className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
