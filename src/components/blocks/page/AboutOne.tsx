import Image from 'next/image'
import React, { FC } from 'react'

interface AboutOneProps {
    [key: string]: unknown
}

export const AboutOne: FC<AboutOneProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-[#51BDA0] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                            Our Story
                        </div>
                        <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
                            Building Excellence Since 1982
                        </h2>
                        <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                            For over four decades, Ahmadhiyya International School has been
                            committed to providing exceptional education that prepares students for
                            global success. Our proven track record speaks to our dedication to
                            academic excellence and character development.
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
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
                                    className="lucide lucide-circle-check-big h-5 w-5 text-[#51BDA0]"
                                >
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                                <span className="text-[#1A1A1A] font-medium">
                                    Cambridge International Curriculum
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-circle-check-big h-5 w-5 text-[#51BDA0]"
                                >
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                                <span className="text-[#1A1A1A] font-medium">
                                    Experienced and Qualified Teachers
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-circle-check-big h-5 w-5 text-[#51BDA0]"
                                >
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                                <span className="text-[#1A1A1A] font-medium">
                                    State-of-the-Art Facilities
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-circle-check-big h-5 w-5 text-[#51BDA0]"
                                >
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                                <span className="text-[#1A1A1A] font-medium">
                                    Comprehensive Student Support
                                </span>
                            </div>
                        </div>
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 bg-[#51BDA0] hover:bg-[#459985] text-white px-6 py-3 rounded-lg font-medium">
                            Learn More About Us
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-arrow-right ml-2 h-4 w-4"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="relative">
                        <div className="bg-white rounded-2xl p-4 shadow-professional-xl">
                            <Image
                                alt="School campus"
                                loading="lazy"
                                width="600"
                                height="500"
                                decoding="async"
                                data-nimg="1"
                                className="rounded-xl w-full object-cover text-transparent"
                                src="https://ahmadhiyya-edu-mv.vercel.app/images/school-building.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
