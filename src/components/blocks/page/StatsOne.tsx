import React, { FC } from 'react'

export interface StatsOneProps {
    items?:
        | {
              icon?: string | null
              color?: string | null
              name?: string | null
              value?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'stats-one'
}

export const StatsOne: FC<StatsOneProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
