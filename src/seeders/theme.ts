import { getPayload } from 'payload'
import config from '@payload-config'
;(async () => {
    const payload = await getPayload({ config })

    const theme = await payload.updateGlobal({
        slug: 'theme',
        data: {
            primary: '#4DB298',
            primaryForeground: '#F4FAF9',

            secondary: '#2C2C2E',
            secondaryForeground: '#C7CBD1',

            accent: '#F8F9FA',
            accentForeground: '#6C7381',

            background: '#FFFFFF',
            foreground: '#1A1A1A',

            card: '#F8F9FA',
            cardForeground: '#747B88',

            popover: '#F8F9FA',
            popoverForeground: '#747B88',

            border: '#EDEEF1',
            input: '#313131',

            ring: '#4DB298',

            muted: '#F8F9FA',
            mutedForeground: '#6C7381',

            destructive: '#e53e3e',

            radius: 0.375,
        },
    })

    console.table({ ...theme, id: undefined })

    process.exit(0)
})()
