import type { Block } from 'payload'

export const HeroOne: Block = {
    slug: 'hero-one',
    labels: {
        singular: 'Backround Image Hero',
        plural: 'Backround Image Heros',
    },
    admin: {
        group: 'Hero',
    },
    fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'badge', type: 'text' },
        {
            name: 'title',
            type: 'group',
            fields: [
                {
                    type: 'row',
                    fields: [
                        { name: 'first_part', type: 'text', label: '' },
                        { name: 'second_part', type: 'text', label: '' },
                    ],
                },
            ],
        },
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
        {
            name: 'stats',
            type: 'array',
            fields: [
                { name: 'name', type: 'text' },
                { name: 'value', type: 'text' },
            ],
        },
    ],
}
