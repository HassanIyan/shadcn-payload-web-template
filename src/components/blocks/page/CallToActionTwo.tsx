'use client'

import { Button } from '@/components/ui/button'
import { Phone, Mail } from 'lucide-react'
import React, { FC } from 'react'

export interface CallToActionTwoProps {
    colors?: {
        primary?: string | null
        secondary?: string | null
        accent?: string | null
    }
    title?: string | null
    description?: string | null
    button?:
        | {
              title?: string | null
              link?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'call-to-action-two'
}

export const CallToActionTwo: FC<CallToActionTwoProps> = ({ ...props }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="rounded-lg bg-gradient-to-r from-coral-500 to-sky-500 text-white text-center shadow-xl p-12">
                    <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
                    <p className="text-xl mb-8 opacity-90">
                        Our admissions team is here to help you through every step of the process
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="default"
                            className="bg-white text-coral-600 hover:bg-gray-100"
                            asChild
                        >
                            <a href="tel:+9603305676" className="inline-flex items-center gap-2">
                                <Phone className="h-5 w-5" />
                                Call Us: +960 330-5676
                            </a>
                        </Button>

                        <Button
                            variant="default"
                            className="bg-white text-sky-600 hover:bg-gray-100"
                            asChild
                        >
                            <a
                                href="mailto:admissions@ahmadhiyya.edu.mv"
                                className="inline-flex items-center gap-2"
                            >
                                <Mail className="h-5 w-5" />
                                Email: admissions@ahmadhiyya.edu.mv
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
