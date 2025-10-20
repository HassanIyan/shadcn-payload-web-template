import { Button } from '@/components/ui/button'
import { CircleHelp, Users, FileText } from 'lucide-react'
import React, { FC } from 'react'

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

const supportItems = [
    {
        title: 'General Inquiries',
        description: 'For general questions about our school, programs, and services',
        icon: CircleHelp,
        color: 'coral',
        buttonText: 'Contact Us',
    },
    {
        title: 'Admissions Support',
        description: 'Assistance with applications, requirements, and enrollment process',
        icon: Users,
        color: 'sky',
        buttonText: 'Get Help',
    },
    {
        title: 'Document Support',
        description: 'Help with forms, applications, and document requirements',
        icon: FileText,
        color: 'mint',
        buttonText: 'Get Assistance',
    },
]

export const ContactOne: FC<ContactOneProps> = ({ ...props }) => {
    return (
        <section className="py-20 bg-gradient-to-r from-mint-50 to-sky-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Need More Help?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our support team is here to assist you with any questions or concerns
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {supportItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-md text-card-foreground bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                        >
                            <div className="p-6 pt-8">
                                <div
                                    className={`inline-block p-4 rounded-full mb-4 bg-${item.color}-500`}
                                >
                                    <item.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <Button
                                    className={`h-10 px-4 py-2 bg-${item.color}-500 hover:bg-${item.color}-600 text-white rounded-full`}
                                >
                                    {item.buttonText}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
