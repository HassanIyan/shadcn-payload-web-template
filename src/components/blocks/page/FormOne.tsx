import { Form } from '@/payload-types'
import React, { FC } from 'react'

export interface FormOneProps {
    title?: string | null
    description?: string | null
    form?: (number | null) | Form
    id?: string | null
    blockName?: string | null
    blockType: 'form-one'
}

export const FormOne: FC<FormOneProps> = ({ ...props }) => {
    return <section>{props?.blockType}</section>
}
