import React, { FC } from 'react'

export interface HeroFourProps {
    colors?: {
        primary?: string | null
        secondary?: string | null
        accent?: string | null
    }
    title?: {
        first_part?: string | null
        second_part?: string | null
    }
    description?: string | null
    /**
     * @minItems 2
     * @maxItems 2
     */
    coordniates?: [number, number] | null
    name?: string | null
    address?: string | null
    button?: {
        title?: string | null
        link?: string | null
    }
    id?: string | null
    blockName?: string | null
    blockType: 'hero-four'
}

export const HeroFour: FC<HeroFourProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
