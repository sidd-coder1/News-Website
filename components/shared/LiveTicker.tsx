"use client"
import { useEffect, useRef } from 'react'

export default function LiveTicker({ messages }: { messages: string[] }){
  const ref = useRef<HTMLDivElement|null>(null)
  useEffect(()=>{
    const el = ref.current
    if(!el) return
    let i = 0
    const id = setInterval(()=>{
      el.style.transform = 'translateY(-100%)'
      setTimeout(()=>{
        el.appendChild(el.firstElementChild as any)
        el.style.transition = 'none'
        el.style.transform = 'translateY(0)'
        // force reflow
        void el.offsetHeight
        el.style.transition = 'transform 400ms'
      }, 400)
      i = (i+1)%messages.length
    }, 2500)
    return ()=> clearInterval(id)
  },[messages])
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-md overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">Live Fact-Check</div>
      <div className="h-8 overflow-hidden relative">
        <div ref={ref} className="absolute inset-0 transition-[transform]">
          {messages.map((m, i)=> (
            <div key={i} className="h-8 flex items-center px-3 text-sm text-yellow-800 dark:text-yellow-100 border-t border-yellow-100/60 dark:border-yellow-800/60">
              {m}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
