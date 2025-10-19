'use client'

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

export const FaqOne: FC<FaqOneProps> = ({ ...props }) => {
    return (
        <section className="py-20 bg-gradient-to-r from-sky-50 to-mint-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our admissions process
                    </p>
                </div>

                {/* Accordion */}
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem
                            value="admission-age"
                            className="bg-white rounded-2xl shadow-lg"
                        >
                            <AccordionTrigger className="px-6 py-4 font-semibold text-gray-800 hover:text-sky-600">
                                What is the admission age for kindergarten?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 text-sm text-gray-600">
                                Children aged 3 to 5 years are eligible for kindergarten admissions.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="documents" className="bg-white rounded-2xl shadow-lg">
                            <AccordionTrigger className="px-6 py-4 font-semibold text-gray-800 hover:text-sky-600">
                                What documents are required for application?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 text-sm text-gray-600">
                                Required documents include birth certificate, passport-sized photo,
                                previous school records, and proof of residence.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="entrance-exam"
                            className="bg-white rounded-2xl shadow-lg"
                        >
                            <AccordionTrigger className="px-6 py-4 font-semibold text-gray-800 hover:text-sky-600">
                                Is there an entrance exam?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 text-sm text-gray-600">
                                Yes, students applying to primary and above will need to complete a
                                basic assessment.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="academic-year"
                            className="bg-white rounded-2xl shadow-lg"
                        >
                            <AccordionTrigger className="px-6 py-4 font-semibold text-gray-800 hover:text-sky-600">
                                When does the academic year start?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 text-sm text-gray-600">
                                Our academic year typically begins in early August.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="transport" className="bg-white rounded-2xl shadow-lg">
                            <AccordionTrigger className="px-6 py-4 font-semibold text-gray-800 hover:text-sky-600">
                                Do you offer transportation services?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 text-sm text-gray-600">
                                Yes, we provide safe and reliable transportation to and from school.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="late-applications"
                            className="bg-white rounded-2xl shadow-lg"
                        >
                            <AccordionTrigger className="px-6 py-4 font-semibold text-gray-800 hover:text-sky-600">
                                What is your policy on late applications?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 text-sm text-gray-600">
                                Late applications are considered on a case-by-case basis, subject to
                                seat availability.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
