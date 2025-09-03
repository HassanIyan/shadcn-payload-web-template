import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
    const payload = await getPayload({ config })
    const manifest = await payload.findGlobal({ slug: 'manifest' })

    console.log(manifest)

    return {
        name: 'Next.js App',
        short_name: 'Next.js App',
        description: 'Next.js App',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
