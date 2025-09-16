import React, { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { PostView } from '@/components/blocks/posts/client'
import { Posts } from '@/components/blocks/posts'

interface Props {
    params: Promise<{ id: string }>
}

export default async function PostPage({ params }: Props) {
    const { id } = await params
    const post = await getPost(id)

    return (
        <main className="container">
            <PostView {...post} relatedPosts={<Posts landing={false} />} />
        </main>
    )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const post = await getPost(id)

    return {
        title: post.title,
    }
}

const getPost = cache(async (id: string) => {
    try {
        const payload = await getPayload({ config })
        return await payload.findByID({ collection: 'posts', id: parseInt(id) || 0 })
    } catch (error: unknown) {
        if ((error as Error).message === 'Not Found') return notFound()
        throw error
    }
})
