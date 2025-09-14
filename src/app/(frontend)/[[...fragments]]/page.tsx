import React, { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ObjectifyMetaData } from '@/lib/utils'
import { Metadatum } from '@/payload-types'

interface Props {
    params: Promise<{ fragments: string[] }>
}

export default async function page({ params }: Props) {
    const { fragments } = await params
    const page = await getPage(fragments)

    return <main className="container">{page.url}</main>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { fragments } = await params
    const { seo } = await getPage(fragments)

    return ObjectifyMetaData(seo as Metadatum)
}

const getPage = cache(async (fragments: string[]) => {
    try {
        const link = `/${fragments?.join('/') || ''}`
        const payload = await getPayload({ config })
        const pages = await payload.find({
            collection: 'pages',
            where: {
                url: {
                    equals: link,
                },
            },
        })
        if (pages?.totalDocs === 0) return notFound()

        return pages?.docs?.[0]
    } catch (error: unknown) {
        if ((error as Error).message === 'Not Found') return notFound()
        throw error
    }
})
