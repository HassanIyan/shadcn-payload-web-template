import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { FC } from 'react'

export interface CallToActionOneProps {
    title?: string | null
    description?: string | null
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
    blockType: 'call-to-action-one'
}

export const CallToActionOne: FC<CallToActionOneProps> = ({ title, description, buttons }) => {
    return (
        <section className="bg-primary text-primary-foreground text-center py-12 lg:py-24">
            <div className="container">
                <h1 className="text-4xl font-bold mb-6">{title}</h1>
                <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">{description}</p>
                <div className="flex flex-row items-center justify-center flex-wrap gap-x-4 gap-y-2">
                    {buttons?.map(({ title, link, type }, index) => (
                        <Button
                            key={index}
                            variant={type}
                            asChild
                            size={'lg'}
                            className={cn(
                                type === 'default' &&
                                    'bg-primary-foreground text-primary hover:bg-primary-foreground/80',
                                type === 'outline' &&
                                    'bg-primary text-primary-foreground border border-primary-foreground hover:bg-primary/80 hover:text-primary-foreground/80',
                            )}
                        >
                            <Link href={link || '#'}>{title}</Link>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    )
}
