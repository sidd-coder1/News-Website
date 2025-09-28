"use client"
import { useEffect, useRef, useState } from 'react'
import ArticleCard from './ArticleCard'
import CategoryTabs from './CategoryTabs'

const categories = ['All', 'Politics', 'Business', 'Tech', 'Sports', 'Health', 'World']

function mockItems(page: number) {
  return Array.from({ length: 6 }, (_, i) => ({
    id: `a-${page}-${i}`,
    title: `Breaking News Headline ${page}-${i}`,
    category: categories[(i % (categories.length-1)) + 1],
    author: ['Alex Kim','Riya Sen','John Doe','Maria Silva'][i%4],
    image: `https://picsum.photos/seed/${page}-${i}/600/400`,
    timestamp: new Date(Date.now() - (i+page)*3600_000).toISOString(),
    factChecked: Math.random() > 0.5,
    summary: 'Concise summary of the article to entice the reader with key facts.',
  }))
}

export default function Feed(){
  const [page, setPage] = useState(1)
  const [items, setItems] = useState(() => mockItems(1))
  const [active, setActive] = useState('All')
  const loader = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting){
        setTimeout(() => {
          setItems(prev => [...prev, ...mockItems(page+1)])
          setPage(p=>p+1)
        }, 600)
      }
    })
    if(loader.current) obs.observe(loader.current)
    return () => obs.disconnect()
  }, [page])

  const filtered = active==='All' ? items : items.filter(i=>i.category===active)

  return (
    <div className="space-y-4">
      <CategoryTabs categories={categories} value={active} onChange={setActive} />
      <div className="grid-cards">
        {filtered.map(item => (
          <ArticleCard key={item.id} article={item} />
        ))}
      </div>
      <div ref={loader} className="py-6 text-center text-slate-500">Loading more…</div>
    </div>
  )
}
