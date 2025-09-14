import type { CollectionConfig } from 'payload'

export const Downloads: CollectionConfig = {
    slug: 'downloads',
    admin: {
        useAsTitle: 'name',
        group: 'Content Management',
        hideAPIURL: true,
    },
    fields: [
        { name: 'name', type: 'text', label: 'Name', required: true },
        { name: 'description', type: 'textarea', label: 'Description', admin: { rows: 10 } },
        {
            name: 'file',
            type: 'upload',
            label: 'File',
            relationTo: 'media',
            required: true,
            admin: { position: 'sidebar' },
        },
        {
            name: 'category',
            type: 'relationship',
            label: 'Category',
            relationTo: 'categories',
            required: true,
            admin: { position: 'sidebar' },
        },
    ],
}
