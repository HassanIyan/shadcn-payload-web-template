import React, { FC } from 'react'

export interface QueryOneProps {
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
    blockType: 'query-one'
}

export const QueryOne: FC<QueryOneProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
