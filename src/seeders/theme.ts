import { getPayload } from 'payload'
import config from '@payload-config'
;(async () => {
    const payload = await getPayload({ config })

    const theme = await payload.updateGlobal({
        slug: 'theme',
        data: {
            primary: '#2dd4aa' /* Main teal green */,
            primaryForeground: '#fafafa' /* White text on primary */,

            secondary: '#f0fdf9' /* Very light teal */,
            secondaryForeground: '#1e5a42' /* Dark teal text */,

            /* Accent - Brighter teal for highlights */
            accent: '#22c493' /* Slightly darker teal */,
            accentForeground: '#fafafa' /* White text on accent */,

            /* Background colors */
            background: '#ffffff' /* Pure white */,
            foreground: '#1a202c' /* Very dark blue-gray */,

            /* Card backgrounds */
            card: '#ffffff' /* White cards */,
            cardForeground: '#1a202c' /* Dark text on cards */,

            /* Popover backgrounds */
            popover: '#ffffff' /* White popover */,
            popoverForeground: '#1a202c' /* Dark text on popover */,

            /* Border colors */
            border: '#e2e8f0' /* Light gray borders */,
            input: '#e2e8f0' /* Light gray input borders */,

            /* Ring/focus colors */
            ring: '#2dd4aa' /* Teal focus ring */,

            /* Muted colors for less prominent text */
            muted: '#f7fafc' /* Very light gray background */,
            mutedForeground: '#718096' /* Medium gray text */,

            /* Destructive/error colors */
            destructive: '#e53e3e' /* Red for errors */,

            /* Radius for rounded corners */
            radius: 0.5 /* 8px border radius */,
        },
    })

    console.table({ ...theme, id: undefined })

    process.exit(0)
})()
