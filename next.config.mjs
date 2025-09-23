import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
    webpack: (webpackConfig) => {
        webpackConfig.resolve.extensionAlias = {
            '.cjs': ['.cts', '.cjs'],
            '.js': ['.ts', '.tsx', '.js', '.jsx'],
            '.mjs': ['.mts', '.mjs'],
        }

        return webpackConfig
    },
    turbopack: {
        rules: {
            '.cjs': ['.cts', '.cjs'],
            '.js': ['.ts', '.tsx', '.js', '.jsx'],
            '.mjs': ['.mts', '.mjs'],
        },
    },
    images: {
        remotePatterns: [new URL('https://ahmadhiyya-edu-mv.vercel.app/**')],
    },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
