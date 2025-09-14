import { GlobalConfig } from 'payload'

export const Robots: GlobalConfig = {
    slug: 'robots',
    label: 'Robots File',
    admin: {
        group: 'Search Engine Optimization',
        hideAPIURL: true,
    },
    fields: [
        {
            name: 'rules',
            type: 'array',
            label: 'Rules',
            fields: [
                {
                    name: 'userAgents',
                    type: 'array',
                    label: 'User Agents',
                    fields: [{ name: 'userAgent', type: 'text', label: '' }],
                },
                {
                    name: 'allows',
                    type: 'array',
                    label: 'Allows',
                    fields: [{ name: 'allow', type: 'text', label: '' }],
                },
                {
                    name: 'disallows',
                    type: 'array',
                    label: 'Disallows',
                    fields: [{ name: 'disallow', type: 'text', label: '' }],
                },
                { name: 'crawlDelay', type: 'number', label: 'Crawl Delay' },
            ],
        },
        {
            name: 'sitemaps',
            type: 'array',
            label: 'Sitemaps',
            fields: [{ name: 'sitemap', type: 'text', label: '' }],
        },
        { name: 'host', type: 'text', label: 'Host' },
    ],
}
