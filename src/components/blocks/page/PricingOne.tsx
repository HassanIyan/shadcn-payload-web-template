import React, { FC } from 'react'

export interface PricingOneProps {
    title?: string | null
    description?: string | null
    color?: string | null
    price?:
        | {
              color?: string | null
              icon?: string | null
              title?: string | null
              sub_title?: string | null
              price?: string | null
              basis?: string | null
              bullet?:
                  | {
                        title?: string | null
                        id?: string | null
                    }[]
                  | null
              button?: {
                  title?: string | null
                  link?: string | null
              }
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'pricing-one'
}

export const PricingOne: FC<PricingOneProps> = ({ ...props }) => {
    return <section>{props.blockType}</section>
}
