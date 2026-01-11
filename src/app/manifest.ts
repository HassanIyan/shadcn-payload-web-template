import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import {
    arrayOrUndefined,
    booleanOrUndefined,
    objectOrUndefined,
    stringOrUndefined,
} from '@/lib/utils'
import { Category, Media } from '@/payload-types'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
    const payload = await getPayload({ config })
    const manifest = await payload.findGlobal({ slug: 'manifest' })

    return objectOrUndefined({
        background_color: stringOrUndefined(manifest.background_color),
        categories: arrayOrUndefined(
            (manifest?.categories as Category[])?.map(({ name }) => stringOrUndefined(name)),
        ),
        description: stringOrUndefined(manifest.description),
        dir: stringOrUndefined(manifest.dir),
        display: stringOrUndefined(manifest.display),
        display_override: arrayOrUndefined(
            manifest.display_override?.map(({ override }) => stringOrUndefined(override)),
        ),
        file_handlers: arrayOrUndefined(
            manifest?.file_handlers?.map((file_handler) => ({
                action: stringOrUndefined(file_handler.action),
                accept: objectOrUndefined(
                    Object.assign(
                        {},
                        ...(file_handler?.accept?.map((accept) => ({
                            [accept.mimeType || '']: stringOrUndefined(accept.value),
                        })) || []),
                    ),
                ),
            })),
        ),
        icons: arrayOrUndefined(
            (manifest?.icons as Media[])?.map((icon) =>
                objectOrUndefined({
                    src: stringOrUndefined(icon.url),
                    type: stringOrUndefined(icon.mimeType),
                }),
            ),
        ),
        id: stringOrUndefined(manifest?.id?.toString()),
        lang: stringOrUndefined(manifest?.lang),
        launch_handler: objectOrUndefined({
            client_mode: arrayOrUndefined(
                manifest?.launch_handler?.client_mode?.map((client_mode) =>
                    stringOrUndefined(client_mode),
                ),
            ),
        }),
        name: stringOrUndefined(manifest?.name),
        orientation: stringOrUndefined(manifest?.orientation),
        prefer_related_applications: booleanOrUndefined(manifest?.prefer_related_applications),
        protocol_handlers: arrayOrUndefined(
            manifest?.protocol_handlers?.map((protocol_handler) => ({
                protocol: stringOrUndefined(protocol_handler?.protocol),
                url: stringOrUndefined(protocol_handler?.url),
            })),
        ),
        related_applications: arrayOrUndefined(
            manifest?.related_applications?.map((related_application) =>
                objectOrUndefined({
                    platform: stringOrUndefined(related_application?.platform),
                    url: stringOrUndefined(related_application?.url),
                    id: stringOrUndefined(related_application?.id),
                }),
            ),
        ),
        scope: stringOrUndefined(manifest?.scope),
        screenshots: arrayOrUndefined(
            (manifest?.screenshots as Media[])?.map((screenshot) =>
                objectOrUndefined({
                    src: stringOrUndefined(screenshot?.url),
                    type: stringOrUndefined(screenshot?.mimeType),
                }),
            ),
        ),
        share_target: objectOrUndefined({
            action: stringOrUndefined(manifest.share_target?.action),
            method: stringOrUndefined(manifest.share_target?.method),
            enctype: stringOrUndefined(manifest.share_target?.enctype),
            params: objectOrUndefined({
                title: stringOrUndefined(manifest?.share_target?.params?.title),
                text: stringOrUndefined(manifest?.share_target?.params?.text),
                url: stringOrUndefined(manifest?.share_target?.params?.url),
                files: arrayOrUndefined(
                    (manifest?.share_target?.params?.files as Media[])?.map((file) =>
                        arrayOrUndefined({
                            // @ts-expect-error: not typed well
                            name: stringOrUndefined(file?.filename),
                            accept: stringOrUndefined(file?.mimeType),
                        }),
                    ),
                ),
            }),
        }),
        short_name: stringOrUndefined(manifest?.short_name),
        shortcuts: arrayOrUndefined(
            manifest?.shortcuts?.map((shortcut) =>
                objectOrUndefined({
                    name: stringOrUndefined(shortcut.name),
                    short_name: stringOrUndefined(shortcut.short_name),
                    description: stringOrUndefined(shortcut.description),
                    url: stringOrUndefined(shortcut.url),
                    icons: arrayOrUndefined(
                        (shortcut?.icons as Media[])?.map((icon) => ({
                            src: stringOrUndefined(icon?.url),
                            type: stringOrUndefined(icon?.mimeType),
                        })),
                    ),
                }),
            ),
        ),
        start_url: stringOrUndefined(manifest?.start_url),
        theme_color: stringOrUndefined(manifest?.theme_color),
    }) as MetadataRoute.Manifest
}

export const dynamic = 'force-dynamic'
