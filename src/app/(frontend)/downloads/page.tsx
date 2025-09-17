import { Downloads } from '@/components/blocks/downloads'
import { Metadata } from 'next'
import React from 'react'

export default function DownloadsPage() {
    return (
        <main className="my-12">
            <Downloads className="container" />
        </main>
    )
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Downloads',
    }
}
