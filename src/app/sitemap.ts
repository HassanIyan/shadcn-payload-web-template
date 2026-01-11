import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import {
    arrayOrUndefined,
    numberOrUndefined,
    objectOrUndefined,
    stringOrUndefined,
} from '@/lib/utils'
import { Media } from '@/payload-types'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const payload = await getPayload({ config })
    const sitemap = await payload.findGlobal({ slug: 'sitemap' })

    return (arrayOrUndefined(
        sitemap?.pages?.map((page) => ({
            url: stringOrUndefined(page.url),
            lastModified: stringOrUndefined(page.lastModified),
            changeFrequency: stringOrUndefined(page?.changeFrequency),
            priority: numberOrUndefined(page?.priority),
            alternates: objectOrUndefined({
                languages: objectOrUndefined(
                    Object.assign(
                        {},
                        ...(page?.alternates?.languages?.map(({ language, url }) => ({
                            [language || '']: stringOrUndefined(url),
                        })) || []),
                    ),
                ),
            }),
            images: arrayOrUndefined(
                (page?.images as Media[])?.map(({ url }) => stringOrUndefined(url)),
            ),
            videos: arrayOrUndefined(
                (page?.videos as Media[])?.map((video) => ({
                    title: video?.alt,
                    thumbnail_loc: video?.thumbnailURL,
                    description: video?.alt,
                })),
            ),
        })),
    ) || []) as MetadataRoute.Sitemap
}

export const dynamic = 'force-dynamic'
