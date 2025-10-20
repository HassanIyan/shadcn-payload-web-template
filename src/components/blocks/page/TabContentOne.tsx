'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Media, Form } from '@/payload-types'
import React, { FC } from 'react'

export interface TabContentOneProps {
    title?: string | null
    description?: string | null
    tabs?:
        | {
              name?: string | null
              content?:
                  | (
                        | {
                              image?: Media
                              badge?: string | null
                              title?: {
                                  first_part?: string | null
                                  second_part?: string | null
                              }
                              description?: string | null
                              buttons?:
                                  | {
                                        title?: string | null
                                        link?: string | null
                                        type?:
                                            | (
                                                  | 'default'
                                                  | 'destructive'
                                                  | 'outline'
                                                  | 'secondary'
                                                  | 'ghost'
                                                  | 'link'
                                              )
                                            | null
                                        id?: string | null
                                    }[]
                                  | null
                              stats?:
                                  | {
                                        name?: string | null
                                        value?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'hero-one'
                          }
                        | {
                              icon?: string | null
                              colors?: {
                                  primary?: string | null
                                  secondary?: string | null
                              }
                              title?: {
                                  first_part?: string | null
                                  second_part?: string | null
                              }
                              description?: string | null
                              buttons?:
                                  | {
                                        title?: string | null
                                        link?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'hero-two'
                          }
                        | {
                              badge?: string | null
                              title?: {
                                  first_part?: string | null
                                  second_part?: string | null
                              }
                              description?: string | null
                              buttons?:
                                  | {
                                        title?: string | null
                                        link?: string | null
                                        type?:
                                            | (
                                                  | 'default'
                                                  | 'destructive'
                                                  | 'outline'
                                                  | 'secondary'
                                                  | 'ghost'
                                                  | 'link'
                                              )
                                            | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'hero-three'
                          }
                        | {
                              colors?: {
                                  primary?: string | null
                                  secondary?: string | null
                                  accent?: string | null
                              }
                              title?: {
                                  first_part?: string | null
                                  second_part?: string | null
                              }
                              description?: string | null
                              /**
                               * @minItems 2
                               * @maxItems 2
                               */
                              coordniates?: [number, number] | null
                              name?: string | null
                              address?: string | null
                              button?: {
                                  title?: string | null
                                  link?: string | null
                              }
                              id?: string | null
                              blockName?: string | null
                              blockType: 'hero-four'
                          }
                        | {
                              badge?: string | null
                              lead?: {
                                  root: {
                                      type: string
                                      children: {
                                          type: string
                                          version: number
                                          [k: string]: unknown
                                      }[]
                                      direction: ('ltr' | 'rtl') | null
                                      format:
                                          | 'left'
                                          | 'start'
                                          | 'center'
                                          | 'right'
                                          | 'end'
                                          | 'justify'
                                          | ''
                                      indent: number
                                      version: number
                                  }
                                  [k: string]: unknown
                              } | null
                              image?: Media
                              bullet?:
                                  | {
                                        name?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              button?: {
                                  title?: string | null
                                  link?: string | null
                                  type?:
                                      | (
                                            | 'default'
                                            | 'destructive'
                                            | 'outline'
                                            | 'secondary'
                                            | 'ghost'
                                            | 'link'
                                        )
                                      | null
                              }
                              id?: string | null
                              blockName?: string | null
                              blockType: 'about-one'
                          }
                        | {
                              color?: string | null
                              badge?: string | null
                              lead?: {
                                  root: {
                                      type: string
                                      children: {
                                          type: string
                                          version: number
                                          [k: string]: unknown
                                      }[]
                                      direction: ('ltr' | 'rtl') | null
                                      format:
                                          | 'left'
                                          | 'start'
                                          | 'center'
                                          | 'right'
                                          | 'end'
                                          | 'justify'
                                          | ''
                                      indent: number
                                      version: number
                                  }
                                  [k: string]: unknown
                              } | null
                              bullet?:
                                  | {
                                        title?: string | null
                                        color?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              image?: Media
                              id?: string | null
                              blockName?: string | null
                              blockType: 'about-two'
                          }
                        | {
                              color?: string | null
                              badge?: string | null
                              lead?: {
                                  root: {
                                      type: string
                                      children: {
                                          type: string
                                          version: number
                                          [k: string]: unknown
                                      }[]
                                      direction: ('ltr' | 'rtl') | null
                                      format:
                                          | 'left'
                                          | 'start'
                                          | 'center'
                                          | 'right'
                                          | 'end'
                                          | 'justify'
                                          | ''
                                      indent: number
                                      version: number
                                  }
                                  [k: string]: unknown
                              } | null
                              bullet?:
                                  | {
                                        title?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              buttons?:
                                  | {
                                        title?: string | null
                                        link?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              image?: Media
                              id?: string | null
                              blockName?: string | null
                              blockType: 'about-three'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              buttons?:
                                  | {
                                        title?: string | null
                                        link?: string | null
                                        type?:
                                            | (
                                                  | 'default'
                                                  | 'destructive'
                                                  | 'outline'
                                                  | 'secondary'
                                                  | 'ghost'
                                                  | 'link'
                                              )
                                            | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'call-to-action-one'
                          }
                        | {
                              colors?: {
                                  primary?: string | null
                                  secondary?: string | null
                                  accent?: string | null
                              }
                              title?: string | null
                              description?: string | null
                              button?:
                                  | {
                                        title?: string | null
                                        link?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'call-to-action-two'
                          }
                        | {
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
                        | {
                              cards?:
                                  | {
                                        color?: string | null
                                        icon?: string | null
                                        title?: string | null
                                        lead?: {
                                            root: {
                                                type: string
                                                children: {
                                                    type: string
                                                    version: number
                                                    [k: string]: unknown
                                                }[]
                                                direction: ('ltr' | 'rtl') | null
                                                format:
                                                    | 'left'
                                                    | 'start'
                                                    | 'center'
                                                    | 'right'
                                                    | 'end'
                                                    | 'justify'
                                                    | ''
                                                indent: number
                                                version: number
                                            }
                                            [k: string]: unknown
                                        } | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'contact-two'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              question?:
                                  | {
                                        question?: string | null
                                        answer?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'faq-one'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              features?:
                                  | {
                                        icon?: string | null
                                        rounded?: boolean | null
                                        title?: string | null
                                        description?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'features-one'
                          }
                        | {
                              color?: string | null
                              title?: string | null
                              description?: string | null
                              features?:
                                  | (
                                        | {
                                              color?: string | null
                                              icon?: string | null
                                              title?: string | null
                                              description?: string | null
                                              id?: string | null
                                              blockName?: string | null
                                              blockType: 'varient-one'
                                          }
                                        | {
                                              color?: string | null
                                              emoji?: string | null
                                              title?: string | null
                                              description?: string | null
                                              id?: string | null
                                              blockName?: string | null
                                              blockType: 'varient-two'
                                          }
                                    )[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'features-two'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              badge?: string | null
                              feature?:
                                  | {
                                        emoji?: string | null
                                        title?: string | null
                                        sub_title?: string | null
                                        value?: string | null
                                        name?: string | null
                                        tags?:
                                            | {
                                                  title?: string | null
                                                  id?: string | null
                                              }[]
                                            | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'features-three'
                          }
                        | {
                              features?:
                                  | {
                                        icon?: string | null
                                        image?: Media
                                        title?: string | null
                                        description?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'features-four'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              form?: (number | null) | Form
                              id?: string | null
                              blockName?: string | null
                              blockType: 'form-one'
                          }
                        | {
                              images?: (number | Media)[] | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'gallery-one'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              images?:
                                  | {
                                        image?: Media
                                        link?: string | null
                                        title?: string | null
                                        description?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              buttons?:
                                  | {
                                        title?: string | null
                                        link?: string | null
                                        type?:
                                            | (
                                                  | 'default'
                                                  | 'destructive'
                                                  | 'outline'
                                                  | 'secondary'
                                                  | 'ghost'
                                                  | 'link'
                                              )
                                            | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'gallery-two'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              integration?:
                                  | {
                                        color?: string | null
                                        icon?: string | null
                                        title?: string | null
                                        records?:
                                            | {
                                                  name?: string | null
                                                  value?: string | null
                                                  id?: string | null
                                              }[]
                                            | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'integration-one'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              color?: string | null
                              price?:
                                  | {
                                        color?: string | null
                                        icon?: string | null
                                        title?: string | null
                                        sub_title?: string | null
                                        price?: string | null
                                        basis?: string | null
                                        bullet?:
                                            | {
                                                  title?: string | null
                                                  id?: string | null
                                              }[]
                                            | null
                                        button?: {
                                            title?: string | null
                                            link?: string | null
                                        }
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'pricing-one'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              products?:
                                  | {
                                        title?: string | null
                                        sub_title?: string | null
                                        image?: Media
                                        lead?: {
                                            root: {
                                                type: string
                                                children: {
                                                    type: string
                                                    version: number
                                                    [k: string]: unknown
                                                }[]
                                                direction: ('ltr' | 'rtl') | null
                                                format:
                                                    | 'left'
                                                    | 'start'
                                                    | 'center'
                                                    | 'right'
                                                    | 'end'
                                                    | 'justify'
                                                    | ''
                                                indent: number
                                                version: number
                                            }
                                            [k: string]: unknown
                                        } | null
                                        button?: {
                                            name?: string | null
                                            link?: string | null
                                        }
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'products-one'
                          }
                        | {
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
                              blockType: 'query-one'
                          }
                        | {
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
                        | {
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
                        | {
                              title?: string | null
                              description?: string | null
                              resources?:
                                  | {
                                        icon?: string | null
                                        title?: string | null
                                        description?: string | null
                                        detail?: string | null
                                        button?: {
                                            title?: string | null
                                            link?: string | null
                                        }
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'resources-one'
                          }
                        | {
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
                        | {
                              items?:
                                  | {
                                        icon?: string | null
                                        color?: string | null
                                        name?: string | null
                                        value?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'stats-one'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              stat?:
                                  | {
                                        name?: string | null
                                        value?: string | null
                                        description?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'stats-two'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              team?:
                                  | {
                                        image?: Media
                                        name?: string | null
                                        designation?: string | null
                                        sub_title?: string | null
                                        description?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'team-one'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              testimonials?:
                                  | {
                                        stars?: number | null
                                        message?: string | null
                                        person?: {
                                            name?: string | null
                                            designation?: string | null
                                        }
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'testimonials-one'
                          }
                        | {
                              title?: string | null
                              description?: string | null
                              timeline?:
                                  | {
                                        color?: string | null
                                        icon?: string | null
                                        title?: string | null
                                        description?: string | null
                                        id?: string | null
                                    }[]
                                  | null
                              id?: string | null
                              blockName?: string | null
                              blockType: 'timeline-one'
                          }
                    )[]
                  | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'tab-content-one'
}

export const TabContentOne: FC<TabContentOneProps> = ({ ...props }) => {
    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Academic Programs</h2>
                    <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                        {`From early childhood to university preparation, we offer a comprehensive
                        educational journey tailored to each student's needs.`}
                    </p>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="kindergarten" className="w-full">
                    <TabsList className="h-10 grid w-full grid-cols-4 mb-12 bg-white rounded-md p-2 border border-gray-200">
                        <TabsTrigger
                            value="kindergarten"
                            className="text-sm font-medium rounded-md text-[#606062] data-[state=active]:bg-[#51BDA0] data-[state=active]:text-white data-[state=active]:shadow-lg hover:text-[#51BDA0] transition-all duration-300"
                        >
                            Kindergarten
                        </TabsTrigger>
                        <TabsTrigger
                            value="primary"
                            className="text-sm font-medium rounded-md text-[#606062] data-[state=active]:bg-[#51BDA0] data-[state=active]:text-white data-[state=active]:shadow-lg hover:text-[#51BDA0] transition-all duration-300"
                        >
                            Primary
                        </TabsTrigger>
                        <TabsTrigger
                            value="secondary"
                            className="text-sm font-medium rounded-md text-[#606062] data-[state=active]:bg-[#51BDA0] data-[state=active]:text-white data-[state=active]:shadow-lg hover:text-[#51BDA0] transition-all duration-300"
                        >
                            Secondary
                        </TabsTrigger>
                        <TabsTrigger
                            value="alevels"
                            className="text-sm font-medium rounded-md text-[#606062] data-[state=active]:bg-[#51BDA0] data-[state=active]:text-white data-[state=active]:shadow-lg hover:text-[#51BDA0] transition-all duration-300"
                        >
                            A-Levels
                        </TabsTrigger>
                    </TabsList>

                    {/* Kindergarten Tab */}
                    <TabsContent value="kindergarten" className="mt-2 space-y-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="space-y-6">
                                <div className="inline-flex items-center border transition-colors border-transparent hover:bg-primary/80 bg-[#51BDA0]/10 text-[#51BDA0] rounded-full px-4 py-2 text-sm font-semibold">
                                    Ages 3-5
                                </div>
                                <h3 className="text-4xl font-bold text-[#1A1A1A] leading-tight">
                                    Kindergarten
                                    <span className="block text-[#51BDA0]">
                                        Early Years Foundation
                                    </span>
                                </h3>
                                <p className="text-lg text-[#6B7280] leading-relaxed">
                                    Our kindergarten program focuses on play-based learning, helping
                                    young children develop essential skills through exploration,
                                    creativity, and social interaction.
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        'Phonics & Early Reading',
                                        'Number Recognition',
                                        'Creative Arts',
                                        'Physical Development',
                                        'Social Skills',
                                        'Science Exploration',
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-[#51BDA0] rounded-full" />
                                            <span className="text-[#1A1A1A]">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <Button className="inline-flex items-center justify-center gap-2 h-10 bg-[#51BDA0] hover:bg-[#459985] text-white rounded-md px-8 py-3 font-medium">
                                    Learn More About Kindergarten
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>

                            {/* Image */}
                            <div className="relative">
                                <div className="bg-white rounded-md p-4 shadow-professional-xl">
                                    {/* <Image
                                        alt="Kindergarten students"
                                        src="/images/kindergarten-class.jpg"
                                        width={600}
                                        height={500}
                                        className="rounded-md w-full object-cover"
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Empty placeholders for other tabs */}
                    <TabsContent value="primary" className="mt-2 space-y-8"></TabsContent>
                    <TabsContent value="secondary" className="mt-2 space-y-8"></TabsContent>
                    <TabsContent value="alevels" className="mt-2 space-y-8"></TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
