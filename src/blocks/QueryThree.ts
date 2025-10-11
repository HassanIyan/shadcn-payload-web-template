import type { Block } from 'payload'

export const QueryThree: Block = {
    slug: 'query-three',
    labels: {
        singular: 'Download Query',
        plural: 'Download Queries',
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
