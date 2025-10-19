import { Media } from '@/payload-types'
import React, { FC } from 'react'

export interface FeaturesFourProps {
    features?:
        | {
              icon?: string | null
              image?: (number | null) | Media
              title?: string | null
              description?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'features-four'
}

export const FeaturesFour: FC<FeaturesFourProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
