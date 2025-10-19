import React, { FC } from 'react'

export interface HeroThreeProps {
    badge?: string | null
    title?: {
        first_part?: string | null
        second_part?: string | null
    }
    description?: string | null
    buttons?:
        | {
              title?: string | null
              link?: string | null
              type?: ('default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link') | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'hero-three'
}

export const HeroThree: FC<HeroThreeProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
