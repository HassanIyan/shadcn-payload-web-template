import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import React, { FC } from 'react'

export interface FeaturesThreeProps {
    title?: string | null
    description?: string | null
    badge?: string | null
    feature?:
        | {
              emoji?: string | null
              title?: string | null
              sub_title?: string | null
              value?: string | null
              name?: string | null
              tags?:
                  | {
                        title?: string | null
                        id?: string | null
                    }[]
                  | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'features-three'
}

export const FeaturesThree: FC<FeaturesThreeProps> = ({ title, description, badge, feature }) => {
    return (
        <section className="py-20 container">
            <div className="container mx-auto px-4 text-center mb-16">
                {title && <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>}
                {description && (
                    <p className="text-xl text-foreground/75 max-w-3xl mx-auto mb-4">
                        {description}
                    </p>
                )}
                {badge && (
                    <Badge className="rounded-full px-6 py-2 text-lg font-semibold bg-primary/10 text-primary">
                        {badge}
                    </Badge>
                )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {feature?.map((house) => (
                    <Card
                        key={house.id}
                        className="group hover:shadow-lg transition-shadow border border-[#E5E7EB]"
                    >
                        <CardHeader className="text-center">
                            {house.emoji && (
                                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {house.emoji}
                                </div>
                            )}
                            {house.title && (
                                <CardTitle className="text-2xl font-semibold text-[#1A1A1A]">
                                    {house.title}
                                </CardTitle>
                            )}
                            {house.sub_title && (
                                <CardDescription className="text-sm text-[#6B7280] italic">
                                    {house.sub_title}
                                </CardDescription>
                            )}
                        </CardHeader>
                        <CardContent className="text-center pt-0">
                            <div className="mb-4">
                                {house.value && (
                                    <div className={`text-3xl font-bold text-primary`}>
                                        {house.value}
                                    </div>
                                )}
                                {house.name && (
                                    <div className="text-sm text-[#6B7280]">{house.name}</div>
                                )}
                            </div>
                            <div className="flex justify-center gap-2 flex-wrap">
                                {house?.tags?.map(
                                    (attr) =>
                                        attr?.title && (
                                            <Badge
                                                key={attr?.id}
                                                className={`text-xs font-semibold border-transparent text-primary bg-primary/20 hover:bg-primary/80`}
                                            >
                                                {attr?.title}
                                            </Badge>
                                        ),
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
