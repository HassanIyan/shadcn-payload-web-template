import type { Block } from 'payload'

export const TeamOne: Block = {
    slug: 'team-one',
    labels: {
        singular: 'Team Listing',
        plural: 'Team Listings',
    },
    admin: {
        group: 'Team',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'team',
            type: 'array',
            fields: [
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'name', type: 'text' },
                { name: 'designation', type: 'text' },
                { name: 'sub_title', label: 'Sub title', type: 'text' },
                { name: 'description', type: 'textarea' },
            ],
        },
    ],
}
