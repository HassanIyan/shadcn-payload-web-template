import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
    slug: 'events',
    admin: {
        useAsTitle: 'title',
        group: 'Content Management',
        hideAPIURL: true,
    },
    fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'location', type: 'text', label: 'Location' },
        { name: 'audience', type: 'text', label: 'Audience' },
        { name: 'description', type: 'textarea', label: 'Description', admin: { rows: 10 } },
        {
            name: 'category',
            type: 'relationship',
            label: 'Category',
            relationTo: 'categories',
            required: true,
            admin: { position: 'sidebar' },
        },
        {
            name: 'start_date',
            type: 'date',
            label: 'Start Date',
            required: true,
            defaultValue: new Date(),
            admin: { date: { pickerAppearance: 'dayAndTime' }, position: 'sidebar' },
        },
        {
            name: 'end_date',
            type: 'date',
            label: 'End Date',
            admin: { date: { pickerAppearance: 'dayAndTime' }, position: 'sidebar' },
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
