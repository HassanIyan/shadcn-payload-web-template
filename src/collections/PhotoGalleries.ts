import type { CollectionConfig } from 'payload'

export const PhotoGalleries: CollectionConfig = {
    slug: 'photo_galleries',
    admin: {
        useAsTitle: 'title',
        group: 'Content Management',
        hideAPIURL: false,
    },
    fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'Photos', type: 'upload', label: 'Photos', hasMany: true, relationTo: 'media' },
        {
            name: 'date',
            type: 'date',
            label: 'Date',
            required: true,
            defaultValue: new Date(),
            admin: { date: { pickerAppearance: 'dayAndTime' }, position: 'sidebar' },
        },
        {
            name: 'category',
            type: 'relationship',
            label: 'Category',
            relationTo: 'categories',
            required: true,
            admin: { position: 'sidebar' },
        },
        {
            name: 'tags',
            type: 'relationship',
            label: 'Tags',
            relationTo: 'tags',
            hasMany: true,
            admin: { position: 'sidebar' },
        },
    ],
    versions: {
        drafts: {
            autosave: false,
            schedulePublish: true,
        },
    },
    trash: true,
}
