import type { Block } from 'payload'

export const QueryOne: Block = {
    slug: 'query-one',
    labels: {
        singular: 'News Query',
        plural: 'News Queries',
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
