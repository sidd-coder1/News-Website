"use client"
import { useState } from 'react'

const rooms = [
  { id: 'general', name: 'General News' },
  { id: 'tech', name: 'Tech' },
  { id: 'sports', name: 'Sports' },
  { id: 'world', name: 'World' },
]

export default function ChatRooms(){
  const [active, setActive] = useState('general')
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Record<string, {id:string; author:string; text:string; online?:boolean}[]>>({
    general: [
      { id:'m1', author:'Ava', text:'Welcome to the general room!', online:true },
      { id:'m2', author:'Liam', text:'Anyone following the latest election polls?', online:true }
    ],
    tech: [{ id:'m3', author:'Mia', text:'AI chips soaring this quarter.', online:false }],
    sports: [{ id:'m4', author:'Ethan', text:'What a game last night!', online:true }],
    world: [{ id:'m5', author:'Sofia', text:'Global summit updates here.', online:false }],
  })

  function send(){
    if(!input.trim()) return
    setMessages(prev => ({
      ...prev,
      [active]: [...(prev[active]||[]), { id: Math.random().toString(36).slice(2), author:'You', text: input }]
    }))
    setInput('')
  }

  return (
    <section className="card overflow-hidden">
      <div className="grid grid-cols-12">
        <aside className="col-span-4 border-r border-slate-200 dark:border-slate-800">
          {rooms.map(r => (
            <button key={r.id} className={`w-full text-left px-3 py-3 hover:bg-muted ${active===r.id? 'bg-muted':''}`} onClick={()=>setActive(r.id)}>
              <div className="font-medium">{r.name}</div>
              <div className="text-xs text-slate-500">{(messages[r.id]?.length||0)} members</div>
            </button>
          ))}
        </aside>
        <div className="col-span-8 flex flex-col h-96">
          <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-800 font-medium">{rooms.find(r=>r.id===active)?.name}</div>
          <div className="flex-1 overflow-auto p-4 space-y-3 bg-white dark:bg-slate-950">
            {(messages[active]||[]).map(m => (
              <div key={m.id} className="flex items-start gap-2">
                <span className={`h-2 w-2 rounded-full mt-2 ${m.online? 'bg-green-500':'bg-slate-300'}`}></span>
                <div>
                  <div className="text-xs text-slate-500"><span className="font-medium">{m.author}</span></div>
                  <div className="text-sm">{m.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <input className="input" placeholder="Type a message" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=> e.key==='Enter' && send()} />
            <button className="btn btn-primary px-3" onClick={send}>Send</button>
          </div>
        </div>
      </div>
    </section>
  )
}
