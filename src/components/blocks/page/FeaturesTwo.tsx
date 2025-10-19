import React, { FC } from 'react'

export interface FeaturesTwoProps {
    color?: string | null
    title?: string | null
    description?: string | null
    features?:
        | (
              | {
                    color?: string | null
                    icon?: string | null
                    title?: string | null
                    description?: string | null
                    id?: string | null
                    blockName?: string | null
                    blockType: 'varient-one'
                }
              | {
                    color?: string | null
                    emoji?: string | null
                    title?: string | null
                    description?: string | null
                    id?: string | null
                    blockName?: string | null
                    blockType: 'varient-two'
                }
          )[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'features-two'
}

export const FeaturesTwo: FC<FeaturesTwoProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
