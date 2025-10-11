import type { Block } from 'payload'

export const StatsTwo: Block = {
    slug: 'stats-two',
    labels: {
        singular: 'Clean Stat',
        plural: 'Clean Stats',
    },
    admin: {
        group: 'Stats',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'stat',
            type: 'array',
            fields: [
                { name: 'name', type: 'text' },
                { name: 'value', type: 'text' },
                { name: 'description', type: 'textarea' },
            ],
        },
    ],
}
