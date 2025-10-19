import React, { FC } from 'react'

export interface QueryThreeProps {
    title?: string | null
    description?: string | null
    query?:
        | {
              [k: string]: unknown
          }
        | unknown[]
        | string
        | number
        | boolean
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'query-three'
}

export const QueryThree: FC<QueryThreeProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
