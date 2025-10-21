import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'
import React, { FC, Fragment } from 'react'
import RichText from '../rich-text'

export interface ContactTwoProps {
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
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
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

export const ContactTwo: FC<ContactTwoProps> = ({ cards }) => {
    return (
        <section className="py-20">
            <div className="container">
                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {cards?.map(({ id, icon, color, title, lead }) => {
                        // @ts-expect-error: icon is not typed
                        const Icon = icon ? dynamic(dynamicIconImports[icon]) : <Fragment />

                        return (
                            <div
                                key={id}
                                className="rounded-md bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                                style={{ backgroundColor: `${color}14` }}
                            >
                                <div className="p-6 pt-8">
                                    <div
                                        className="inline-block p-4 rounded-full mb-4"
                                        style={{ backgroundColor: color || undefined }}
                                    >
                                        {/* @ts-expect-error: icon is not typed */}
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-3"
                                        style={{ color: color || undefined }}
                                    >
                                        {title}
                                    </h3>
                                    <div className="text-foreground">
                                        <RichText>{lead}</RichText>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
