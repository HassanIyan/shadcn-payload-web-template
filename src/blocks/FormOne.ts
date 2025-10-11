import type { Block } from 'payload'

export const FormOne: Block = {
    slug: 'form-one',
    labels: {
        singular: 'Form',
        plural: 'Forms',
    },
    admin: {
        group: 'Form',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'form', type: 'relationship', relationTo: 'forms' },
    ],
}
