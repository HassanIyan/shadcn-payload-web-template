import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import React, { FC } from 'react'

export interface FaqOneProps {
    title?: string | null
    description?: string | null
    question?:
        | {
              question?: string | null
              answer?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'faq-one'
}

export const FaqOne: FC<FaqOneProps> = ({ title, description, question }) => {
    return (
        <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/10">
            <div className="container mx-auto px-4">
                {/* Header */}
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

                {/* Accordion */}
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible>
                        {question?.map(({ id, question, answer }) => (
                            <AccordionItem
                                key={id}
                                value={id || ''}
                                className="bg-primary/10 px-4 rounded-md"
                            >
                                <AccordionTrigger className="font-bold">
                                    {question}
                                </AccordionTrigger>
                                <AccordionContent className="">{answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
