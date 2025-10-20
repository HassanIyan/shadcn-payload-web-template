'use client'

import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export interface QueryThreeProps {
    title?: string | null
    description?: string | null
    query?:
        | {
              [k: string]: unknown
          }
        | unknown[]
        | string
        | number
        | boolean
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'query-three'
}

export const QueryThree: FC<QueryThreeProps> = ({ ...props }) => {
    const downloads = [
        {
            title: 'Application Form',
            description: 'New student admission application',
            type: 'PDF Form',
            size: '2.4 MB',
            category: 'Admissions',
            color: 'coral',
        },
        {
            title: 'School Prospectus',
            description: 'Complete guide to our school',
            type: 'PDF Document',
            size: '8.7 MB',
            category: 'Information',
            color: 'sky',
        },
        {
            title: 'Fee Structure 2024',
            description: 'Detailed breakdown of school fees',
            type: 'PDF Document',
            size: '1.2 MB',
            category: 'Finance',
            color: 'mint',
        },
        {
            title: 'Medical Form',
            description: 'Student health information form',
            type: 'PDF Form',
            size: '0.8 MB',
            category: 'Health',
            color: 'yellow',
        },
        {
            title: 'Transport Application',
            description: 'School bus service application',
            type: 'PDF Form',
            size: '1.1 MB',
            category: 'Transport',
            color: 'coral',
        },
        {
            title: 'Parent Handbook',
            description: 'Guide for parents and guardians',
            type: 'PDF Document',
            size: '5.3 MB',
            category: 'Information',
            color: 'sky',
        },
        {
            title: 'Uniform Guidelines',
            description: 'School uniform requirements',
            type: 'PDF Document',
            size: '2.1 MB',
            category: 'Uniform',
            color: 'mint',
        },
        {
            title: 'Leave Application',
            description: 'Student absence request form',
            type: 'PDF Form',
            size: '0.6 MB',
            category: 'Academic',
            color: 'yellow',
        },
        {
            title: 'Code of Conduct',
            description: 'Student behavior expectations',
            type: 'PDF Document',
            size: '1.8 MB',
            category: 'Policies',
            color: 'coral',
        },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Downloads & Forms
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Access essential documents, application forms, and school policies
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {downloads.map((doc, idx) => (
                        <div
                            key={idx}
                            className={`rounded-md bg-card text-card-foreground bg-gradient-to-br from-${doc.color}-100 to-${doc.color}-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
                        >
                            <div className="flex flex-col space-y-1.5 p-6">
                                <div className="flex items-start justify-between">
                                    <div
                                        className={`p-3 bg-${doc.color}-500 rounded-full group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Download className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="text-right text-xs text-gray-500">
                                        <div>{doc.type}</div>
                                        <div>{doc.size}</div>
                                    </div>
                                </div>
                                <div
                                    className={`font-semibold tracking-tight text-${doc.color}-700 text-lg`}
                                >
                                    {doc.title}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {doc.description}
                                </div>
                            </div>

                            <div className="p-6 pt-0">
                                <div className="flex items-center justify-between">
                                    <span
                                        className={`text-xs bg-${doc.color}-200 text-${doc.color}-800 px-2 py-1 rounded-full`}
                                    >
                                        {doc.category}
                                    </span>
                                    <Button
                                        className={`inline-flex items-center justify-center gap-2 h-9 px-3 bg-${doc.color}-500 hover:bg-${doc.color}-600 text-white rounded-full text-sm font-medium`}
                                    >
                                        <Download className="h-4 w-4" />
                                        Download
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
