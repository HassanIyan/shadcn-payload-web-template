import { Metadatum } from '@/payload-types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Media, Tag, User } from '@/payload-types'
import { Facebook, ItunesApp } from 'next/dist/lib/metadata/types/extra-types'
import { Author, Icon } from 'next/dist/lib/metadata/types/metadata-types'
import { Metadata } from 'next'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function stringOrUndefined(value: string | undefined | null) {
    if (value?.toString()?.trim()?.length === 0) return undefined
    if (value === null) return undefined
    return value
}

export function numberOrUndefined(value: number | undefined | null) {
    if (value === null) return undefined
    return value
}

export function urlOrUndefined(value: string | undefined | null): URL | undefined {
    if (value?.toString()?.trim()?.length === 0) return undefined
    if (value === null || value === undefined) return undefined
    return new URL(value)
}

export function objectOrUndefined(value: { [name: string]: unknown } | undefined | null) {
    if (!value || typeof value !== 'object') return undefined

    const cleaned: { [name: string]: unknown } = {}
    let hasValidFields = false

    for (const key in value) {
        const val = value[key]
        if (val != null) {
            // Checks both null and undefined
            cleaned[key] = val
            hasValidFields = true
        }
    }

    return hasValidFields ? cleaned : undefined
}

export function arrayOrUndefined(
    value: (string | undefined | null | number | unknown)[] | undefined | null,
) {
    if (value === null) return undefined
    if (value?.length === 0) return undefined
    return value
}

export function booleanOrUndefined(value: boolean | undefined | null) {
    if (value === null) return undefined
    return value
}

export function ObjectifyMetaData(meta: Metadatum): Metadata {
    // @ts-expect-error: not typed
    return objectOrUndefined({
        abstract: stringOrUndefined(meta?.abstract),
        alternates: objectOrUndefined({
            canonical: stringOrUndefined(meta.alternates?.canonical),
            languages: objectOrUndefined(
                Object.assign(
                    {},
                    ...(meta.alternates?.languages?.map(({ language, url }) => ({
                        [String(language)]: stringOrUndefined(url),
                    })) || []),
                ),
            ),
            media: objectOrUndefined(
                Object.assign(
                    {},
                    ...(meta.alternates?.media?.map(({ url, medium }) => ({
                        [String(medium)]: stringOrUndefined(url),
                    })) || []),
                ),
            ),
            types: objectOrUndefined(
                Object.assign(
                    {},
                    ...(meta.alternates?.types?.map(({ url, type }) => ({
                        [String(type)]: stringOrUndefined(url),
                    })) || []),
                ),
            ),
        }),
        appLinks: objectOrUndefined({
            android: arrayOrUndefined(
                meta?.appLinks?.android?.map(
                    ({ app_name, class: className, package: packageName, url }) =>
                        objectOrUndefined({
                            app_name: stringOrUndefined(app_name),
                            class: stringOrUndefined(className),
                            package: stringOrUndefined(packageName),
                            url: stringOrUndefined(url),
                        }),
                ),
            ),
            ios: arrayOrUndefined(
                meta?.appLinks?.ios?.map(({ app_name, app_store_id, url }) =>
                    objectOrUndefined({
                        app_name: stringOrUndefined(app_name),
                        app_store_id: stringOrUndefined(app_store_id),
                        url: stringOrUndefined(url),
                    }),
                ),
            ),
            ipad: arrayOrUndefined(
                meta?.appLinks?.ipad?.map(({ app_name, app_store_id, url }) =>
                    objectOrUndefined({
                        app_name: stringOrUndefined(app_name),
                        app_store_id: stringOrUndefined(app_store_id),
                        url: stringOrUndefined(url),
                    }),
                ),
            ),
            iphone: arrayOrUndefined(
                meta?.appLinks?.iphone?.map(({ app_name, app_store_id, url }) =>
                    objectOrUndefined({
                        app_name: stringOrUndefined(app_name),
                        app_store_id: stringOrUndefined(app_store_id),
                        url: stringOrUndefined(url),
                    }),
                ),
            ),
            web: arrayOrUndefined(
                meta?.appLinks?.web?.map(({ should_fallback, url }) =>
                    objectOrUndefined({
                        should_fallback: booleanOrUndefined(should_fallback),
                        url: stringOrUndefined(url),
                    }),
                ),
            ),
            windows: arrayOrUndefined(
                meta?.appLinks?.windows?.map(({ app_id, app_name, url }) =>
                    objectOrUndefined({
                        app_id: stringOrUndefined(app_id),
                        app_name: stringOrUndefined(app_name),
                        url: stringOrUndefined(url),
                    }),
                ),
            ),
            windows_phone: arrayOrUndefined(
                meta?.appLinks?.windows_phone?.map(({ app_id, app_name, url }) =>
                    objectOrUndefined({
                        app_id: stringOrUndefined(app_id),
                        app_name: stringOrUndefined(app_name),
                        url: stringOrUndefined(url),
                    }),
                ),
            ),
            windows_universal: arrayOrUndefined(
                meta?.appLinks?.windows_universal?.map(({ app_id, app_name, url }) =>
                    objectOrUndefined({
                        app_id: stringOrUndefined(app_id),
                        app_name: stringOrUndefined(app_name),
                        url: stringOrUndefined(url),
                    }),
                ),
            ),
        }),
        appleWebApp: objectOrUndefined({
            capable: booleanOrUndefined(meta?.appleWebApp?.capable),
            startupImage: arrayOrUndefined(
                (meta?.appleWebApp?.startupImage as Media[])?.map((media) =>
                    objectOrUndefined({
                        media: stringOrUndefined(media?.mimeType),
                        url: stringOrUndefined(media?.url),
                    }),
                ),
            ),
            statusBarStyle: stringOrUndefined(meta?.appleWebApp?.statusBarStyle),
            title: stringOrUndefined(meta?.appleWebApp?.title),
        }),
        applicationName: stringOrUndefined(meta?.applicationName),
        archives: arrayOrUndefined(
            meta?.archives?.map(({ archive }) => stringOrUndefined(archive)),
        ) as string[],
        assets: arrayOrUndefined(
            meta?.assets?.map(({ asset }) => stringOrUndefined(asset)),
        ) as string[],
        authors: arrayOrUndefined(
            (meta?.authors as User[])?.map((user) =>
                objectOrUndefined({ name: user.name, url: `/author/${user.id}` }),
            ),
        ) as Author[],
        bookmarks: arrayOrUndefined(
            meta?.bookmarks?.map(({ bookmark }) => stringOrUndefined(bookmark)),
        ) as string[],
        category: stringOrUndefined(meta?.category),
        classification: stringOrUndefined(meta?.classification),
        creator: stringOrUndefined(meta?.creator),
        description: stringOrUndefined(meta?.description),
        facebook: objectOrUndefined({
            admins: arrayOrUndefined(
                meta.facebook?.admins?.map(({ admin }) => stringOrUndefined(admin)),
            ),
            appId: stringOrUndefined(meta.facebook?.appId),
        }) as Facebook,
        formatDetection: objectOrUndefined({
            telephone: booleanOrUndefined(meta?.formatDetection?.telephone),
            date: booleanOrUndefined(meta?.formatDetection?.date),
            address: booleanOrUndefined(meta?.formatDetection?.address),
            email: booleanOrUndefined(meta?.formatDetection?.email),
            url: booleanOrUndefined(meta?.formatDetection?.url),
        }),
        generator: stringOrUndefined(meta?.generator),
        icons: arrayOrUndefined((meta?.icons as Media[])?.map(({ url }) => url)) as Icon[],
        itunes: objectOrUndefined({
            appId: stringOrUndefined(meta?.itunes?.appId),
            appArgument: stringOrUndefined(meta?.itunes?.appArgument),
        }) as ItunesApp,
        keywords: arrayOrUndefined(
            (meta?.keywords as Tag[])?.map(({ name }) => stringOrUndefined(name)),
        ) as string[],
        manifest: stringOrUndefined(meta?.manifest),
        metadataBase: urlOrUndefined(meta?.metadataBase),
        openGraph: objectOrUndefined({
            determiner: stringOrUndefined(meta?.openGraph?.[0]?.determiner),
            title: objectOrUndefined({
                absolute: stringOrUndefined(meta?.openGraph?.[0]?.title?.absolute),
                default: stringOrUndefined(meta?.openGraph?.[0]?.title?.default),
                template: stringOrUndefined(meta?.openGraph?.[0]?.title?.template),
            }),
            description: stringOrUndefined(meta?.openGraph?.[0]?.description),
            emails: arrayOrUndefined(
                meta?.openGraph?.[0]?.emails?.map(({ email }) => stringOrUndefined(email)),
            ),
            phoneNumbers: arrayOrUndefined(
                meta?.openGraph?.[0]?.phoneNumbers?.map(({ phone_number }) =>
                    stringOrUndefined(phone_number),
                ),
            ),
            faxNumbers: arrayOrUndefined(
                meta?.openGraph?.[0]?.faxNumbers?.map(({ fax_number }) =>
                    stringOrUndefined(fax_number),
                ),
            ),
            siteName: stringOrUndefined(meta?.openGraph?.[0]?.siteName),
            locale: stringOrUndefined(meta?.openGraph?.[0]?.locale),
            alternateLocale: arrayOrUndefined(
                meta?.openGraph?.[0]?.alternateLocale?.map(({ alternate_locale }) =>
                    stringOrUndefined(alternate_locale),
                ),
            ),
            images: arrayOrUndefined(
                (meta?.openGraph?.[0]?.images as Media[])?.map((media) => ({
                    url: stringOrUndefined(media.url),
                    secureUrl: stringOrUndefined(media.url),
                    alt: stringOrUndefined(media.alt),
                    type: stringOrUndefined(media.mimeType),
                    width: numberOrUndefined(media.width),
                    height: numberOrUndefined(media.height),
                })),
            ),
            audio: arrayOrUndefined(
                (meta?.openGraph?.[0]?.audio as Media[])?.map((media) => ({
                    url: stringOrUndefined(media.url),
                    secureUrl: stringOrUndefined(media.url),
                    type: stringOrUndefined(media.mimeType),
                })),
            ),
            videos: arrayOrUndefined(
                (meta?.openGraph?.[0]?.videos as Media[])?.map((media) => ({
                    url: stringOrUndefined(media.url),
                    secureUrl: stringOrUndefined(media.url),
                    type: stringOrUndefined(media.mimeType),
                    width: numberOrUndefined(media.width),
                    height: numberOrUndefined(media.height),
                })),
            ),
            url: stringOrUndefined(meta?.openGraph?.[0]?.url),
            countryName: stringOrUndefined(meta?.openGraph?.[0]?.countryName),
            ttl: numberOrUndefined(meta?.openGraph?.[0]?.ttl),
            // @ts-expect-error: might not exist
            type: stringOrUndefined(meta?.openGraph?.[0]?.type),
            // @ts-expect-error: might not exist
            publishedTime: stringOrUndefined(meta?.openGraph?.[0]?.publishedTime),
            // @ts-expect-error: might not exist
            modifiedTime: stringOrUndefined(meta?.openGraph?.[0]?.modifiedTime),
            // @ts-expect-error: might not exist
            expirationTime: stringOrUndefined(meta?.openGraph?.[0]?.expirationTime),
            authors: arrayOrUndefined(
                // @ts-expect-error: might not exist
                (meta?.openGraph?.[0]?.authors as User[])?.map(({ id }) => `/author/${id}`),
            ),
            tags: arrayOrUndefined(
                // @ts-expect-error: might not exist
                (meta?.openGraph?.[0]?.tags as Tag[])?.map(({ name }) => stringOrUndefined(name)),
            ) as string[],
            // @ts-expect-error: might not exist
            section: stringOrUndefined(meta?.openGraph?.[0]?.section),
            // @ts-expect-error: might not exist
            isbn: stringOrUndefined(meta?.openGraph?.[0]?.isbn),
            // @ts-expect-error: might not exist
            releaseDate: null | stringOrUndefined(meta?.openGraph?.[0]?.releaseDate),
            // @ts-expect-error: might not exist
            firstName: stringOrUndefined(meta?.openGraph?.[0]?.firstName),
            // @ts-expect-error: might not exist
            lastName: stringOrUndefined(meta?.openGraph?.[0]?.lastName),
            // @ts-expect-error: might not exist
            username: stringOrUndefined(meta?.openGraph?.[0]?.username),
            // @ts-expect-error: might not exist
            gender: stringOrUndefined(meta?.openGraph?.[0]?.gender),
            // @ts-expect-error: might not exist
            duration: numberOrUndefined(meta?.openGraph?.[0]?.duration),
            albums: arrayOrUndefined(
                // @ts-expect-error: might not exist
                meta?.openGraph?.[0]?.albums?.map((album) => stringOrUndefined(album)),
            ),
            musicians: arrayOrUndefined(
                // @ts-expect-error: might not exist
                meta?.openGraph?.[0]?.musicians?.map((album) => stringOrUndefined(album)),
            ),
            songs: arrayOrUndefined(
                // @ts-expect-error: might not exist
                meta?.openGraph?.[0]?.songs?.map((album) => stringOrUndefined(album)),
            ),
            creators: arrayOrUndefined(
                // @ts-expect-error: might not exist
                meta?.openGraph?.[0]?.creators?.map((album) => stringOrUndefined(album)),
            ),
            actors: arrayOrUndefined(
                // @ts-expect-error: might not exist
                meta?.openGraph?.[0]?.actors?.map((album) => stringOrUndefined(album)),
            ),
            directors: arrayOrUndefined(
                // @ts-expect-error: might not exist
                meta?.openGraph?.[0]?.directors?.map((album) => stringOrUndefined(album)),
            ),
            writers: arrayOrUndefined(
                // @ts-expect-error: might not exist
                meta?.openGraph?.[0]?.writers?.map((album) => stringOrUndefined(album)),
            ),
            // @ts-expect-error: this might not be there
            series: stringOrUndefined(meta?.openGraph?.[0]?.series),
            // @ts-expect-error: this might not be there
            releaseDate: stringOrUndefined(meta?.openGraph?.[0]?.releaseDate),
        }),
        // @ts-expect-error: not fully typed
        other: objectOrUndefined(meta?.other),
        pagination: objectOrUndefined({
            previous: stringOrUndefined(meta?.pagination?.previous),
            next: stringOrUndefined(meta?.pagination?.next),
        }),
        pinterest: objectOrUndefined({
            richPin: stringOrUndefined(meta?.pinterest?.richPin),
        }),
        publisher: stringOrUndefined(meta?.publisher),
        referrer: stringOrUndefined(meta?.referrer),
        robots: stringOrUndefined(meta?.robots),
        title: objectOrUndefined({
            absolute: stringOrUndefined(meta?.title?.absolute),
            default: stringOrUndefined(meta?.title?.default),
            template: stringOrUndefined(meta?.title?.template),
        }),
        twitter: objectOrUndefined({
            site: stringOrUndefined(meta?.twitter?.[0]?.site),
            siteId: stringOrUndefined(meta?.twitter?.[0]?.siteId),
            creator: stringOrUndefined(meta?.twitter?.[0]?.creator),
            creatorId: stringOrUndefined(meta?.twitter?.[0]?.creatorId),
            description: stringOrUndefined(meta?.twitter?.[0]?.description),
            title: objectOrUndefined({
                absolute: stringOrUndefined(meta?.twitter?.[0]?.title?.absolute),
                default: stringOrUndefined(meta?.twitter?.[0]?.title?.default),
                // @ts-expect-error: not fully typed
                template: stringOrUndefined(meta?.twitter?.[0]?.template),
            }),
            images: arrayOrUndefined(
                (meta?.twitter?.[0]?.images as Media[])?.map((media) => ({
                    url: stringOrUndefined(media?.url),
                    alt: stringOrUndefined(media?.alt),
                    secureUrl: stringOrUndefined(media?.url),
                    type: stringOrUndefined(media?.mimeType),
                    width: numberOrUndefined(media?.width),
                    height: numberOrUndefined(media?.height),
                })),
            ),
            // @ts-expect-error: not fully typed
            card: stringOrUndefined(meta?.twitter?.[0]?.card),
            players: arrayOrUndefined(
                // @ts-expect-error: not fully typed
                meta?.twitter?.[0]?.players?.map((player) => ({
                    playerUrl: stringOrUndefined(player?.playerUrl),
                    streamUrl: stringOrUndefined(player?.streamUrl),
                    width: numberOrUndefined(player?.width),
                    height: numberOrUndefined(player?.height),
                })),
            ),
            app: objectOrUndefined({
                id: objectOrUndefined({
                    // @ts-expect-error: not fully typed
                    iphone: stringOrUndefined(meta?.twitter?.[0]?.app?.id?.iphone),
                    // @ts-expect-error: not fully typed
                    ipad: stringOrUndefined(meta?.twitter?.[0]?.app?.id?.ipad),
                    googleplay: stringOrUndefined(
                        // @ts-expect-error: not fully typed
                        meta?.twitter?.[0]?.app?.id?.googleplay,
                    ),
                }),
                url: objectOrUndefined({
                    // @ts-expect-error: not fully typed
                    iphone: stringOrUndefined(meta?.twitter?.[0]?.app?.url?.iphone),
                    // @ts-expect-error: not fully typed
                    ipad: stringOrUndefined(meta?.twitter?.[0]?.app?.url?.ipad),
                    googleplay: stringOrUndefined(
                        // @ts-expect-error: not fully typed
                        meta?.twitter?.[0]?.app?.url?.googleplay,
                    ),
                }),
                // @ts-expect-error: not fully typed
                name: stringOrUndefined(meta?.twitter?.[0]?.app?.name),
            }),
        }),
        verification: objectOrUndefined({
            google: arrayOrUndefined(
                meta?.verification?.google?.map(({ value }) => stringOrUndefined(value)),
            ),
            yahoo: arrayOrUndefined(
                meta?.verification?.yahoo?.map(({ value }) => stringOrUndefined(value)),
            ),
            yandex: arrayOrUndefined(
                meta?.verification?.yandex?.map(({ value }) => stringOrUndefined(value)),
            ),
            me: arrayOrUndefined(
                meta?.verification?.me?.map(({ value }) => stringOrUndefined(value)),
            ),
            // @ts-expect-error: not fully typed
            other: objectOrUndefined(meta?.verification?.other),
        }),
    })
}
