import { SeoFields } from '@/fields/seo'
import { GlobalConfig } from 'payload'

export const Metadata: GlobalConfig = {
    slug: 'metadata',
    label: 'Meta Data',
    admin: {
        group: 'Search Engine Optimization',
        hideAPIURL: true,
    },
    fields: SeoFields,
}
