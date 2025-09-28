"use client"
import { useState } from 'react'
import { Bookmark, Volume2 } from 'lucide-react'
import Link from 'next/link'

function speak(text: string){
  if(typeof window === 'undefined') return
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'en-US'
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(u)
}

export default function ArticleCard({ article }: { article: any }){
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <article className="card overflow-hidden">
      <Link href={`/article/${article.id}`}>
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover"/>
      </Link>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="badge">{article.category}</span>
          {article.factChecked && <span className="badge bg-green-100 text-green-700">Fact-checked</span>}
        </div>
        <h3 className="font-semibold text-lg leading-tight">
          <Link href={`/article/${article.id}`} className="hover:underline">
            {article.title}
          </Link>
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{article.summary}</p>
        <div className="flex items-center justify-between text-sm text-slate-500">
          <div>
            By {article.author} • {new Date(article.timestamp).toLocaleString()}
          </div>
          <div className="flex items-center gap-2">
            <button className="btn btn-ghost px-2" aria-label="Read aloud" onClick={()=>speak(`${article.title}. ${article.summary}`)}>
              <Volume2 className="w-5 h-5"/>
            </button>
            <button className="btn btn-ghost px-2" aria-label="Bookmark" onClick={()=>setBookmarked(b=>!b)}>
              <Bookmark className={`w-5 h-5 ${bookmarked? 'fill-current text-primary':''}`}/>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
