import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import {
    arrayOrUndefined,
    numberOrUndefined,
    objectOrUndefined,
    stringOrUndefined,
} from '@/lib/utils'

export default async function robots(): Promise<MetadataRoute.Robots> {
    const payload = await getPayload({ config })
    const robots = await payload.findGlobal({ slug: 'robots' })

    return {
        // @ts-expect-error: not typed
        rules:
            arrayOrUndefined(
                robots?.rules?.map((rule) =>
                    objectOrUndefined({
                        userAgent: arrayOrUndefined(
                            rule?.userAgents?.map(({ userAgent }) => stringOrUndefined(userAgent)),
                        ),
                        allow: arrayOrUndefined(
                            rule?.allows?.map(({ allow }) => stringOrUndefined(allow)),
                        ),
                        disallow: arrayOrUndefined(
                            rule?.disallows?.map(({ disallow }) => stringOrUndefined(disallow)),
                        ),
                        crawlDelay: numberOrUndefined(rule?.crawlDelay),
                    }),
                ),
            ) || [],
        sitemap: arrayOrUndefined(
            robots?.sitemaps?.map(({ sitemap }) => stringOrUndefined(sitemap)),
        ) as string[],
    }
}

export const dynamic = 'force-dynamic'
