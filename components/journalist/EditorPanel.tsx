"use client"
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Wand2 } from 'lucide-react'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

export default function EditorPanel(){
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [ai, setAi] = useState({ headline: 'AI: Compelling headline here', keywords: ['news','world','insights'], summary: 'Short SEO-friendly summary.' })
  const [files, setFiles] = useState<File[]>([])

  function onFiles(e: React.ChangeEvent<HTMLInputElement>){
    const f = e.target.files
    if(!f) return
    setFiles(Array.from(f))
  }

  return (
    <section className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold">Rich Text Editor</h2>
        <button className="btn btn-secondary px-3 inline-flex items-center gap-2" onClick={()=>setAi(a=> ({...a, headline: 'AI Suggested: '+Date.now()}))}>
          <Wand2 className="w-4 h-4"/> AI Suggest
        </button>
      </div>
      <input className="input mb-3" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Write your story..." />
        </div>
        <div>
          <div className="font-medium mb-2">Media</div>
          <input type="file" accept="image/*,video/*" multiple onChange={onFiles} />
          <div className="grid grid-cols-2 gap-2 mt-2">
            {files.map((f, i)=> {
              const url = URL.createObjectURL(f)
              return f.type.startsWith('video') ? (
                <video key={i} controls className="w-full h-24 object-cover rounded-md" src={url} />
              ) : (
                <img key={i} className="w-full h-24 object-cover rounded-md" src={url} alt={f.name} />
              )
            })}
          </div>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3 mt-4">
        <div className="card p-3">
          <h3 className="font-medium">Headline Suggestions</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{ai.headline}</p>
        </div>
        <div className="card p-3">
          <h3 className="font-medium">SEO Keywords</h3>
          <div className="flex gap-2 flex-wrap text-sm">
            {ai.keywords.map(k=> <span key={k} className="badge">{k}</span>)}
          </div>
        </div>
        <div className="card p-3">
          <h3 className="font-medium">Summary</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{ai.summary}</p>
        </div>
      </div>
    </section>
  )
}
