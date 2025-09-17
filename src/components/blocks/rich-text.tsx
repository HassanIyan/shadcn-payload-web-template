// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { cn } from '@/lib/utils'
import { formatDate } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Checkbox } from '../ui/checkbox'

const RichText: FC<{ children?: unknown }> = ({ children }) => {
    return <Node {...children?.root} />
}

export default RichText

export const Node: FC<unknown> = ({ type, tag, indent, direction, text, format, ...props }) => {
    const attr = {
        style: { marginStart: (indent || 0) * 4 },
        dir: direction,
    }

    const children = props?.children?.map((child, index) => <Node key={index} {...child} />)

    if (children?.length === 0) return <br />

    if (type === 'root')
        return (
            <div {...attr} className={cn(attr?.className, '')}>
                {children}
            </div>
        )

    if (type === 'paragraph')
        return (
            <p {...attr} className={cn(attr?.className, '')}>
                {children}
            </p>
        )

    if (tag === 'h1')
        return (
            <h1 {...attr} className={cn(attr?.className, 'text-5xl font-bold')}>
                {children}
            </h1>
        )

    if (tag === 'h2')
        return (
            <h2 {...attr} className={cn(attr?.className, 'text-4xl font-bold')}>
                {children}
            </h2>
        )

    if (tag === 'h3')
        return (
            <h3 {...attr} className={cn(attr?.className, 'text-3xl font-bold')}>
                {children}
            </h3>
        )

    if (tag === 'h4')
        return (
            <h4 {...attr} className={cn(attr?.className, 'text-2xl font-bold')}>
                {children}
            </h4>
        )

    if (tag === 'h5')
        return (
            <h5 {...attr} className={cn(attr?.className, 'text-xl font-bold')}>
                {children}
            </h5>
        )

    if (tag === 'h6')
        return (
            <h6 {...attr} className={cn(attr?.className, ' text-lg font-bold')}>
                {children}
            </h6>
        )

    if (tag === 'ul')
        if (props?.listType === 'check')
            return (
                <ul {...attr} className={cn(attr?.className, 'list-inside')}>
                    {props?.children?.map((child, index) => (
                        <div className="flex gap-2" key={index}>
                            <Checkbox
                                disabled
                                checked={child?.checked}
                                className="mt-1.5 disabled:opacity-100 disabled:cursor-default"
                            />
                            <Node {...child} />
                        </div>
                    ))}
                </ul>
            )
        else
            return (
                <ul {...attr} className={cn(attr?.className, 'list-disc list-inside')}>
                    {children}
                </ul>
            )

    if (tag === 'ol')
        return (
            <ol {...attr} className={cn(attr?.className, 'list-decimal list-inside')}>
                {children}
            </ol>
        )

    if (type === 'link')
        return (
            <Link
                {...attr}
                target={props?.fields?.newTab ? '_blank' : undefined}
                href={
                    props?.fields?.url ||
                    props?.fields?.doc?.value?.url ||
                    `/${props?.fields?.doc?.relationTo}/${props?.fields?.doc?.value?.id}`
                }
                className={cn(attr?.className, ' underline text-primary hover:opacity-85')}
            >
                {children}
            </Link>
        )

    if (type === 'listitem')
        return (
            <li {...attr} className={cn(attr?.className)}>
                {children}
            </li>
        )

    if (type === 'quote')
        return (
            <blockquote
                {...attr}
                className={cn(attr?.className, 'border-s-3 border-s-primary ps-4')}
            >
                {children}
            </blockquote>
        )

    if (type === 'upload')
        if (props?.value?.mimeType?.startsWith('image'))
            return (
                <Image
                    {...attr}
                    src={props?.value?.url}
                    alt={props?.value?.alt}
                    width={props?.value?.width}
                    height={props?.value?.height}
                    className={cn(attr?.className)}
                />
            )
        else
            return (
                <Link
                    {...attr}
                    href={props?.value?.url}
                    className={cn(
                        attr?.className,
                        'border-3 border-border gap-2 flex-col bg-muted text-muted-foreground p-4 max-w-lg flex hover:opacity-75',
                    )}
                >
                    <span className="font-bold text-start">
                        {props?.value?.filename || props?.value?.alt}
                    </span>
                    <span className=" text-xs text-end">
                        {formatDate(props?.value?.createdAt, 'MMMM dd, yyyy')}
                    </span>
                </Link>
            )

    if (type === 'relationship')
        return (
            <Link
                {...attr}
                href={`/${props?.relationTo}/${props?.value?.id || props?.value?.slug}`}
                className={cn(
                    attr?.className,
                    'border-3 border-border gap-2 flex-col bg-muted text-muted-foreground p-4 max-w-lg flex hover:opacity-75',
                )}
            >
                <span className="font-bold text-start">
                    {props?.value?.name || props?.value?.title}
                </span>
                <span className=" text-xs text-end">
                    {formatDate(props?.value?.createdAt, 'MMMM dd, yyyy')}
                </span>
            </Link>
        )

    if (type === 'horizontalrule')
        return <hr {...attr} className={cn(attr?.className, 'border-primary')} />

    if (type === 'text') {
        if (format === 1) return <b className="font-bold">{text}</b>
        if (format === 2) return <i className="italic">{text}</i>
        if (format === 4) return <s className="line-through">{text}</s>
        if (format === 8) return <u className="underline">{text}</u>
        if (format === 16) return <code>{text}</code>
        if (format === 32) return <sub>{text}</sub>
        if (format === 64) return <sup>{text}</sup>

        return text
    }

    return (
        <pre className="border mb-4">
            <code>
                {JSON.stringify({ ...props, type, tag, indent, direction, text, format }, null, 2)}
            </code>
        </pre>
    )
}
