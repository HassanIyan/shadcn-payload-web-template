'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import React, { FC } from 'react'

export interface QueryTwoProps {
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
    blockType: 'query-two'
}

export const QueryTwo: FC<QueryTwoProps> = ({ ...props }) => {
    const events = [
        {
            category: 'Academic',
            title: 'Parent-Teacher Conference',
            date: 'March 25, 2024',
            time: '2:00 PM - 6:00 PM',
            location: 'School Auditorium',
            audience: 'All Parents',
        },
        {
            category: 'Competition',
            title: 'Science Fair 2024',
            date: 'April 2, 2024',
            time: '9:00 AM - 4:00 PM',
            location: 'Main Hall',
            audience: 'Grades 6-13',
        },
        {
            category: 'Cultural',
            title: 'Cultural Night',
            date: 'April 15, 2024',
            time: '7:00 PM - 10:00 PM',
            location: 'School Grounds',
            audience: 'Whole School',
        },
        {
            category: 'Sports',
            title: 'Inter-House Swimming Gala',
            date: 'April 22, 2024',
            time: '3:00 PM - 6:00 PM',
            location: 'School Pool',
            audience: 'All Houses',
        },
        {
            category: 'Ceremony',
            title: 'Grade 5 Graduation',
            date: 'May 10, 2024',
            time: '10:00 AM - 12:00 PM',
            location: 'Auditorium',
            audience: 'Grade 5 & Families',
        },
        {
            category: 'Admissions',
            title: 'Open Day for New Families',
            date: 'May 18, 2024',
            time: '9:00 AM - 2:00 PM',
            location: 'Whole School',
            audience: 'Prospective Families',
        },
    ]

    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="container">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Upcoming Events</h2>
                    <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
                        Mark your calendars for these exciting upcoming events and activities
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <Card
                            key={event.title}
                            className="shadow-sm border border-[#E5E7EB] hover-lift"
                        >
                            <CardContent className="flex flex-col space-y-1.5 p-6">
                                <div className="flex items-start justify-between">
                                    <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-[#51BDA0] text-white mb-2">
                                        {event.category}
                                    </div>
                                    <div className="text-right text-sm text-[#6B7280]">
                                        <div className="font-semibold">{event.date}</div>
                                        <div>{event.time}</div>
                                    </div>
                                </div>

                                <CardTitle className="font-semibold tracking-tight text-[#1A1A1A] text-lg leading-tight">
                                    {event.title}
                                </CardTitle>

                                <div className="space-y-2 text-sm text-[#6B7280] mt-2">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-map-pin h-4 w-4"
                                        >
                                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-users h-4 w-4"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                        <span>{event.audience}</span>
                                    </div>
                                </div>

                                <Button className="w-full mt-4 h-9 border border-[#51BDA0] text-[#51BDA0] hover:bg-[#51BDA0] hover:text-white rounded-md bg-transparent">
                                    Add to Calendar
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
