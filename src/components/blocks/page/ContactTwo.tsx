import React, { FC } from 'react'

export interface ContactTwoProps {
    cards?:
        | {
              color?: string | null
              icon?: string | null
              title?: string | null
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
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'contact-two'
}

export const ContactTwo: FC<ContactTwoProps> = ({ ...props }) => {
    return <section>{props?.blockType}</section>
}
