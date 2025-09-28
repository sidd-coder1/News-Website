"use client"
import { useState } from 'react'

const emotions = [
  { key: 'joy', label: '😊 Joy' },
  { key: 'sad', label: '😢 Sad' },
  { key: 'angry', label: '😠 Angry' },
  { key: 'surprise', label: '😮 Surprise' },
  { key: 'calm', label: '😌 Calm' },
]

export default function EmotionFilters(){
  const [active, setActive] = useState<string|null>(null)
  return (
    <div className="flex flex-wrap gap-2">
      {emotions.map(e => (
        <button key={e.key} className={`btn ${active===e.key? 'btn-secondary':'btn-ghost'} px-3 py-1`} onClick={()=>setActive(a=> a===e.key? null: e.key)}>
          {e.label}
        </button>
      ))}
    </div>
  )
}
