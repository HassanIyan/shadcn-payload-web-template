import React, { FC } from 'react'

export interface FaqOneProps {
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

export const FaqOne: FC<FaqOneProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
