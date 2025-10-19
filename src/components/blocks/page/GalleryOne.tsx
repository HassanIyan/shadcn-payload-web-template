import { Media } from '@/payload-types'
import React, { FC } from 'react'

export interface GalleryOneProps {
    images?: Media[] | null
    id?: string | null
    blockName?: string | null
    blockType: 'gallery-one'
}

export const GalleryOne: FC<GalleryOneProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
