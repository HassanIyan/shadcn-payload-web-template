import React, { FC } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { Media } from '@/payload-types'

export interface FeaturesFourProps {
    features?:
        | {
              icon?: string | null
              image?: Media
              title?: string | null
              description?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'features-four'
}

export const FeaturesFour: FC<FeaturesFourProps> = ({ features }) => {
    return (
        <section className="space-y-8 py-10">
            <div className="grid md:grid-cols-3 gap-6">
                {features?.map((feature) => {
                    const Icon =
                        // @ts-expect-error: icon is not typed
                        feature.icon && dynamicIconImports[feature.icon]
                            ? // @ts-expect-error: icon is not typed
                              dynamic(dynamicIconImports[feature.icon])
                            : null

                    return (
                        <Card
                            key={feature.id ?? feature.title}
                            className={cn(
                                'rounded-lg text-card-foreground pt-0 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1',
                            )}
                        >
                            {feature.image && feature.image.url && (
                                <div className="relative">
                                    <Image
                                        src={feature.image.url}
                                        alt={feature.image.alt ?? feature.title ?? ''}
                                        height={feature?.image?.height || 0}
                                        width={feature?.image?.width || 0}
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    {Icon && (
                                        <div className="absolute bottom-4 left-4">
                                            <div className="p-2 bg-primary rounded-full text-white">
                                                {/* @ts-expect-error: icon is not typed */}
                                                <Icon className="h-5 w-5" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            <CardContent className="p-6">
                                {feature.title && (
                                    <div className="text-2xl font-semibold leading-none tracking-tight mb-2">
                                        {feature.title}
                                    </div>
                                )}
                                {feature.description && (
                                    <div className="text-sm text-card-foreground/75 mb-4">
                                        {feature.description}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}
