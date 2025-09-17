import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound, redirect } from 'next/navigation'
import { Media } from '@/payload-types'

interface Props {
    params: Promise<{ id: string }>
}

export default async function DownloadPage({ params }: Props) {
    const { id } = await params
    const download = await getDownload(id)

    return redirect((download?.file as Media)?.url || '/')
}

const getDownload = cache(async (id: string) => {
    try {
        const payload = await getPayload({ config })
        return await payload.findByID({ collection: 'downloads', id: parseInt(id) || 0 })
    } catch (error: unknown) {
        if ((error as Error).message === 'Not Found') return notFound()
        throw error
    }
})
