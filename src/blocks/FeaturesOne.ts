import type { Block } from 'payload'

export const FeaturesOne: Block = {
    slug: 'features-one',
    labels: {
        singular: 'Icon Card',
        plural: 'Icon Cards',
    },
    admin: {
        group: 'Features',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'features',
            type: 'array',
            fields: [
                {
                    name: 'icon',
                    type: 'text',
                    label: 'Icon',
                    admin: {
                        components: {
                            Field: '@/components/payload/icon-selector',
                            Cell: '@/components/payload/icon-selector/cell',
                        },
                    },
                },
                { name: 'rounded', type: 'checkbox' },
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea' },
            ],
        },
    ],
}
