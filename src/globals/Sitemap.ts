import { GlobalConfig } from 'payload'

export const Sitemap: GlobalConfig = {
    slug: 'sitemap',
    label: 'Sitemap File',
    admin: {
        group: 'Search Engine Optimization',
        hideAPIURL: false,
    },
    fields: [
        {
            name: 'pages',
            label: 'Pages',
            type: 'array',
            fields: [
                { name: 'url', type: 'text', label: 'Url' },
                {
                    name: 'lastModified',
                    type: 'date',
                    label: 'Last Modified',
                    admin: { date: { pickerAppearance: 'dayAndTime' } },
                },
                {
                    name: 'changeFrequency',
                    type: 'select',
                    label: 'Change Frequency',
                    options: ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'],
                },
                { name: 'priority', label: 'Priority', type: 'number' },
                {
                    name: 'alternates',
                    label: 'Alternates',
                    type: 'group',
                    fields: [
                        {
                            name: 'languages',
                            type: 'array',
                            fields: [
                                { name: 'language', label: 'Language', type: 'text' },
                                { name: 'url', label: 'Url', type: 'text' },
                            ],
                        },
                    ],
                },
                {
                    name: 'images',
                    type: 'upload',
                    label: 'Images',
                    relationTo: 'media',
                    hasMany: true,
                },
                {
                    name: 'videos',
                    type: 'upload',
                    label: 'Videos',
                    relationTo: 'media',
                    hasMany: true,
                },
            ],
        },
    ],
}
