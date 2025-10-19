import React, { FC } from 'react'

export interface HeroTwoProps {
    icon?: string | null
    colors?: {
        primary?: string | null
        secondary?: string | null
    }
    title?: {
        first_part?: string | null
        second_part?: string | null
    }
    description?: string | null
    buttons?:
        | {
              title?: string | null
              link?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'hero-two'
}

export const HeroTwo: FC<HeroTwoProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
