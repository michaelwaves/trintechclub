import './globals.css'
import type { Metadata } from 'next'
import { Luckiest_Guy, Nerko_One, Audiowide } from 'next/font/google'
import Providers from '@/providers/themeProvider'
import Header from '@/components/Header'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Trin Tech Club',
  description: "Trinity College's best tech club",
}

const luckiest = Luckiest_Guy({ subsets: ["latin"], weight: "400", variable: "--font-luckiest-guy" })
const nerko = Nerko_One({ subsets: ["latin"], weight: "400", variable: "--font-nerko-one" })
const audiowide = Audiowide({ subsets: ["latin"], weight: "400", variable: "--font-audiowide" })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${luckiest.variable} ${nerko.variable} ${audiowide.variable}`}>
        <Providers>
          <Header />
          {children}
          <CustomCursor />
        </Providers>
      </body>
    </html>
  )
}
