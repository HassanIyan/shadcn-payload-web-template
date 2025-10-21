import React, { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export interface ServicesOneProps {
    title?: string | null
    description?: string | null
    services?:
        | {
              emoji?: string | null
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
    blockType: 'services-one'
}

export const ServicesOne: FC<ServicesOneProps> = ({ title, description, services }) => {
    return (
        <section className="py-20 bg-muted text-muted-foreground">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    {title && <h2 className="text-4xl font-bold mb-4">{title} </h2>}
                    {description && (
                        <p className="text-xl text-muted-foreground/75 max-w-3xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
                {services && (
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card
                                key={service.id || service.title}
                                className="text-center shadow-sm hover:shadow-md border rounded-md transition-shadow bg-background text-foreground"
                            >
                                <CardHeader className="pt-8">
                                    {service.emoji && (
                                        <div className="text-6xl mb-4">{service.emoji}</div>
                                    )}
                                    {service.title && (
                                        <CardTitle className="text-xl font-bold">
                                            {service.title}
                                        </CardTitle>
                                    )}
                                    {service.description && (
                                        <CardDescription className="mb-4 text-card-foreground/75">
                                            {service.description}
                                        </CardDescription>
                                    )}
                                </CardHeader>
                                {service.button && service.button.title && (
                                    <CardContent>
                                        <Button
                                            variant="outline"
                                            asChild={!!service.button.link}
                                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                        >
                                            {service.button.link ? (
                                                <a href={service.button.link}>
                                                    {service.button.title}
                                                </a>
                                            ) : (
                                                <span>{service.button.title}</span>
                                            )}
                                        </Button>
                                    </CardContent>
                                )}
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
