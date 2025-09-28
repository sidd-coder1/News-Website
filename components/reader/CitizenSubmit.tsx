"use client"
import { useState } from 'react'

export default function CitizenSubmit(){
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [files, setFiles] = useState<File[]>([])

  function onFiles(e: React.ChangeEvent<HTMLInputElement>){
    const f = e.target.files
    if(!f) return
    setFiles(Array.from(f))
  }

  return (
    <section className="card p-4">
      <h2 className="font-semibold mb-3">Citizen Journalism Submission</h2>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-3">
          <input className="input" placeholder="Headline" value={title} onChange={e=>setTitle(e.target.value)} />
          <textarea className="textarea h-28" placeholder="Describe what happened" value={desc} onChange={e=>setDesc(e.target.value)} />
          <input type="file" accept="image/*,video/*" multiple onChange={onFiles} />
          <button className="btn btn-primary px-3">Submit</button>
        </div>
        <div>
          <div className="font-medium mb-2">Preview</div>
          <div className="grid grid-cols-2 gap-2">
            {files.map((f, i)=> {
              const url = URL.createObjectURL(f)
              return f.type.startsWith('video') ? (
                <video key={i} controls className="w-full h-32 object-cover rounded-md" src={url} />
              ) : (
                <img key={i} className="w-full h-32 object-cover rounded-md" src={url} alt={f.name} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
