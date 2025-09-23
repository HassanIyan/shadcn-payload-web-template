'use client'

import Image from 'next/image'
import React, { FC } from 'react'

interface HeroOneProps {
    [key: string]: unknown
}

export const HeroOne: FC<HeroOneProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    alt="School campus background"
                    fill
                    className="object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent"
                    src="https://ahmadhiyya-edu-mv.vercel.app/images/alevels-students.jpg"
                />
                <div className="absolute inset-0 bg-white/75"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/80"></div>
            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-[#51BDA0] text-white px-6 py-2 rounded-full text-sm font-medium mb-8">
                        {'Excellence in Education Since 1982'}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                        {"Shaping Tomorrow's"}
                        <span className="text-[#51BDA0] block">{'Global Leaders'}</span>
                    </h1>
                    <p className="text-xl text-[#6B7280] mb-10 max-w-3xl mx-auto leading-relaxed">
                        {`At Ahmadhiyya International School, we provide world-className education
                        that prepares students for success in an interconnected world while
                        nurturing their individual potential.`}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 bg-[#51BDA0] hover:bg-[#459985] text-white px-8 py-4 text-lg font-medium rounded-lg shadow-professional hover:shadow-professional-lg transition-all duration-300">
                            {`Apply for Admission`}
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
                                className="lucide lucide-arrow-right ml-2 h-5 w-5"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 border-2 border-[#606062] text-[#606062] hover:bg-[#606062] hover:text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                            {`Schedule a Visit`}
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-3xl md:text-4xl font-bold text-[#51BDA0] mb-2">
                                {`42+`}
                            </div>
                            <div className="text-[#606062] font-medium">{`Years of Excellence`}</div>
                        </div>
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-3xl md:text-4xl font-bold text-[#51BDA0] mb-2">
                                {`800+`}
                            </div>
                            <div className="text-[#606062] font-medium">{`Students`}</div>
                        </div>
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-3xl md:text-4xl font-bold text-[#51BDA0] mb-2">
                                {`100%`}
                            </div>
                            <div className="text-[#606062] font-medium">{`A-Level Pass Rate`}</div>
                        </div>
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-3xl md:text-4xl font-bold text-[#51BDA0] mb-2">
                                {`60+`}
                            </div>
                            <div className="text-[#606062] font-medium">{`Expert Faculty`}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
