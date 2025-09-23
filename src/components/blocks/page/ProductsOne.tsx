import Image from 'next/image'
import React, { FC } from 'react'

interface ProductsOneProps {
    [key: string]: unknown
}

export const ProductsOne: FC<ProductsOneProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Academic Programs</h2>
                    <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                        {`Comprehensive education pathways designed to unlock every student's
                        potential from early years through university preparation.`}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="rounded-lg text-card-foreground shadow-sm border border-[#E5E7EB] hover-lift bg-[#F8F9FA] overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                alt="Kindergarten"
                                loading="lazy"
                                decoding="async"
                                fill
                                className="object-cover absolute h-full w-full inset-0 text-transparent"
                                src="https://ahmadhiyya-edu-mv.vercel.app/images/kindergarten-class.jpg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold mb-1">Kindergarten</h3>
                                <p className="text-sm opacity-90">Ages 3-5</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-[#6B7280] mb-4">
                                Foundation years with play-based learning approach
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-[#6B7280]">
                                    <div className="w-1.5 h-1.5 bg-[#51BDA0] rounded-full"></div>
                                    Early literacy
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#6B7280]">
                                    <div className="w-1.5 h-1.5 bg-[#51BDA0] rounded-full"></div>
                                    Numeracy skills
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#6B7280]">
                                    <div className="w-1.5 h-1.5 bg-[#51BDA0] rounded-full"></div>
                                    Social development
                                </li>
                            </ul>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border h-10 px-4 py-2 w-full border-[#51BDA0] text-[#51BDA0] hover:bg-[#51BDA0] hover:text-white bg-white">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="rounded-lg text-card-foreground shadow-sm border border-[#E5E7EB] hover-lift bg-[#F8F9FA] overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                alt="Primary"
                                loading="lazy"
                                decoding="async"
                                fill
                                className="object-cover absolute h-full w-full inset-0 text-transparent"
                                src="https://ahmadhiyya-edu-mv.vercel.app/images/primary-students.jpg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold mb-1">Primary</h3>
                                <p className="text-sm opacity-90">Grades 1-5</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-[#6B7280] mb-4">
                                Cambridge Primary curriculum building core skills
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-[#6B7280]">
                                    <div className="w-1.5 h-1.5 bg-[#51BDA0] rounded-full"></div>
                                    Core subjects
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#6B7280]">
                                    <div className="w-1.5 h-1.5 bg-[#51BDA0] rounded-full"></div>
                                    Creative arts
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#6B7280]">
                                    <div className="w-1.5 h-1.5 bg-[#51BDA0] rounded-full"></div>
                                    Physical education
                                </li>
                            </ul>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border h-10 px-4 py-2 w-full border-[#51BDA0] text-[#51BDA0] hover:bg-[#51BDA0] hover:text-white bg-white">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="rounded-lg text-card-foreground shadow-sm border border-[#E5E7EB] hover-lift bg-[#F8F9FA] overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                alt="Secondary"
                                loading="lazy"
                                decoding="async"
                                fill
                                className="object-cover absolute h-full w-full inset-0 text-transparent"
                                src="https://ahmadhiyya-edu-mv.vercel.app/images/secondary-students.jpg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold mb-1">Secondary</h3>
                                <p className="text-sm opacity-90">Grades 6-11</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-[#6B7280] mb-4">
                                IGCSE preparation with comprehensive subject options
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-[#6B7280]">
                                    <div className="w-1.5 h-1.5 bg-[#51BDA0] rounded-full"></div>
                                    IGCSE subjects
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#6B7280]">
                                    <div className="w-1.5 h-1.5 bg-[#51BDA0] rounded-full"></div>
                                    Science labs
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#6B7280]">
                                    <div className="w-1.5 h-1.5 bg-[#51BDA0] rounded-full"></div>
                                    Career guidance
                                </li>
                            </ul>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border h-10 px-4 py-2 w-full border-[#51BDA0] text-[#51BDA0] hover:bg-[#51BDA0] hover:text-white bg-white">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="rounded-lg text-card-foreground shadow-sm border border-[#E5E7EB] hover-lift bg-[#F8F9FA] overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                alt="A-Levels"
                                loading="lazy"
                                decoding="async"
                                fill
                                className="object-cover absolute h-full w-full inset-0 text-transparent"
                                src="https://ahmadhiyya-edu-mv.vercel.app/images/alevels-students.jpg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold mb-1">A-Levels</h3>
                                <p className="text-sm opacity-90">Grades 12-13</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-[#6B7280] mb-4">
                                University preparation with excellent results
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-[#6B7280]">
                                    <div className="w-1.5 h-1.5 bg-[#51BDA0] rounded-full"></div>
                                    Subject specialization
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#6B7280]">
                                    <div className="w-1.5 h-1.5 bg-[#51BDA0] rounded-full"></div>
                                    University guidance
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#6B7280]">
                                    <div className="w-1.5 h-1.5 bg-[#51BDA0] rounded-full"></div>
                                    100% pass rate
                                </li>
                            </ul>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border h-10 px-4 py-2 w-full border-[#51BDA0] text-[#51BDA0] hover:bg-[#51BDA0] hover:text-white bg-white">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
