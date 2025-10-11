import type { Block } from 'payload'

export const HeroThree: Block = {
    slug: 'hero-three',
    labels: {
        singular: 'Button Hero',
        plural: 'Button Heros',
    },
    admin: {
        group: 'Hero',
    },
    fields: [
        { name: 'badge', type: 'text' },
        {
            name: 'title',
            type: 'group',
            fields: [
                {
                    type: 'row',
                    fields: [
                        { name: 'first_part', type: 'text' },
                        { name: 'second_part', type: 'text' },
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
    ],
}
