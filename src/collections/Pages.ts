import { SeoFields } from '@/fields/seo'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'url',
        group: 'Website',
    },
    fields: [
        { name: 'url', type: 'text', label: 'Url', required: true, unique: true },
        {
            type: 'tabs',
            tabs: [
                { name: 'design', label: 'Design', fields: [] },
                { name: 'seo', label: 'Search Engine Optimiztion', fields: SeoFields },
            ],
        },
    ],
    versions: {
        drafts: {
            autosave: true,
            schedulePublish: true,
        },
    },
    trash: true,
}
