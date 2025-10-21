import React, { FC } from 'react'
import { Form } from '@/payload-types'
import FormComponent from '@/components/blocks/form'
import { action } from '@/app/(frontend)/forms/[id]/page'

export interface FormOneProps {
    title?: string | null
    description?: string | null
    form?: Form
    id?: string | null
    blockName?: string | null
    blockType: 'form-one'
}

export const FormOne: FC<FormOneProps> = ({ title, description, form }) => {
    return (
        <section id="form" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                                {title}
                            </h2>
                        )}
                        {description && <p className="text-foreground/75 text-lg">{description}</p>}
                    </div>

                    {form && (
                        <div>
                            <FormComponent {...form} action={action} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
