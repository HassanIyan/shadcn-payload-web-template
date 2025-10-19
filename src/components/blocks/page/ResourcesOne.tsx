import React, { FC } from 'react'

export interface ResourcesOneProps {
    title?: string | null
    description?: string | null
    resources?:
        | {
              icon?: string | null
              title?: string | null
              description?: string | null
              detail?: string | null
              button?: {
                  title?: string | null
                  link?: string | null
              }
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'resources-one'
}

export const ResourcesOne: FC<ResourcesOneProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
