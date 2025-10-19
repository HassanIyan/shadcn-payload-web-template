import { Media } from '@/payload-types'
import React, { FC } from 'react'

export interface TeamOneProps {
    title?: string | null
    description?: string | null
    team?:
        | {
              image?: Media
              name?: string | null
              designation?: string | null
              sub_title?: string | null
              description?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'team-one'
}

export const TeamOne: FC<TeamOneProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
