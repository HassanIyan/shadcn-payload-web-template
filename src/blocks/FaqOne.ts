import type { Block } from 'payload'

export const FaqOne: Block = {
    slug: 'faq-one',
    labels: {
        singular: 'Faq',
        plural: 'Faqs',
    },
    admin: {
        group: 'Faq',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'question',
            type: 'array',
            fields: [
                { name: 'question', type: 'textarea' },
                { name: 'answer', type: 'textarea' },
            ],
        },
    ],
}
