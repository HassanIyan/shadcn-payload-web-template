import React, { FC } from 'react'

export interface FeaturesThreeProps {
    title?: string | null
    description?: string | null
    badge?: string | null
    feature?:
        | {
              emoji?: string | null
              title?: string | null
              sub_title?: string | null
              value?: string | null
              name?: string | null
              tags?:
                  | {
                        title?: string | null
                        id?: string | null
                    }[]
                  | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'features-three'
}

export const FeaturesThree: FC<FeaturesThreeProps> = ({ ...props }) => {
    return <section>{props?.blockType}</section>
}
