'use client'

import { Button } from '@/components/ui/button'
import { Phone, Mail, Clock, Users } from 'lucide-react'
import React, { FC } from 'react'

export interface ContactTwoProps {
    cards?:
        | {
              color?: string | null
              icon?: string | null
              title?: string | null
              lead?: {
                  root: {
                      type: string
                      children: {
                          type: string
                          version: number
                          [k: string]: unknown
                      }[]
                      direction: ('ltr' | 'rtl') | null
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
                      indent: number
                      version: number
                  }
                  [k: string]: unknown
              } | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'contact-two'
}

export const ContactTwo: FC<ContactTwoProps> = ({ ...props }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Phone */}
                    <div className="rounded-lg bg-card text-card-foreground bg-gradient-to-br from-coral-100 to-coral-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                        <div className="p-6 pt-8">
                            <div className="inline-block p-4 bg-coral-500 rounded-full mb-4">
                                <Phone className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-coral-700 mb-3">Phone</h3>
                            <div className="space-y-2 text-gray-600">
                                <p className="font-semibold">Main Office</p>
                                <p>+960 330-5676</p>
                                <p className="font-semibold mt-4">Admissions</p>
                                <p>+960 330-5677</p>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="rounded-lg bg-card text-card-foreground bg-gradient-to-br from-sky-100 to-sky-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                        <div className="p-6 pt-8">
                            <div className="inline-block p-4 bg-sky-500 rounded-full mb-4">
                                <Mail className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-sky-700 mb-3">Email</h3>
                            <div className="space-y-2 text-gray-600">
                                <p className="font-semibold">General Inquiries</p>
                                <p>info@ahmadhiyya.edu.mv</p>
                                <p className="font-semibold mt-4">Admissions</p>
                                <p>admissions@ahmadhiyya.edu.mv</p>
                            </div>
                        </div>
                    </div>

                    {/* School Hours */}
                    <div className="rounded-lg bg-card text-card-foreground bg-gradient-to-br from-mint-100 to-mint-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                        <div className="p-6 pt-8">
                            <div className="inline-block p-4 bg-mint-500 rounded-full mb-4">
                                <Clock className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-mint-700 mb-3">School Hours</h3>
                            <div className="space-y-2 text-gray-600">
                                <p className="font-semibold">Monday - Thursday</p>
                                <p>7:30 AM - 2:30 PM</p>
                                <p className="font-semibold mt-4">Friday</p>
                                <p>7:30 AM - 11:30 AM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
