import React, { FC } from 'react'

export interface ContactOneProps {
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

export const ContactOne: FC<ContactOneProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
