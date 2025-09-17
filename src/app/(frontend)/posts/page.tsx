import { Posts } from '@/components/blocks/posts'
import { Metadata } from 'next'
import React from 'react'

export default function PostsPage() {
    return (
        <main className="my-12">
            <Posts
                className="container"
                where={{
                    _status: {
                        equals: 'published',
                    },
                }}
            />
        </main>
    )
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Posts',
    }
}
