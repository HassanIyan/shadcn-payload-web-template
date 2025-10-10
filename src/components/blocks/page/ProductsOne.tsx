import { Media } from '@/payload-types'
import Image from 'next/image'
import React, { FC } from 'react'
import RichText from '../rich-text'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export interface ProductsOneProps {
    title?: string | null
    description?: string | null
    products?:
        | {
              title?: string | null
              sub_title?: string | null
              image?: null | Media
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
              button?: {
                  name?: string | null
                  link?: string | null
              }
              id?: string | null
          }[]
        | null
    id?: string | null
    blockName?: string | null
    blockType: 'products-one'
    priority?: boolean
}

export const ProductsOne: FC<ProductsOneProps> = ({ title, description, products, priority }) => {
    return (
        <section className="container lg:py-24 py-12">
            <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
            <p className="text-xl max-w-3xl mx-auto text-center opacity-50 mb-14">{description}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {products?.map(({ id, image, title, sub_title, lead, button }, index) => (
                    <div
                        key={id}
                        className="bg-card text-card-foreground border-2 border-border rounded-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2 cursor-auto flex flex-col"
                    >
                        <div className="relative aspect-video flex items-start justify-end flex-col text-background p-3">
                            {image?.url && (
                                <Image
                                    src={image?.url}
                                    fill
                                    sizes="25vw"
                                    className="object-cover"
                                    alt={image?.alt || ''}
                                    priority={priority && index >= 3}
                                />
                            )}
                            <span className="absolute inset-0 bg-gradient-to-b from-foreground/25 to-foreground/65" />
                            <h5 className="relative">{title}</h5>
                            <h6 className="relative">{sub_title}</h6>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <div className="flex-1">
                                <RichText>{lead}</RichText>
                            </div>
                            <Button asChild variant={'outline'} size={'lg'}>
                                <Link
                                    className="border-primary block w-full text-primary mt-4 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                                    href={button?.link || '#'}
                                >
                                    {button?.name}
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
