import { Media } from '@/payload-types'
import React, { FC } from 'react'

export interface AboutTwoProps {
    color?: string | null
    badge?: string | null
    lead?: {
        root: {
            type: string
            children: {
                type: string
                version: number
                [k: string]: unknown
            }[]
            direction: ('ltr' | 'rtl') | null
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
            indent: number
            version: number
        }
        [k: string]: unknown
    } | null
    bullet?:
        | {
              title?: string | null
              color?: string | null
              id?: string | null
          }[]
        | null
    image?: (number | null) | Media
    id?: string | null
    blockName?: string | null
    blockType: 'about-two'
}

export const AboutTwo: FC<AboutTwoProps> = ({ ...props }) => {
    return <section>{props?.blockType}</section>
}
