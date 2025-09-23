import { getPayload } from 'payload'
import config from '@payload-config'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'

export default async function header() {
    const payload = await getPayload({ config })
    const { header } = await payload.findGlobal({ slug: 'layout', select: { header: true } })
    const logo = header?.logo as Media
    const isSticky = header?.sticky
    const navigation = header?.menu?.navigation || null
    const alignment = header?.menu?.align
    const buttons = header?.buttons || null

    return (
        <header className={cn('shadow-md bg-background z-10', isSticky && 'sticky top-0')}>
            <nav className="container py-2 flex gap-8 items-center">
                {logo && (
                    <Link href={'/'}>
                        <Image
                            src={logo?.url as string}
                            width={logo?.width as number}
                            height={logo?.height as number}
                            alt={logo?.alt}
                            priority
                            className="max-w-20 hover:scale-105 transition-all"
                        />
                    </Link>
                )}
                {navigation && (
                    <ul
                        className={cn(
                            'hidden lg:flex gap-8 items-center flex-1',
                            alignment === 'left' && 'justify-start',
                            alignment === 'center' && 'justify-center',
                            alignment === 'right' && 'justify-end',
                        )}
                    >
                        {navigation?.map(({ id, label, url }) => (
                            <li key={id}>
                                <Link
                                    className="hover:underline hover:text-primary"
                                    href={url as string}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                {buttons && (
                    <ul className="hidden lg:flex items-center">
                        {buttons?.map(({ id, label, url }) => (
                            <li key={id}>
                                <Button asChild>
                                    <Link href={url as string}>{label}</Link>
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 ms-auto hover:bg-transparent hover:text-primary lg:hidden"
                        >
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle> </SheetTitle>
                        </SheetHeader>
                        {navigation && (
                            <ul className={cn('grid flex-1 auto-rows-min gap-6 px-4')}>
                                {navigation?.map(({ id, label, url }) => (
                                    <li key={id}>
                                        <Link href={url as string}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <SheetFooter>
                            {buttons?.map(({ id, label, url }) => (
                                <Button key={id} asChild>
                                    <Link href={url as string}>{label}</Link>
                                </Button>
                            ))}
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    )
}
