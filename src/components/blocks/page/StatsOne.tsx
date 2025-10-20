import React, { FC } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

export interface StatsOneProps {
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

export const StatsOne: FC<StatsOneProps> = ({ items }) => {
    return (
        <section className="py-16 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {items?.map(({ icon, value, name, color }, index) => {
                        // @ts-expect-error: icon is not typed
                        const Icon = dynamic(dynamicIconImports[icon])
                        return (
                            <Card
                                key={index}
                                className={`text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                                style={{ backgroundColor: `${color}14` }}
                            >
                                <CardContent className="p-6 pt-6">
                                    <div
                                        className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4`}
                                        style={{ backgroundColor: color || undefined }}
                                    >
                                        {/* @ts-expect-error: icon is not typed */}
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-foreground/80 mb-2">
                                        {value}
                                    </h3>
                                    <p className="text-foreground/50 font-medium">{name}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
