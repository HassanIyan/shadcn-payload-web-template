'use client'

import React, { FC, useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { StyleRegistry, createStyleRegistry } from 'styled-jsx'

export default function StyledJsxRegistry({ children }: { children: React.ReactNode }) {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [jsxStyleRegistry] = useState(() => createStyleRegistry())

    useServerInsertedHTML(() => {
        const styles = jsxStyleRegistry.styles()
        jsxStyleRegistry.flush()
        return <>{styles}</>
    })

    return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
}

export const CssVariablesClient: FC<{
    colors?: {
        radius?: number | null
        background?: string | null
        foreground?: string | null
        primary?: string | null
        primaryForeground?: string | null
        secondary?: string | null
        secondaryForeground?: string | null
        muted?: string | null
        mutedForeground?: string | null
        card?: string | null
        cardForeground?: string | null
        accent?: string | null
        accentForeground?: string | null
        border?: string | null
        ring?: string | null
        popover?: string | null
    } | null
}> = ({ colors }) => {
    return (
        <style jsx global>{`
            :root {
                --radius: ${colors?.radius || '0'}rem;
                --background: ${colors?.background || 'transparent'};
                --foreground: ${colors?.foreground || 'transparent'};
                --border: ${colors?.border || 'transparent'};
                --card: ${colors?.card || 'transparent'};
                --card-foreground: ${colors?.cardForeground || 'transparent'};
                --primary: ${colors?.primary || 'transparent'};
                --primary-foreground: ${colors?.primaryForeground || 'transparent'};
                --secondary: ${colors?.secondary || 'transparent'};
                --secondary-foreground: ${colors?.secondaryForeground || 'transparent'};
                --muted: ${colors?.muted || 'transparent'};
                --muted-foreground: ${colors?.mutedForeground || 'transparent'};
                --accent: ${colors?.accent || 'transparent'};
                --accent-foreground: ${colors?.accentForeground || 'transparent'};
                --ring: ${colors?.ring || 'transparent'};
                --popover: ${colors?.popover || 'transparent'};
            }
        `}</style>
    )
}
