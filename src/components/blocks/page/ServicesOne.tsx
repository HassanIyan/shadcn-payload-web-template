import React, { FC } from 'react'

export interface ServicesOneProps {
    title?: string | null
    description?: string | null
    services?:
        | {
              emoji?: string | null
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
    blockType: 'services-one'
}

export const ServicesOne: FC<ServicesOneProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
