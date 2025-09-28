"use client"
import { useEffect, useState } from 'react'

export default function Gauge({ value, label }: { value: number; label?: string }){
  const [v, setV] = useState(0)
  useEffect(()=>{
    const id = setTimeout(()=> setV(value), 200)
    return ()=> clearTimeout(id)
  }, [value])
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const pct = Math.min(Math.max(v, 0), 100)
  const dash = (pct/100) * circumference
  return (
    <div className="flex items-center gap-4">
      <svg width="160" height="100" viewBox="0 0 180 110">
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        <g transform="translate(90,90)">
          <path d="M -70 0 A 70 70 0 1 1 70 0" fill="none" stroke="#e5e7eb" strokeWidth="14" />
          <circle r="60" cx="0" cy="0" fill="none" stroke="url(#g)" strokeWidth="14" strokeDasharray={`${dash} ${circumference}`} strokeDashoffset={circumference/2} transform="rotate(-90)"/>
          <text x="0" y="0" textAnchor="middle" fontSize="18" fontWeight={700} fill="currentColor">{Math.round(pct)}%</text>
        </g>
      </svg>
      <div>
        <div className="text-sm text-slate-500">{label || 'Green Impact'}</div>
        <div className="text-2xl font-semibold">{Math.round(pct)}%</div>
        <div className="text-xs text-slate-500">Estimated eco rating based on energy and CDN efficiency</div>
      </div>
    </div>
  )
}
