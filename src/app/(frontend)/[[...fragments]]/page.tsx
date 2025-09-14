import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'

export default async function page({ params }: { params: Promise<{ fragments: string[] }> }) {
    const payload = await getPayload({ config })
    const { fragments } = await params
    const link = `/${fragments?.join('/') || ''}`

    const pages = await payload.find({
        collection: 'pages',
        where: {
            url: {
                equals: link,
            },
        },
    })

    if (pages?.totalDocs === 0) return notFound()

    return <main className="container">{link}</main>
}
