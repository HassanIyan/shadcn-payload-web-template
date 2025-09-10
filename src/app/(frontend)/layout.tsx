import './styles.css'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ObjectifyMetaData } from '@/lib/utils'
import Header from '@/components/blocks/header'
import Footer from '@/components/blocks/footer'
import StyledJsxRegistry from './registry'
import CssVariables from '@/components/blocks/CssVariables'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <StyledJsxRegistry>
                <CssVariables />
                <body className="text-foreground">
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-1">{children}</main>
                    </div>
                    <Footer />
                </body>
            </StyledJsxRegistry>
        </html>
    )
}

export async function generateMetadata(): Promise<Metadata> {
    const payload = await getPayload({ config })
    const meta = await payload.findGlobal({ slug: 'metadata' })

    return ObjectifyMetaData(meta)
}
