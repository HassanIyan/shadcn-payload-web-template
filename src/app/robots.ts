import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { arrayOrUndefined, stringOrUndefined } from '@/lib/utils'

export default async function robots(): Promise<MetadataRoute.Robots> {
    const payload = await getPayload({ config })
    const robots = await payload.findGlobal({ slug: 'robots' })

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: arrayOrUndefined(
            robots.sitemaps?.map(({ sitemap }) => stringOrUndefined(sitemap)),
        ) as string[],
    }
}
