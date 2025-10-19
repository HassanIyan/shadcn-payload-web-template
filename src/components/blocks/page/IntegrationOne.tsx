import React, { FC } from 'react'

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

export const IntegrationOne: FC<IntegrationOneProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
