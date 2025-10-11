import type { Block } from 'payload'

export const QueryTwo: Block = {
    slug: 'query-two',
    labels: {
        singular: 'Event Query',
        plural: 'Event Queries',
    },
    admin: {
        group: 'Query',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'query', type: 'json' },
    ],
}
