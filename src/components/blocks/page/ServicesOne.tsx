import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import React, { FC } from 'react'

export interface ServicesOneProps {
    title?: string | null
    description?: string | null
    services?:
        | {
              emoji?: string | null
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
    blockType: 'services-one'
}

export const ServicesOne: FC<ServicesOneProps> = ({ ...props }) => {
    const supportServices = [
        {
            icon: '🧠',
            title: 'Counseling Services',
            description:
                'Professional counselors available for academic, personal, and social support',
            actionText: 'Learn More',
            variant: 'outline',
        },
        {
            icon: '🤝',
            title: 'Peer Support',
            description: 'Trained student mentors and peer support networks for all grade levels',
            actionText: 'Join Program',
            variant: 'outline',
        },
        {
            icon: '🧘',
            title: 'Mindfulness Program',
            description: 'Meditation, stress management, and emotional regulation techniques',
            actionText: 'Get Started',
            variant: 'outline',
        },
    ]

    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="container">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                        Wellbeing &amp; Support
                    </h2>
                    <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                        We prioritize the mental health and emotional wellbeing of our students,
                        providing comprehensive support services.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {supportServices.map((service) => (
                        <Card
                            key={service.title}
                            className="text-center shadow-sm hover:shadow-md border border-[#E5E7EB] rounded-md"
                        >
                            <CardHeader className="pt-8">
                                <div className="text-6xl mb-4">{service.icon}</div>
                                <CardTitle className="text-xl font-bold text-[#1A1A1A]">
                                    {service.title}
                                </CardTitle>
                                <CardDescription className="text-[#6B7280] mb-4">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    // @ts-expect-error: hehe
                                    variant={service.variant}
                                    className="border-[#51BDA0] text-[#51BDA0] hover:bg-[#51BDA0] hover:text-white"
                                >
                                    {service.actionText}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
