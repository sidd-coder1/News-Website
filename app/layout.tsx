import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { ThemeProvider } from '../lib/theme-provider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PulsePress - Modern News',
  description: 'A modern, PWA-ready news platform',
  manifest: '/manifest.json'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container-page py-6">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
