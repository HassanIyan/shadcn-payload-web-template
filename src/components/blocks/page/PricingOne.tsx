import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LucideDollarSign, LucideCircleCheckBig } from 'lucide-react'
import React, { FC } from 'react'
import Link from 'next/link'

export interface PricingOneProps {
    title?: string | null
    description?: string | null
    color?: string | null
    price?:
        | {
              color?: string | null
              icon?: string | null
              title?: string | null
              sub_title?: string | null
              price?: string | null
              basis?: string | null
              bullet?:
                  | {
                        title?: string | null
                        id?: string | null
                    }[]
                  | null
              button?: {
                  title?: string | null
                  link?: string | null
              }
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'pricing-one'
}

export const PricingOne: FC<PricingOneProps> = ({ title, description, color, price }) => {
    return (
        <section
            className="py-20"
            style={{
                background: `linear-gradient(to right, ${color}, ${color}50)`,
            }}
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {title && (
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-xl text-foreground/75 max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>

                {/* Fee Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {price?.map((cat, index) => (
                        <Card
                            key={index}
                            className={`rounded-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br`}
                            style={{ backgroundColor: `${cat.color}14` }}
                        >
                            <CardContent className="flex flex-col space-y-4 text-center">
                                <div className="flex flex-col items-center space-y-2">
                                    <div
                                        className={`w-16 h-16  rounded-full flex items-center justify-center mb-2`}
                                        style={{ backgroundColor: cat.color || undefined }}
                                    >
                                        <LucideDollarSign className={`h-8 w-8 text-white`} />
                                    </div>
                                    {cat.title && (
                                        <div
                                            className={`font-semibold text-xl`}
                                            style={{ color: cat.color || undefined }}
                                        >
                                            {cat.title}
                                        </div>
                                    )}
                                    {cat.sub_title && (
                                        <div className="text-sm text-foreground/75">
                                            {cat.sub_title}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div>
                                        {cat.price && (
                                            <span className="text-3xl font-bold text-foreground">
                                                {cat.price}
                                            </span>
                                        )}
                                        {cat.basis && (
                                            <span className="mb-4 block text-sm text-foreground/75">
                                                {cat.basis}
                                            </span>
                                        )}
                                    </div>
                                    <ul className="space-y-2 mb-6">
                                        {cat?.bullet?.map((bullet, index) => (
                                            <li
                                                key={index}
                                                className="text-sm text-foreground/65 flex items-center justify-center gap-2"
                                            >
                                                <LucideCircleCheckBig
                                                    className={`h-4 w-4`}
                                                    style={{ color: cat.color || undefined }}
                                                />
                                                {bullet.title}
                                            </li>
                                        ))}
                                    </ul>
                                    {cat?.button?.title && (
                                        <Button
                                            className={`w-full text-white rounded-full`}
                                            style={{ backgroundColor: cat?.color || undefined }}
                                            asChild
                                        >
                                            <Link href={cat?.button?.link || '#'}>
                                                {cat?.button?.title}
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
