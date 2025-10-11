import type { Block } from 'payload'

export const ResourcesOne: Block = {
    slug: 'resources-one',
    labels: {
        singular: 'Resource',
        plural: 'Resources',
    },
    admin: {
        group: 'Resources',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'resources',
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
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'detail', type: 'text' },
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
