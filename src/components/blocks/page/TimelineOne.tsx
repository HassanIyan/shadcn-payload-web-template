import React, { FC } from 'react'

export interface TimelineOneProps {
    title?: string | null
    description?: string | null
    timeline?:
        | {
              color?: string | null
              icon?: string | null
              title?: string | null
              description?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'timeline-one'
}

export const TimelineOne: FC<TimelineOneProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
