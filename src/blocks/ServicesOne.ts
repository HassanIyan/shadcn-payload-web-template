import type { Block } from 'payload'

export const ServicesOne: Block = {
    slug: 'services-one',
    labels: {
        singular: 'Service',
        plural: 'Services',
    },
    admin: {
        group: 'Services',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'services',
            type: 'array',
            fields: [
                { name: 'emoji', type: 'text' },
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea' },
                {
                    name: 'button',
                    type: 'group',
                    fields: [
                        { name: 'title', type: 'text' },
                        { name: 'link', type: 'text' },
                    ],
                },
            ],
        },
    ],
}
