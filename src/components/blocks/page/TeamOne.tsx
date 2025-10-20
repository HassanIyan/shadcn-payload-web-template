import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/payload-types'
import Image from 'next/image'
import React, { FC } from 'react'

export interface TeamOneProps {
    title?: string | null
    description?: string | null
    team?:
        | {
              image?: Media
              name?: string | null
              designation?: string | null
              sub_title?: string | null
              description?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'team-one'
}

export const TeamOne: FC<TeamOneProps> = ({ title, description, team }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
                    <p className="text-xl max-w-2xl mx-auto">{description}</p>
                </div>

                {/* Leader Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {team?.map(({ id, name, designation, sub_title, description, image }) => (
                        <Card
                            key={id}
                            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden p-0"
                        >
                            {/* Image with gradient overlay */}
                            <div className="relative">
                                {image?.url && (
                                    <Image
                                        src={image?.url}
                                        alt={image?.alt || ''}
                                        width={image?.width || 0}
                                        height={image?.height || 0}
                                        className="w-full"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>

                            {/* Content */}
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-1 text-foreground">{name}</h3>
                                <p className="font-semibold mb-2 text-primary">{designation}</p>
                                <p className="text-sm mb-3 text-card-foreground">{sub_title}</p>
                                <p className="text-sm leading-relaxed text-card-foreground/80">
                                    {description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
