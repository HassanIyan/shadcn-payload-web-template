import React, { FC, Fragment } from 'react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export interface ContactOneProps {
    title?: string | null
    description?: string | null
    cards?:
        | {
              color?: string | null
              icon?: string | null
              title?: string | null
              description?: string | null
              button?: {
                  title?: string | null
                  link?: string | null
              }
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'contact-one'
}

export const ContactOne: FC<ContactOneProps> = ({ title, description, cards }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    {title && <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>}
                    {description && (
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards?.map((card) => {
                        const Icon = card.icon ? (
                            // @ts-expect-error: icon is not typed
                            dynamic(dynamicIconImports[card.icon])
                        ) : (
                            <Fragment />
                        )

                        return (
                            <Card
                                key={card.id ?? card.title}
                                className="rounded-md shadow-lg hover:shadow-xl text-center border-0"
                            >
                                <CardContent className="p-6 pt-8">
                                    {Icon && (
                                        <div
                                            className={`inline-flex items-center justify-center p-4 mb-4 rounded-full`}
                                            style={{ backgroundColor: card.color || undefined }}
                                        >
                                            {/* @ts-expect-error: icon is not typed */}
                                            <Icon className="h-8 w-8 text-background" />
                                        </div>
                                    )}
                                    {card.title && (
                                        <h3 className="text-xl font-bold text-foreground mb-3">
                                            {card.title}
                                        </h3>
                                    )}
                                    {card.description && (
                                        <p className="text-muted-foreground mb-4">
                                            {card.description}
                                        </p>
                                    )}
                                    {card.button?.title && card.button?.link && (
                                        <Button
                                            asChild
                                            size={'lg'}
                                            className={`rounded-full text-background hover:opacity-80`}
                                            style={{ backgroundColor: card.color || undefined }}
                                        >
                                            <a href={card.button.link}>{card.button.title}</a>
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
