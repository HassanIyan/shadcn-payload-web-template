import type { Block } from 'payload'

export const TestimonialsOne: Block = {
    slug: 'testimonials-one',
    labels: {
        singular: 'Testimonial',
        plural: 'Testimonials',
    },
    admin: {
        group: 'Testimonials',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'testimonials',
            type: 'array',
            fields: [
                { name: 'stars', type: 'number' },
                { name: 'message', type: 'textarea' },
                {
                    name: 'person',
                    type: 'group',
                    fields: [
                        { name: 'name', type: 'text' },
                        { name: 'designation', type: 'text' },
                    ],
                },
            ],
        },
    ],
}
