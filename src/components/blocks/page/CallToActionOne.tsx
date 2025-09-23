import React, { FC } from 'react'

interface CallToActionOneProps {
    [key: string]: unknown
}

export const CallToActionOne: FC<CallToActionOneProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return (
        <section className="py-20 bg-[#51BDA0]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    {`Take the first step towards your child's bright future. Apply now or schedule a
                    visit to experience our exceptional learning environment.`}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 bg-white text-[#51BDA0] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg">
                        Apply Now
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
                            className="lucide lucide-arrow-right ml-2 h-5 w-5"
                        >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 border-2 border-white text-white hover:bg-white hover:text-[#51BDA0] px-8 py-4 text-lg font-medium rounded-lg bg-transparent">
                        Schedule Visit
                    </button>
                </div>
            </div>
        </section>
    )
}
