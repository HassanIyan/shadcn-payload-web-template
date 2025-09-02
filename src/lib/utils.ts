import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function stringOrUndefined(value: string | undefined | null) {
    if (value?.toString()?.trim()?.length === 0) return undefined
    if (value === null) return undefined
    return value
}

export function objectOrUndefined(value: { [name: string]: unknown } | undefined | null) {
    if (value === null) return undefined
    if (typeof value === 'object' && Object.keys(value)) return undefined
    return value
}
