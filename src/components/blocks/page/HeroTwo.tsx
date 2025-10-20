import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'
import Link from 'next/link'
export interface HeroTwoProps {
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

export const HeroTwo: FC<HeroTwoProps> = ({ icon, colors, title, description, buttons }) => {
    // @ts-expect-error: icon is not typed
    const Icon = dynamic(dynamicIconImports[icon])

    return (
        <section
            className="relative overflow-hidden"
            style={{
                background: `linear-gradient(145deg, ${colors?.secondary}10 0%, ${colors?.primary}15 100%)`,
            }}
        >
            <div
                className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl"
                style={{ backgroundColor: `${colors?.secondary}20` }}
            />
            <div
                className="absolute bottom-10 right-10 w-48 h-48 rounded-full blur-xl"
                style={{ backgroundColor: `${colors?.primary}20` }}
            />

            <div className="container mx-auto px-4 min-h-[calc(100vh-80px)] flex items-center justify-center">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div
                        className="inline-block p-4 rounded-full mb-6"
                        style={{ backgroundColor: `${colors?.primary}20` }}
                    >
                        {/* @ts-expect-error: icon is not typed */}
                        <Icon className="h-12 w-12" style={{ color: colors?.primary }} />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        {title?.first_part}
                        <span className="block" style={{ color: colors?.secondary || undefined }}>
                            {title?.second_part}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-foreground/75 mb-8 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {buttons?.map((button, index) => (
                            <Button
                                size="lg"
                                key={button.id}
                                className="rounded-full hover:opacity-75"
                                asChild
                                style={
                                    index === 0
                                        ? {
                                              backgroundColor: colors?.secondary || undefined,
                                          }
                                        : {
                                              borderWidth: 1,
                                              borderColor: colors?.primary || undefined,
                                              color: colors?.primary || undefined,
                                              backgroundColor: 'var(--background)',
                                          }
                                }
                            >
                                <Link href={button.link || '#'}>{button.title}</Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
