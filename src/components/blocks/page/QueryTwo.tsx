import React, { FC } from 'react'

export interface QueryTwoProps {
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
    blockType: 'query-two'
}

export const QueryTwo: FC<QueryTwoProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
