import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'name',
    },
    auth: true,
    fields: [
        { name: 'name', type: 'text', label: 'Name', required: true },
        { name: 'picture', type: 'upload', label: 'Picture', required: false, relationTo: 'media' },
    ],
}
