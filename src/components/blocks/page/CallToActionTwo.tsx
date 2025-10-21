import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { FC } from 'react'

export interface CallToActionTwoProps {
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

export const CallToActionTwo: FC<CallToActionTwoProps> = ({
    colors,
    title,
    description,
    button,
}) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div
                    className="rounded-md text-center shadow-xl p-12"
                    style={{
                        background: `linear-gradient(to right, ${colors?.primary}, ${colors?.secondary})`,
                        color: colors?.accent || undefined,
                    }}
                >
                    {title && <h3 className="text-3xl font-bold mb-4">{title}</h3>}
                    {description && <p className="text-xl mb-8 opacity-90">{description}</p>}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {button?.map((btn, index) => (
                            <Button
                                key={index}
                                size={'lg'}
                                className="bg-background"
                                style={{
                                    color:
                                        index === 0
                                            ? colors?.primary || undefined
                                            : colors?.secondary || undefined,
                                }}
                                asChild
                            >
                                <Link href={btn?.link || '#'}>{btn?.title}</Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
