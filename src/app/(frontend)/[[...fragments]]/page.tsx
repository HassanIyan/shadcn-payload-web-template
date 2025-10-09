import React, { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ObjectifyMetaData } from '@/lib/utils'
import { Metadatum } from '@/payload-types'
import { FeaturesOne } from '@/components/blocks/page/FeaturesOne'
import { AboutOne } from '@/components/blocks/page/AboutOne'
import { CallToActionOne } from '@/components/blocks/page/CallToActionOne'
import { AboutTwo } from '@/components/blocks/page/AboutTwo'
import { AboutThree } from '@/components/blocks/page/AboutThree'
import { CallToActionTwo } from '@/components/blocks/page/CallToActionTwo'
import { ContactOne } from '@/components/blocks/page/ContactOne'
import { ContactTwo } from '@/components/blocks/page/ContactTwo'
import { FaqOne } from '@/components/blocks/page/FaqOne'
import { FeaturesTwo } from '@/components/blocks/page/FeaturesTwo'
import { FeaturesThree } from '@/components/blocks/page/FeaturesThree'
import { FeaturesFour } from '@/components/blocks/page/FeaturesFour'
import { FeaturesFive } from '@/components/blocks/page/FeaturesFive'
import { FormOne } from '@/components/blocks/page/FormOne'
import { GalleryOne } from '@/components/blocks/page/GalleryOne'
import { GalleryTwo } from '@/components/blocks/page/GalleryTwo'
import { HeroOne, HeroOneProps } from '@/components/blocks/page/HeroOne'
import { HeroTwo } from '@/components/blocks/page/HeroTwo'
import { HeroThree } from '@/components/blocks/page/HeroThree'
import { HeroFour } from '@/components/blocks/page/HeroFour'
import { IntegrationOne } from '@/components/blocks/page/IntegrationOne'
import { PricingOne } from '@/components/blocks/page/PricingOne'
import { ProductsOne } from '@/components/blocks/page/ProductsOne'
import { QueryOne } from '@/components/blocks/page/QueryOne'
import { QueryTwo } from '@/components/blocks/page/QueryTwo'
import { QueryThree } from '@/components/blocks/page/QueryThree'
import { ResourcesOne } from '@/components/blocks/page/ResourcesOne'
import { ServicesOne } from '@/components/blocks/page/ServicesOne'
import { StatsOne } from '@/components/blocks/page/StatsOne'
import { StatsTwo } from '@/components/blocks/page/StatsTwo'
import { TabContentOne } from '@/components/blocks/page/TabContentOne'
import { TeamOne } from '@/components/blocks/page/TeamOne'
import { TeamTwo } from '@/components/blocks/page/TeamTwo'
import { TestimonialsOne } from '@/components/blocks/page/TestimonialsOne'
import { TimelineOne } from '@/components/blocks/page/TimelineOne'

interface Props {
    params: Promise<{ fragments: string[] }>
}

export default async function page({ params }: Props) {
    const { fragments } = await params
    const page = await getPage(fragments)

    return (
        <main>
            {page?.design?.blocks?.map((block, index) => {
                if (block?.blockType === 'about-one') return <AboutOne key={index} />
                if (block?.blockType === 'about-two') return <AboutTwo key={index} />
                if (block?.blockType === 'about-three') return <AboutThree key={index} />
                if (block?.blockType === 'call-to-action-one')
                    return <CallToActionOne key={index} />
                if (block?.blockType === 'call-to-action-two')
                    return <CallToActionTwo key={index} />
                if (block?.blockType === 'contact-one') return <ContactOne key={index} />
                if (block?.blockType === 'contact-two') return <ContactTwo key={index} />
                if (block?.blockType === 'faq-one') return <FaqOne key={index} />
                if (block?.blockType === 'features-one') return <FeaturesOne key={index} />
                if (block?.blockType === 'features-two') return <FeaturesTwo key={index} />
                if (block?.blockType === 'features-three') return <FeaturesThree key={index} />
                if (block?.blockType === 'features-four') return <FeaturesFour key={index} />
                if (block?.blockType === 'features-five') return <FeaturesFive key={index} />
                if (block?.blockType === 'form-one') return <FormOne key={index} />
                if (block?.blockType === 'gallery-one') return <GalleryOne key={index} />
                if (block?.blockType === 'gallery-two') return <GalleryTwo key={index} />
                if (block?.blockType === 'hero-one')
                    return (
                        <HeroOne key={index} {...(block as HeroOneProps)} priority={index === 0} />
                    )
                if (block?.blockType === 'hero-two') return <HeroTwo key={index} />
                if (block?.blockType === 'hero-three') return <HeroThree key={index} />
                if (block?.blockType === 'hero-four') return <HeroFour key={index} />
                if (block?.blockType === 'integration-one') return <IntegrationOne key={index} />
                if (block?.blockType === 'pricing-one') return <PricingOne key={index} />
                if (block?.blockType === 'products-one') return <ProductsOne key={index} />
                if (block?.blockType === 'query-one') return <QueryOne key={index} />
                if (block?.blockType === 'query-two') return <QueryTwo key={index} />
                if (block?.blockType === 'query-three') return <QueryThree key={index} />
                if (block?.blockType === 'resources-one') return <ResourcesOne key={index} />
                if (block?.blockType === 'services-one') return <ServicesOne key={index} />
                if (block?.blockType === 'stats-one') return <StatsOne key={index} />
                if (block?.blockType === 'stats-two') return <StatsTwo key={index} />
                if (block?.blockType === 'tab-content-one') return <TabContentOne key={index} />
                if (block?.blockType === 'team-one') return <TeamOne key={index} />
                if (block?.blockType === 'team-two') return <TeamTwo key={index} />
                if (block?.blockType === 'testimonials-one') return <TestimonialsOne key={index} />
                if (block?.blockType === 'timeline-one') return <TimelineOne key={index} />

                return <p key={index}>{JSON.stringify(block, null, 2)}</p>
            })}
        </main>
    )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { fragments } = await params
    const { seo } = await getPage(fragments)

    return ObjectifyMetaData(seo as Metadatum)
}

const getPage = cache(async (fragments: string[]) => {
    try {
        const link = `/${fragments?.join('/') || ''}`
        const payload = await getPayload({ config })
        const pages = await payload.find({
            collection: 'pages',
            where: {
                url: {
                    equals: link,
                },
            },
        })
        if (pages?.totalDocs === 0) return notFound()

        return pages?.docs?.[0]
    } catch (error: unknown) {
        if ((error as Error).message === 'Not Found') return notFound()
        throw error
    }
})
