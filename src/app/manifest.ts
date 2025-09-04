import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { arrayOrUndefined, objectOrUndefined, stringOrUndefined } from '@/lib/utils'
import { Category } from '@/payload-types'

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
        // file_handlers: {
        //     action: string,
        //     accept: {
        //         [mimeType: string]: string[],
        //     },
        // }[] | undefined,
        // icons: Icon[] | undefined,
        // id: string | undefined,
        // lang: string | undefined,
        // launch_handler: {
        //     client_mode: ClientModeEnum | ClientModeEnum[],
        // } | undefined,
        // name: string | undefined,
        // orientation: 'any' | 'natural' | 'landscape' | 'portrait' | 'portrait-primary' | 'portrait-secondary' | 'landscape-primary' | 'landscape-secondary' | undefined,
        // prefer_related_applications: boolean | undefined,
        // protocol_handlers: {
        //     protocol: string,
        //     url: string,
        // }[] | undefined,
        // related_applications: {
        //     platform: string,
        //     url: string,
        //     id: string | undefined,
        // }[] | undefined,
        // scope: string | undefined,
        // screenshots: {
        //     form_factor: 'narrow' | 'wide' | undefined,
        //     label: string | undefined,
        //     platform: 'android' | 'chromeos' | 'ipados' | 'ios' | 'kaios' | 'macos' | 'windows' | 'xbox' | 'chrome_web_store' | 'itunes' | 'microsoft-inbox' | 'microsoft-store' | 'play' | undefined,
        //     src: string,
        //     type: string | undefined,
        //     sizes: string | undefined,
        // }[] | undefined,
        // share_target: {
        //     action: string,
        //     method: 'get' | 'post' | 'GET' | 'POST' | undefined,
        //     enctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | undefined,
        //     params: {
        //         title: string | undefined,
        //         text: string | undefined,
        //         url: string | undefined,
        //         files: File | File[] | undefined,
        //     },
        // } | undefined,
        // short_name: string | undefined,
        // shortcuts: {
        //     name: string,
        //     short_name: string | undefined,
        //     description: string | undefined,
        //     url: string,
        //     icons: Icon[] | undefined,
        // }[] | undefined,
        // start_url: string | undefined,
        // theme_color: string | undefined,
    }) as MetadataRoute.Manifest
}
