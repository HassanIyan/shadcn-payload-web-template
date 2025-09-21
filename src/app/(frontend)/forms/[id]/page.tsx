import React, { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound, redirect } from 'next/navigation'
import Form from '@/components/blocks/form'

export default async function FormPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const form = await getForm(id)

    return <Form {...form} action={action} />
}

const getForm = cache(async (id: string) => {
    try {
        const payload = await getPayload({ config })
        const res = await payload.findByID({ collection: 'forms', id: parseInt(id) || 0 })
        if (res?.active) return res
        else throw new Error('Not Found')
    } catch (error: unknown) {
        if ((error as Error).message === 'Not Found') return notFound()
        throw error
    }
})

const action = async (formData: FormData) => {
    'use server'

    const payload = await getPayload({ config })
    const { redirectURL, id, mailSubject } = await payload.findByID({
        collection: 'forms',
        id: parseInt(formData.get('id')?.toString() || ''),
    })

    const entries: { [name: string]: unknown } = {}
    formData.forEach(async (value, key) => {
        if (!key?.startsWith('$ACTION_ID') && key !== 'id') {
            entries[key] = value
        }
    })

    await Promise?.all(
        Object?.entries(entries)?.map(async ([key, value]) => {
            if (value instanceof File) {
                const file = await payload.create({
                    collection: 'media',
                    data: { alt: value?.name },
                    file: {
                        data: Buffer.from(await value?.arrayBuffer()),
                        name: value?.name,
                        mimetype: value?.type,
                        size: value?.size,
                    },
                })

                entries[key] = file?.url
            }
        }),
    )

    await payload.create({
        collection: 'form_submissions',
        data: { values: entries, form: id },
    })

    await payload.sendEmail({
        html: `<h1>New Form Submission</h1><pre>${JSON.stringify(entries, null, 2)}</pre>`,
        to: 'no_reply@ahmadhiyya.edu.mv',
        subject: mailSubject,
    })

    if (redirectURL) redirect(redirectURL)
}
