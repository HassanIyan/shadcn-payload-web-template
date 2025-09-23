import React, { FC } from 'react'

interface AboutTwoProps {
    [key: string]: unknown
}

export const AboutTwo: FC<AboutTwoProps> = ({ ...props }) => {
    console.log(JSON.stringify(props, null, 2))

    return (
        <section className="pt-24 pb-16 relative overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-coral-300/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-sky-300/20 rounded-full blur-xl"></div>
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-block p-4 bg-sky-100 rounded-full mb-6">
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
                            className="lucide lucide-heart h-12 w-12 text-sky-600"
                        >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                        We Believe in<span className="block text-sky-500">Curious Minds</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                        For over four decades, Ahmadhiyya International School has been nurturing
                        young minds and preparing them for success in an interconnected world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 bg-coral-500 hover:bg-coral-600 text-white rounded-full px-8 py-4 text-lg font-semibold">
                            Take a Virtual Tour
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
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-11 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 rounded-full px-8 py-4 text-lg font-semibold bg-transparent">
                            Download Prospectus
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
