import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
    slug: 'form_submissions',
    admin: {
        group: 'Form Management',
        hideAPIURL: false,
    },
    access: {
        create: () => false,
        update: () => false,
    },
    fields: [
        { name: 'form', type: 'relationship', relationTo: 'forms', label: 'Form', required: true },
        { name: 'values', type: 'json', label: 'Values' },
    ],
}
