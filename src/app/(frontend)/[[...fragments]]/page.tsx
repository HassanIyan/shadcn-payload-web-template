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
                if (block?.blockType === 'about-two') return <AboutTwo key={index} />
                if (block?.blockType === 'about-three') return <AboutThree key={index} />
                if (block?.blockType === 'call-to-action-one')
                    return <CallToActionOne {...(block as CallToActionOneProps)} key={index} />
                if (block?.blockType === 'call-to-action-two')
                    return <CallToActionTwo key={index} />
                if (block?.blockType === 'contact-one') return <ContactOne key={index} />
                if (block?.blockType === 'contact-two') return <ContactTwo key={index} />
                if (block?.blockType === 'faq-one') return <FaqOne key={index} />
                if (block?.blockType === 'features-one')
                    return <FeaturesOne {...(block as FeaturesOneProps)} key={index} />
                if (block?.blockType === 'features-two') return <FeaturesTwo key={index} />
                if (block?.blockType === 'features-three') return <FeaturesThree key={index} />
                if (block?.blockType === 'features-four') return <FeaturesFour key={index} />
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
                if (block?.blockType === 'products-one')
                    return (
                        <ProductsOne
                            {...(block as ProductsOneProps)}
                            key={index}
                            priority={index === 0}
                        />
                    )
                if (block?.blockType === 'query-one') return <QueryOne key={index} />
                if (block?.blockType === 'query-two') return <QueryTwo key={index} />
                if (block?.blockType === 'query-three') return <QueryThree key={index} />
                if (block?.blockType === 'resources-one') return <ResourcesOne key={index} />
                if (block?.blockType === 'services-one') return <ServicesOne key={index} />
                if (block?.blockType === 'stats-one') return <StatsOne key={index} />
                if (block?.blockType === 'stats-two') return <StatsTwo key={index} />
                if (block?.blockType === 'tab-content-one') return <TabContentOne key={index} />
                if (block?.blockType === 'team-one') return <TeamOne key={index} />
                if (block?.blockType === 'testimonials-one')
                    return <TestimonialsOne {...(block as TestimonialsOneProps)} key={index} />
                if (block?.blockType === 'timeline-one') return <TimelineOne key={index} />

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
