import { cn } from '@/lib/utils'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'

export interface FeaturesOneProps {
    title?: string | null
    description?: string | null
    features?:
        | {
              icon?: string | null
              title?: string | null
              description?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'features-one'
}

export const FeaturesOne: FC<FeaturesOneProps> = ({ title, description, features }) => {
    return (
        <section className="container lg:py-24 py-12 text-center">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl max-w-2xl mx-auto mb-16 opacity-75">{description}</p>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-4">
                {features?.map(({ id, icon, title, description }) => {
                    // @ts-expect-error: icon is not typed
                    const Icon = dynamic(dynamicIconImports[icon])

                    return (
                        <div
                            key={id}
                            className={cn(
                                'bg-card text-card-foreground lg:p-6 p-4 rounded-md border border-border flex flex-col items-center transition-all cursor-pointer',
                                'hover:-translate-y-2 hover:shadow-lg hover:scale-105',
                            )}
                        >
                            <span className="block mx-auto bg-primary p-4 text-primary-foreground rounded-md mb-4">
                                <Icon />
                            </span>
                            <h6 className="font-bold mb-2">{title}</h6>
                            <p>{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
