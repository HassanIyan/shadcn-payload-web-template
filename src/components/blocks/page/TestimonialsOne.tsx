import { StarIcon } from 'lucide-react'
import React, { FC } from 'react'

export interface TestimonialsOneProps {
    title?: string | null
    description?: string | null
    testimonials?:
        | {
              stars?: number | null
              message?: string | null
              person?: {
                  name?: string | null
                  designation?: string | null
              }
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'testimonials-one'
}

export const TestimonialsOne: FC<TestimonialsOneProps> = ({ title, description, testimonials }) => {
    return (
        <section className="bg-muted text-muted-foreground py-12 lg:py-24">
            <div className="container">
                <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
                <p className="text-xl opacity-50 text-center mb-12">{description}</p>
                <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
                    {testimonials?.map(({ id, stars, message, person }) => (
                        <div
                            key={id}
                            className="border border-border shadow-md bg-background p-6 rounded-md"
                        >
                            <div className="flex gap-1 mb-4">
                                {Array(stars)
                                    .fill(0)
                                    .map((value, key) => (
                                        <StarIcon
                                            key={`${value}_${key}`}
                                            className="text-primary fill-primary"
                                        />
                                    ))}
                            </div>
                            <p className="mb-4">{message}</p>
                            <h5 className="font-bold">{person?.name}</h5>
                            <h6>{person?.designation}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
