import React, { FC } from 'react'

interface FeaturesOneProps {
    [key: string]: unknown
}

export const FeaturesOne: FC<FeaturesOneProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                        Why Choose Ahmadhiyya?
                    </h2>
                    <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
                        Discover what makes our school the preferred choice for families seeking
                        excellence in education.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="rounded-lg text-card-foreground shadow-sm border border-[#E5E7EB] hover-lift bg-[#F8F9FA]">
                        <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                            <div className="w-16 h-16 bg-[#51BDA0] rounded-lg flex items-center justify-center mx-auto mb-4">
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
                                    className="lucide lucide-globe h-8 w-8 text-white"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                </svg>
                            </div>
                            <div className="tracking-tight text-xl font-semibold text-[#1A1A1A]">
                                International Curriculum
                            </div>
                        </div>
                        <div className="p-6 pt-0 text-center">
                            <p className="text-[#6B7280] leading-relaxed">
                                Cambridge International Education pathway from Kindergarten to
                                A-Levels
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg text-card-foreground shadow-sm border border-[#E5E7EB] hover-lift bg-[#F8F9FA]">
                        <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                            <div className="w-16 h-16 bg-[#51BDA0] rounded-lg flex items-center justify-center mx-auto mb-4">
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
                                    className="lucide lucide-users h-8 w-8 text-white"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <div className="tracking-tight text-xl font-semibold text-[#1A1A1A]">
                                Expert Faculty
                            </div>
                        </div>
                        <div className="p-6 pt-0 text-center">
                            <p className="text-[#6B7280] leading-relaxed">
                                Highly qualified teachers committed to student success and
                                development
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg text-card-foreground shadow-sm border border-[#E5E7EB] hover-lift bg-[#F8F9FA]">
                        <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                            <div className="w-16 h-16 bg-[#51BDA0] rounded-lg flex items-center justify-center mx-auto mb-4">
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
                                    className="lucide lucide-target h-8 w-8 text-white"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                </svg>
                            </div>
                            <div className="tracking-tight text-xl font-semibold text-[#1A1A1A]">
                                Personalized Learning
                            </div>
                        </div>
                        <div className="p-6 pt-0 text-center">
                            <p className="text-[#6B7280] leading-relaxed">
                                Small class sizes ensuring individual attention and tailored support
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg text-card-foreground shadow-sm border border-[#E5E7EB] hover-lift bg-[#F8F9FA]">
                        <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                            <div className="w-16 h-16 bg-[#51BDA0] rounded-lg flex items-center justify-center mx-auto mb-4">
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
                                    className="lucide lucide-trending-up h-8 w-8 text-white"
                                >
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                </svg>
                            </div>
                            <div className="tracking-tight text-xl font-semibold text-[#1A1A1A]">
                                Outstanding Results
                            </div>
                        </div>
                        <div className="p-6 pt-0 text-center">
                            <p className="text-[#6B7280] leading-relaxed">
                                Consistent academic excellence with 100% A-Level pass rate
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
