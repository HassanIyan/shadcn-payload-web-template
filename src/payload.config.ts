import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Tags } from './collections/Tags'
import { Metadata } from './globals/Metadata'
import { Robots } from './globals/Robots'
import { Manifest } from './globals/Manifest'
import { Sitemap } from './globals/Sitemap'
import { Categories } from './collections/Categories'
import { Theme } from './globals/Theme'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'
import { Events } from './collections/Events'
import { Downloads } from './collections/Downloads'
import { Layout } from './globals/Layout'
import { FormSubmissions } from './collections/FormSubmissions'
import { Forms } from './collections/Forms'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [
        Posts,
        Events,
        Downloads,
        Tags,
        Categories,
        Forms,
        FormSubmissions,
        Pages,
        Media,
        Users,
    ],
    globals: [Metadata, Robots, Manifest, Sitemap, Theme, Layout],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    sharp,
    plugins: [
        payloadCloudPlugin(),
        vercelBlobStorage({
            enabled: process.env.BLOB_READ_WRITE_TOKEN ? true : false,
            collections: {
                media: true,
            },
            token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
    ],
})
