import { SeoFields } from '@/fields/seo'
import type { CollectionConfig } from 'payload'

import { HeroOne } from '@/blocks/HeroOne'
import { HeroTwo } from '@/blocks/HeroTwo'
import { HeroThree } from '@/blocks/HeroThree'
import { HeroFour } from '@/blocks/HeroFour'
import { AboutOne } from '@/blocks/AboutOne'
import { AboutTwo } from '@/blocks/AboutTwo'
import { AboutThree } from '@/blocks/AboutThree'
import { CallToActionOne } from '@/blocks/CallToActionOne'
import { CallToActionTwo } from '@/blocks/CallToActionTwo'
import { ContactOne } from '@/blocks/ContactOne'
import { ContactTwo } from '@/blocks/ContactTwo'
import { FaqOne } from '@/blocks/FaqOne'
import { FeaturesOne } from '@/blocks/FeaturesOne'
import { FeaturesTwo } from '@/blocks/FeaturesTwo'
import { FeaturesThree } from '@/blocks/FeaturesThree'
import { FeaturesFour } from '@/blocks/FeaturesFour'
import { FormOne } from '@/blocks/FormOne'
import { GalleryOne } from '@/blocks/GalleryOne'
import { GalleryTwo } from '@/blocks/GalleryTwo'
import { IntegrationOne } from '@/blocks/IntegrationOne'
import { PricingOne } from '@/blocks/PricingOne'
import { ProductsOne } from '@/blocks/ProductsOne'
import { QueryOne } from '@/blocks/QueryOne'
import { QueryTwo } from '@/blocks/QueryTwo'
import { QueryThree } from '@/blocks/QueryThree'
import { ResourcesOne } from '@/blocks/ResourcesOne'
import { ServicesOne } from '@/blocks/ServicesOne'
import { StatsOne } from '@/blocks/StatsOne'
import { StatsTwo } from '@/blocks/StatsTwo'
import { TabContentOne } from '@/blocks/TabContentOne'
import { TeamOne } from '@/blocks/TeamOne'
import { TestimonialsOne } from '@/blocks/TestimonialsOne'
import { TimelineOne } from '@/blocks/TimelineOne'

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'url',
        group: 'Website',
        hideAPIURL: false,
    },
    fields: [
        { name: 'url', type: 'text', label: 'Url', required: true, unique: true },
        {
            type: 'tabs',
            tabs: [
                {
                    name: 'design',
                    label: 'Design',
                    fields: [
                        {
                            name: 'blocks',
                            type: 'blocks',
                            label: '',
                            blocks: [
                                HeroOne,
                                HeroTwo,
                                HeroThree,
                                HeroFour,
                                AboutOne,
                                AboutTwo,
                                AboutThree,
                                CallToActionOne,
                                CallToActionTwo,
                                ContactOne,
                                ContactTwo,
                                FaqOne,
                                FeaturesOne,
                                FeaturesTwo,
                                FeaturesThree,
                                FeaturesFour,
                                FormOne,
                                GalleryOne,
                                GalleryTwo,
                                IntegrationOne,
                                PricingOne,
                                ProductsOne,
                                QueryOne,
                                QueryTwo,
                                QueryThree,
                                ResourcesOne,
                                ServicesOne,
                                StatsOne,
                                StatsTwo,
                                TabContentOne,
                                TeamOne,
                                TestimonialsOne,
                                TimelineOne,
                            ],
                        },
                    ],
                },
                { name: 'seo', label: 'Search Engine Optimization', fields: SeoFields },
            ],
        },
    ],
    versions: {
        drafts: {
            autosave: false,
            schedulePublish: true,
        },
    },
    trash: true,
}
