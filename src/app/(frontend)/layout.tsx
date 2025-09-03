import './styles.css'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ObjectifyMetaData } from '@/lib/utils'

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

    return ObjectifyMetaData(meta)
}
