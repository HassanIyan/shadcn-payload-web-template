import React, { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'

export default async function FormPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const form = await getForm(id)

    return <div>{JSON.stringify(form)}</div>
}

const getForm = cache(async (id: string) => {
    try {
        const payload = await getPayload({ config })
        return await payload.findByID({ collection: 'categories', id: parseInt(id) || 0 })
    } catch (error: unknown) {
        if ((error as Error).message === 'Not Found') return notFound()
        throw error
    }
})
