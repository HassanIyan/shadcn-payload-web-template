import React, { FC } from 'react'

export interface StatsTwoProps {
    title?: string | null
    description?: string | null
    stat?:
        | {
              name?: string | null
              value?: string | null
              description?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'stats-two'
}

export const StatsTwo: FC<StatsTwoProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
