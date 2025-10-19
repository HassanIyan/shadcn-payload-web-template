import { UsersIcon } from 'lucide-react'
import React, { FC } from 'react'

export interface IntegrationOneProps {
    title?: string | null
    description?: string | null
    integration?:
        | {
              color?: string | null
              icon?: string | null
              title?: string | null
              records?:
                  | {
                        name?: string | null
                        value?: string | null
                        id?: string | null
                    }[]
                  | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'integration-one'
}

export const IntegrationOne: FC<IntegrationOneProps> = ({ ...props }) => {
    return (
        <section className="container">
            {/* Office Hours */}
            <div className="rounded-lg text-card-foreground bg-[#F8F9FA] border-0 shadow-lg max-w-4xl mx-auto">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Office Hours</h3>
                        <p className="text-gray-600">
                            Our administrative offices are open during these hours
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Main Office */}
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <UsersIcon className="h-5 w-5 text-coral-500" /> Main Office
                            </h4>
                            <div className="space-y-2 text-gray-600">
                                <div className="flex justify-between">
                                    <span>Monday - Thursday:</span>
                                    <span>7:00 AM - 3:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Friday:</span>
                                    <span>7:00 AM - 12:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span>Closed</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>

                        {/* Admissions Office */}
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <UsersIcon className="h-5 w-5 text-sky-500" /> Admissions Office
                            </h4>
                            <div className="space-y-2 text-gray-600">
                                <div className="flex justify-between">
                                    <span>Monday - Thursday:</span>
                                    <span>8:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Friday:</span>
                                    <span>8:00 AM - 12:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span>9:00 AM - 1:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
