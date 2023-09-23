"use client"

import { ThemeProvider } from 'next-themes'
import { CursorProvider } from './cursorProvider'

function Providers({ children }: any) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <CursorProvider>
                {children}
            </CursorProvider>
        </ThemeProvider>
    )
}

export default Providers