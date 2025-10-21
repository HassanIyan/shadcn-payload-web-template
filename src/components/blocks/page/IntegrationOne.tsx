import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

export interface IntegrationOneProps {
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

export const IntegrationOne: FC<IntegrationOneProps> = ({
    title,
    description,
    integration,
    id,
}) => {
    return (
        <section id={id ?? undefined} className="container">
            <div className="rounded-md border-0 shadow-lg max-w-4xl mx-auto text-card-foreground bg-card">
                <div className="p-8">
                    <div className="text-center mb-8">
                        {title && (
                            <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
                        )}
                        {description && <p className="text-muted-foreground">{description}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {integration?.map((office) => {
                            const Icon = office.icon
                                ? // @ts-expect-error: Dynamic icon import
                                  dynamic(dynamicIconImports[office.icon])
                                : null

                            return (
                                <div key={office.id ?? office.title}>
                                    {office.title && (
                                        <h4
                                            className="font-semibold text-foreground mb-4 flex items-center gap-2"
                                            style={{ color: office.color || undefined }}
                                        >
                                            {Icon && (
                                                <Icon
                                                    // @ts-expect-error: Dynamic icon import
                                                    className="h-5 w-5"
                                                />
                                            )}
                                            {office.title}
                                        </h4>
                                    )}

                                    {office.records && (
                                        <div className="space-y-2 text-muted-foreground">
                                            {office.records.map((record) => (
                                                <div
                                                    key={record.id ?? record.name}
                                                    className="flex justify-between"
                                                >
                                                    <span>{record.name}</span>
                                                    <span>{record.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
