import type { Block } from 'payload'

export const CallToActionOne: Block = {
    slug: 'call-to-action-one',
    labels: {
        singular: 'Plain CAT',
        plural: 'Plain CATs',
    },
    admin: {
        group: 'Call To Action',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'buttons',
            type: 'array',
            fields: [
                { name: 'title', type: 'text' },
                { name: 'link', type: 'text' },
                {
                    name: 'type',
                    type: 'select',
                    options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
                    defaultValue: 'default',
                },
            ],
        },
    ],
}
