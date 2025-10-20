import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Media, Form } from '@/payload-types'
import React, { FC } from 'react'
import Block from '.'

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

export const TabContentOne: FC<TabContentOneProps> = ({ title, description, tabs }) => {
    return (
        <section className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    {title && <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">{title}</h2>}
                    {description && (
                        <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">{description}</p>
                    )}
                </div>

                {/* Tabs */}
                <Tabs defaultValue={tabs?.[0]?.name || ''} className="w-full">
                    <TabsList className="grid w-full grid-cols-4 bg-background rounded-md p-2 border border-border">
                        {tabs?.map(({ id, name }) => (
                            <TabsTrigger
                                key={id}
                                value={name || ''}
                                className="text-sm font-medium rounded-md text-foreground/75 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg hover:opacity-75 transition-all duration-300"
                            >
                                {name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {tabs?.map(({ id, name, content }) => (
                        <TabsContent key={id} value={name || ''} className="">
                            {/* @ts-expect-error: haha */}
                            <Block blocks={content} />
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
