'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export const QueryOneAction = async (query?: unknown) => {
    const payload = await getPayload({ config })
    return await payload.find({
        collection: 'posts',
        draft: false,
        limit: 6,
        // @ts-expect-error: not typed
        ...query,
    })
}
export const QueryTwoAction = async (query?: unknown) => {
    const payload = await getPayload({ config })
    return await payload.find({
        collection: 'events',
        draft: false,
        limit: 6,
        // @ts-expect-error: not typed
        ...query,
    })
}
