import type { Block } from 'payload'
import { HeroOne } from './HeroOne'
import { HeroTwo } from './HeroTwo'
import { HeroThree } from './HeroThree'
import { HeroFour } from './HeroFour'
import { AboutOne } from './AboutOne'
import { AboutTwo } from './AboutTwo'
import { AboutThree } from './AboutThree'
import { CallToActionOne } from './CallToActionOne'
import { CallToActionTwo } from './CallToActionTwo'
import { ContactOne } from './ContactOne'
import { ContactTwo } from './ContactTwo'
import { FaqOne } from './FaqOne'
import { FeaturesOne } from './FeaturesOne'
import { FeaturesTwo } from './FeaturesTwo'
import { FeaturesThree } from './FeaturesThree'
import { FeaturesFour } from './FeaturesFour'
import { FormOne } from './FormOne'
import { GalleryOne } from './GalleryOne'
import { GalleryTwo } from './GalleryTwo'
import { IntegrationOne } from './IntegrationOne'
import { PricingOne } from './PricingOne'
import { ProductsOne } from './ProductsOne'
import { QueryOne } from './QueryOne'
import { QueryTwo } from './QueryTwo'
import { QueryThree } from './QueryThree'
import { ResourcesOne } from './ResourcesOne'
import { ServicesOne } from './ServicesOne'
import { StatsOne } from './StatsOne'
import { StatsTwo } from './StatsTwo'
import { TeamOne } from './TeamOne'
import { TestimonialsOne } from './TestimonialsOne'
import { TimelineOne } from './TimelineOne'

export const TabContentOne: Block = {
    slug: 'tab-content-one',
    labels: {
        singular: 'Tab Content',
        plural: 'Tab Contents',
    },
    admin: {
        group: 'TabContent',
    },
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
            name: 'tabs',
            type: 'array',
            fields: [
                { name: 'name', type: 'text' },
                {
                    name: 'content',
                    type: 'blocks',
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
                        TeamOne,
                        TestimonialsOne,
                        TimelineOne,
                    ],
                },
            ],
        },
    ],
}
