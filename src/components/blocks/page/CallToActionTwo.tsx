import React, { FC } from 'react'

export interface CallToActionTwoProps {
    colors?: {
        primary?: string | null
        secondary?: string | null
        accent?: string | null
    }
    title?: string | null
    description?: string | null
    button?:
        | {
              title?: string | null
              link?: string | null
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'call-to-action-two'
}

export const CallToActionTwo: FC<CallToActionTwoProps> = ({ ...props }) => {
    return <section>{props?.blockType}</section>
}
