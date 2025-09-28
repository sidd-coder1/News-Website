"use client"
import { useRef } from 'react'

const tags = ['Elections','AI','Climate','Space','Economy','Tech IPOs','Olympics','Health']

export default function TrendingCarousel(){
  const ref = useRef<HTMLDivElement|null>(null)
  return (
    <div className="card p-3">
      <div className="flex items-center justify-between pb-2">
        <h2 className="font-semibold">Trending Tags</h2>
        <div className="text-xs text-slate-500">Swipe →</div>
      </div>
      <div ref={ref} className="flex gap-2 overflow-x-auto">
        {tags.map((t, i)=> (
          <span key={i} className="badge cursor-pointer hover:bg-primary hover:text-white">#{t}</span>
        ))}
      </div>
    </div>
  )
}
