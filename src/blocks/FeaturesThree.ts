import type { Block } from 'payload'

export const FeaturesThree: Block = {
    slug: 'features-three',
    labels: {
        singular: 'Symbol Card',
        plural: 'Symbol Cards',
    },
    admin: {
        group: 'Features',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'badge', type: 'text' },
        {
            name: 'feature',
            type: 'array',
            fields: [
                { name: 'emoji', type: 'text' },
                { name: 'title', type: 'text' },
                { name: 'sub_title', label: 'Sub title', type: 'text' },
                { name: 'value', type: 'text' },
                { name: 'name', type: 'text' },
                { name: 'tags', type: 'array', fields: [{ name: 'title', type: 'text' }] },
            ],
        },
    ],
}
