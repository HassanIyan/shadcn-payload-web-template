import { getPayload } from 'payload'
import config from '@payload-config'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { Button } from '../ui/button'

export default async function header() {
    const payload = await getPayload({ config })
    const { header } = await payload.findGlobal({ slug: 'layout', select: { header: true } })
    const logo = header?.logo as Media
    const isSticky = header?.sticky
    const navigation = header?.menu?.navigation || null
    const alignment = header?.menu?.align
    const buttons = header?.buttons || null

    return (
        <header className={cn('shadow-md bg-background', isSticky && 'sticky top-0')}>
            <nav className="container py-2 flex gap-8">
                {logo && (
                    <Link href={'/'}>
                        <Image
                            src={logo?.url as string}
                            width={logo?.width as number}
                            height={logo?.height as number}
                            alt={logo?.alt}
                            className="max-w-20 hover:scale-120 transition-all"
                        />
                    </Link>
                )}
                {navigation && (
                    <ul
                        className={cn(
                            'flex gap-8 items-center flex-1',
                            alignment === 'left' && 'justify-start',
                            alignment === 'center' && 'justify-center',
                            alignment === 'right' && 'justify-end',
                        )}
                    >
                        {navigation?.map(({ id, label, url }) => (
                            <li key={id}>
                                <Link href={url as string}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {buttons && (
                    <ul className="flex items-center">
                        {buttons?.map(({ id, label, url }) => (
                            <li key={id}>
                                <Button asChild>
                                    <Link href={url as string}>{label}</Link>
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    )
}
