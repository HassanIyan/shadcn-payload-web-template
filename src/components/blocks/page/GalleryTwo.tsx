import { Media } from '@/payload-types'
import React, { FC } from 'react'

export interface GalleryTwoProps {
    title?: string | null
    description?: string | null
    images?:
        | {
              image?: Media
              link?: string | null
              title?: string | null
              description?: string | null
              id?: string | null
          }[]
        | null
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
    blockType: 'gallery-two'
}

export const GalleryTwo: FC<GalleryTwoProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
