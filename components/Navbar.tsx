"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun, Languages } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [lang, setLang] = useState<'en'|'es'|'fr'|'de'>('en')

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/70 backdrop-blur dark:bg-slate-950/70 dark:border-slate-800">
      <div className="container-page flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-lg">PulsePress</Link>
          <nav className="hidden md:flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <Link href="/admin" className="hover:text-foreground">Admin</Link>
            <Link href="/journalist" className="hover:text-foreground">Journalist</Link>
            <Link href="/leaderboard" className="hover:text-foreground">Leaderboard</Link>
            <Link href="/discussions" className="hover:text-foreground">Discussions</Link>
            <Link href="/submit" className="hover:text-foreground">Submit</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Language" className="btn btn-ghost px-2" onClick={() => setLang(l => l==='en'?'es': l==='es'?'fr': l==='fr'?'de':'en')}>
            <Languages className="h-5 w-5" />
            <span className="ml-1 uppercase">{lang}</span>
          </button>
          <button aria-label="Toggle theme" className="btn btn-ghost px-2" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? <Moon className="h-5 w-5"/> : <Sun className="h-5 w-5"/>}
          </button>
        </div>
      </div>
    </header>
  )
}
