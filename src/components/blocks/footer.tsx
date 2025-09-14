import { getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

export default async function Footer() {
    const payload = await getPayload({ config })
    const { footer } = await payload.findGlobal({ slug: 'layout', select: { footer: true } })
    const logo = footer?.logo as Media
    const socialMedia = footer?.social_media || []
    const menus = footer?.menus || []
    const navigations = footer?.navigations || []

    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="container py-14 grid gap-8 lg:grid-cols-4">
                <div>
                    {logo && (
                        <Link href={'/'}>
                            <Image
                                src={logo?.url as string}
                                width={logo?.width as number}
                                height={logo?.height as number}
                                alt={logo?.alt}
                                className="max-w-20 hover:scale-120 transition-all mb-8"
                            />
                        </Link>
                    )}
                    {footer?.description && <p className="mb-6">{footer?.description}</p>}
                    {socialMedia?.length > 0 && (
                        <ul className="flex items-center gap-6 flex-wrap">
                            {socialMedia?.map(({ id, icon, url }) => {
                                // @ts-expect-error: icon is not typed
                                const Icon = dynamic(dynamicIconImports[icon])

                                return (
                                    <li key={id}>
                                        <Link href={url as string}>
                                            {/* @ts-expect-error: this component is not typed */}
                                            <Icon size={20} />
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </div>
                {menus?.map(({ id, title, navigations }) => (
                    <div key={id}>
                        <h6 className="text-white font-bold text-xl mb-6">{title}</h6>
                        <ul>
                            {navigations?.map(({ id, title, url, icon }) => {
                                // @ts-expect-error: not typed
                                const Icon = dynamic(dynamicIconImports[icon])

                                return (
                                    <li
                                        key={id}
                                        className="mb-4 flex items-start justify-start gap-4"
                                    >
                                        {/* @ts-expect-error: this component is not typed */}
                                        <Icon size={16} className="text-primary mt-1" />
                                        <Link href={url as string} className="hover:opacity-75">
                                            {title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="border-t border-t-white/20 opacity-75">
                <div className="container py-6 flex items-center justify-between gap-4 lg:gap-8 flex-col lg:flex-row">
                    <ul className="flex items-center gap-6 flex-wrap lg:order-2">
                        {navigations?.map(({ id, title, url }) => {
                            return (
                                <li key={id}>
                                    <Link href={url as string} className="hover:opacity-75">
                                        {title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    {footer?.copy_right && (
                        <p className="text-center lg:text-left lg:order-1">{footer?.copy_right}</p>
                    )}
                </div>
            </div>
        </footer>
    )
}
