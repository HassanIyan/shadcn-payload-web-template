import React, { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ObjectifyMetaData } from '@/lib/utils'
import { Metadatum } from '@/payload-types'
import dynamic from 'next/dynamic'
import { HeroOneProps } from '@/components/blocks/page/HeroOne'
import { FeaturesOneProps } from '@/components/blocks/page/FeaturesOne'
import { AboutOneProps } from '@/components/blocks/page/AboutOne'
import { ProductsOneProps } from '@/components/blocks/page/ProductsOne'
import { CallToActionOneProps } from '@/components/blocks/page/CallToActionOne'
import { TestimonialsOneProps } from '@/components/blocks/page/TestimonialsOne'
import { HeroTwoProps } from '@/components/blocks/page/HeroTwo'
import { AboutTwoProps } from '@/components/blocks/page/AboutTwo'
import { AboutThreeProps } from '@/components/blocks/page/AboutThree'
import { CallToActionTwoProps } from '@/components/blocks/page/CallToActionTwo'
import { ContactOneProps } from '@/components/blocks/page/ContactOne'
import { ContactTwoProps } from '@/components/blocks/page/ContactTwo'
import { FaqOneProps } from '@/components/blocks/page/FaqOne'
import { FeaturesTwoProps } from '@/components/blocks/page/FeaturesTwo'
import { FeaturesThreeProps } from '@/components/blocks/page/FeaturesThree'
import { FeaturesFourProps } from '@/components/blocks/page/FeaturesFour'
import { FormOneProps } from '@/components/blocks/page/FormOne'
import { GalleryOneProps } from '@/components/blocks/page/GalleryOne'
import { GalleryTwoProps } from '@/components/blocks/page/GalleryTwo'
import { HeroThreeProps } from '@/components/blocks/page/HeroThree'
import { HeroFourProps } from '@/components/blocks/page/HeroFour'
import { IntegrationOneProps } from '@/components/blocks/page/IntegrationOne'
import { PricingOneProps } from '@/components/blocks/page/PricingOne'
import { QueryOneProps } from '@/components/blocks/page/QueryOne'
import { QueryTwoProps } from '@/components/blocks/page/QueryTwo'
import { QueryThreeProps } from '@/components/blocks/page/QueryThree'
import { ResourcesOneProps } from '@/components/blocks/page/ResourcesOne'
import { ServicesOneProps } from '@/components/blocks/page/ServicesOne'
import { StatsOneProps } from '@/components/blocks/page/StatsOne'
import { StatsTwoProps } from '@/components/blocks/page/StatsTwo'
import { TabContentOneProps } from '@/components/blocks/page/TabContentOne'
import { TeamOneProps } from '@/components/blocks/page/TeamOne'
import { TimelineOneProps } from '@/components/blocks/page/TimelineOne'

interface Props {
    params: Promise<{ fragments: string[] }>
}

export default async function page({ params }: Props) {
    const { fragments } = await params
    const page = await getPage(fragments)
    const FeaturesOne = dynamic(() =>
        import('@/components/blocks/page/FeaturesOne').then((mod) => mod.FeaturesOne),
    )
    const AboutOne = dynamic(() =>
        import('@/components/blocks/page/AboutOne').then((mod) => mod.AboutOne),
    )
    const CallToActionOne = dynamic(() =>
        import('@/components/blocks/page/CallToActionOne').then((mod) => mod.CallToActionOne),
    )
    const AboutTwo = dynamic(() =>
        import('@/components/blocks/page/AboutTwo').then((mod) => mod.AboutTwo),
    )
    const AboutThree = dynamic(() =>
        import('@/components/blocks/page/AboutThree').then((mod) => mod.AboutThree),
    )
    const CallToActionTwo = dynamic(() =>
        import('@/components/blocks/page/CallToActionTwo').then((mod) => mod.CallToActionTwo),
    )
    const ContactOne = dynamic(() =>
        import('@/components/blocks/page/ContactOne').then((mod) => mod.ContactOne),
    )
    const ContactTwo = dynamic(() =>
        import('@/components/blocks/page/ContactTwo').then((mod) => mod.ContactTwo),
    )
    const FaqOne = dynamic(() =>
        import('@/components/blocks/page/FaqOne').then((mod) => mod.FaqOne),
    )
    const FeaturesTwo = dynamic(() =>
        import('@/components/blocks/page/FeaturesTwo').then((mod) => mod.FeaturesTwo),
    )
    const FeaturesThree = dynamic(() =>
        import('@/components/blocks/page/FeaturesThree').then((mod) => mod.FeaturesThree),
    )
    const FeaturesFour = dynamic(() =>
        import('@/components/blocks/page/FeaturesFour').then((mod) => mod.FeaturesFour),
    )
    const FormOne = dynamic(() =>
        import('@/components/blocks/page/FormOne').then((mod) => mod.FormOne),
    )
    const GalleryOne = dynamic(() =>
        import('@/components/blocks/page/GalleryOne').then((mod) => mod.GalleryOne),
    )
    const GalleryTwo = dynamic(() =>
        import('@/components/blocks/page/GalleryTwo').then((mod) => mod.GalleryTwo),
    )
    const HeroOne = dynamic(() =>
        import('@/components/blocks/page/HeroOne').then((mod) => mod.HeroOne),
    )
    const HeroTwo = dynamic(() =>
        import('@/components/blocks/page/HeroTwo').then((mod) => mod.HeroTwo),
    )
    const HeroThree = dynamic(() =>
        import('@/components/blocks/page/HeroThree').then((mod) => mod.HeroThree),
    )
    const HeroFour = dynamic(() =>
        import('@/components/blocks/page/HeroFour').then((mod) => mod.HeroFour),
    )
    const IntegrationOne = dynamic(() =>
        import('@/components/blocks/page/IntegrationOne').then((mod) => mod.IntegrationOne),
    )
    const PricingOne = dynamic(() =>
        import('@/components/blocks/page/PricingOne').then((mod) => mod.PricingOne),
    )
    const ProductsOne = dynamic(() =>
        import('@/components/blocks/page/ProductsOne').then((mod) => mod.ProductsOne),
    )
    const QueryOne = dynamic(() =>
        import('@/components/blocks/page/QueryOne').then((mod) => mod.QueryOne),
    )
    const QueryTwo = dynamic(() =>
        import('@/components/blocks/page/QueryTwo').then((mod) => mod.QueryTwo),
    )
    const QueryThree = dynamic(() =>
        import('@/components/blocks/page/QueryThree').then((mod) => mod.QueryThree),
    )
    const ResourcesOne = dynamic(() =>
        import('@/components/blocks/page/ResourcesOne').then((mod) => mod.ResourcesOne),
    )
    const ServicesOne = dynamic(() =>
        import('@/components/blocks/page/ServicesOne').then((mod) => mod.ServicesOne),
    )
    const StatsOne = dynamic(() =>
        import('@/components/blocks/page/StatsOne').then((mod) => mod.StatsOne),
    )
    const StatsTwo = dynamic(() =>
        import('@/components/blocks/page/StatsTwo').then((mod) => mod.StatsTwo),
    )
    const TabContentOne = dynamic(() =>
        import('@/components/blocks/page/TabContentOne').then((mod) => mod.TabContentOne),
    )
    const TeamOne = dynamic(() =>
        import('@/components/blocks/page/TeamOne').then((mod) => mod.TeamOne),
    )
    const TestimonialsOne = dynamic(() =>
        import('@/components/blocks/page/TestimonialsOne').then((mod) => mod.TestimonialsOne),
    )
    const TimelineOne = dynamic(() =>
        import('@/components/blocks/page/TimelineOne').then((mod) => mod.TimelineOne),
    )

    return (
        <main>
            {page?.design?.blocks?.map((block, index) => {
                if (block?.blockType === 'about-one')
                    return (
                        <AboutOne
                            {...(block as AboutOneProps)}
                            key={index}
                            priority={index === 0}
                        />
                    )
                if (block?.blockType === 'about-two')
                    return <AboutTwo key={index} {...(block as AboutTwoProps)} />
                if (block?.blockType === 'about-three')
                    return <AboutThree key={index} {...(block as AboutThreeProps)} />
                if (block?.blockType === 'call-to-action-one')
                    return <CallToActionOne key={index} {...(block as CallToActionOneProps)} />
                if (block?.blockType === 'call-to-action-two')
                    return <CallToActionTwo key={index} {...(block as CallToActionTwoProps)} />
                if (block?.blockType === 'contact-one')
                    return <ContactOne key={index} {...(block as ContactOneProps)} />
                if (block?.blockType === 'contact-two')
                    return <ContactTwo key={index} {...(block as ContactTwoProps)} />
                if (block?.blockType === 'faq-one')
                    return <FaqOne key={index} {...(block as FaqOneProps)} />
                if (block?.blockType === 'features-one')
                    return <FeaturesOne key={index} {...(block as FeaturesOneProps)} />
                if (block?.blockType === 'features-two')
                    return <FeaturesTwo key={index} {...(block as FeaturesTwoProps)} />
                if (block?.blockType === 'features-three')
                    return <FeaturesThree key={index} {...(block as FeaturesThreeProps)} />
                if (block?.blockType === 'features-four')
                    return <FeaturesFour key={index} {...(block as FeaturesFourProps)} />
                if (block?.blockType === 'form-one')
                    return <FormOne key={index} {...(block as FormOneProps)} />
                if (block?.blockType === 'gallery-one')
                    return <GalleryOne key={index} {...(block as GalleryOneProps)} />
                if (block?.blockType === 'gallery-two')
                    return <GalleryTwo key={index} {...(block as GalleryTwoProps)} />
                if (block?.blockType === 'hero-one')
                    return (
                        <HeroOne key={index} {...(block as HeroOneProps)} priority={index === 0} />
                    )
                if (block?.blockType === 'hero-two')
                    return <HeroTwo key={index} {...(block as HeroTwoProps)} />
                if (block?.blockType === 'hero-three')
                    return <HeroThree key={index} {...(block as HeroThreeProps)} />
                if (block?.blockType === 'hero-four')
                    return <HeroFour key={index} {...(block as HeroFourProps)} />
                if (block?.blockType === 'integration-one')
                    return <IntegrationOne key={index} {...(block as IntegrationOneProps)} />
                if (block?.blockType === 'pricing-one')
                    return <PricingOne key={index} {...(block as PricingOneProps)} />
                if (block?.blockType === 'products-one')
                    return (
                        <ProductsOne
                            key={index}
                            {...(block as ProductsOneProps)}
                            priority={index === 0}
                        />
                    )
                if (block?.blockType === 'query-one')
                    return <QueryOne key={index} {...(block as QueryOneProps)} />
                if (block?.blockType === 'query-two')
                    return <QueryTwo key={index} {...(block as QueryTwoProps)} />
                if (block?.blockType === 'query-three')
                    return <QueryThree key={index} {...(block as QueryThreeProps)} />
                if (block?.blockType === 'resources-one')
                    return <ResourcesOne key={index} {...(block as ResourcesOneProps)} />
                if (block?.blockType === 'services-one')
                    return <ServicesOne key={index} {...(block as ServicesOneProps)} />
                if (block?.blockType === 'stats-one')
                    return <StatsOne key={index} {...(block as StatsOneProps)} />
                if (block?.blockType === 'stats-two')
                    return <StatsTwo key={index} {...(block as StatsTwoProps)} />
                if (block?.blockType === 'tab-content-one')
                    return <TabContentOne key={index} {...(block as TabContentOneProps)} />
                if (block?.blockType === 'team-one')
                    return <TeamOne key={index} {...(block as TeamOneProps)} />
                if (block?.blockType === 'testimonials-one')
                    return <TestimonialsOne key={index} {...(block as TestimonialsOneProps)} />
                if (block?.blockType === 'timeline-one')
                    return <TimelineOne key={index} {...(block as TimelineOneProps)} />

                return (
                    <section
                        key={index}
                        className="container p-4 bg-card text-card-foreground border-2 border-border overflow-auto"
                    >
                        <code>
                            <pre>{JSON.stringify(block, null, 2)}</pre>
                        </code>
                    </section>
                )
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
