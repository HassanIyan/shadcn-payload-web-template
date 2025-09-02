import './styles.css'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { objectOrUndefined, stringOrUndefined } from '@/lib/utils'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}

export async function generateMetadata(): Promise<Metadata> {
    const payload = await getPayload({ config })
    const meta = await payload.findGlobal({ slug: 'metadata' })

    return {
        abstract: stringOrUndefined(meta?.abstract),
        alternates: objectOrUndefined({
            canonical: stringOrUndefined(meta.alternates?.canonical),
            languages: objectOrUndefined(
                Object.assign(
                    {},
                    ...(meta.alternates?.languages?.map(({ language, id, url }) => ({
                        [String(language)]: {
                            id: stringOrUndefined(id),
                            url: stringOrUndefined(url),
                        },
                    })) || []),
                ),
            ),
            media: objectOrUndefined(
                Object.assign(
                    {},
                    ...(meta.alternates?.media?.map(({ id, url, medium }) => ({
                        [String(medium)]: {
                            id: stringOrUndefined(id),
                            url: stringOrUndefined(url),
                        },
                    })) || []),
                ),
            ),
        }),
        // alternates: {
        //     canonical: '',
        //     languages: {
        // 		asd: 'url'
        // 	},
        //     media: {
        //         asd: 'url',
        //     },
        //     types: {
        // 		asd: {ur}
        // 	},
        // },
    }
}
