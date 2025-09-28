"use client"
import { useMemo, useState } from 'react'

const rows = Array.from({length:12}, (_,i)=> ({
  id: i,
  title: `Story ${i+1}`,
  author: ['Alex','Riya','John','Maria'][i%4],
  status: ['Draft','Review','Approved'][i%3],
  submittedAt: new Date(Date.now()-i*86400000).toISOString()
}))

export default function EditorialQueue(){
  const [sortKey, setSortKey] = useState<'title'|'author'|'status'|'submittedAt'>('submittedAt')
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<string>('All')
  const [schedule, setSchedule] = useState<Record<number, string>>({})
  const [published, setPublished] = useState<Record<number, boolean>>({})
  const sorted = useMemo(()=> {
    let data = rows.filter(r => r.title.toLowerCase().includes(query.toLowerCase()))
    if(status!=='All') data = data.filter(r=> r.status===status)
    return data.sort((a:any,b:any)=> a[sortKey]>b[sortKey]? -1: 1)
  }, [sortKey, query, status])

  return (
    <section className="card p-4">
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <h2 className="font-semibold">Editorial Queue</h2>
        <div className="flex gap-2">
          <input className="input" placeholder="Search title" value={query} onChange={e=>setQuery(e.target.value)} />
          <select className="select" value={status} onChange={e=>setStatus(e.target.value)}>
            {['All','Draft','Review','Approved'].map(s=> <option key={s}>{s}</option>)}
          </select>
          <select className="select" value={sortKey} onChange={e=>setSortKey(e.target.value as any)}>
            <option value="submittedAt">Date</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Status</th>
              <th>Submitted</th>
              <th>Schedule</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(r => (
              <tr key={r.id}>
                <td>{r.title}</td>
                <td>{r.author}</td>
                <td><span className="badge">{r.status}</span></td>
                <td>{new Date(r.submittedAt).toLocaleDateString()}</td>
                <td className="min-w-[240px]">
                  <input
                    type="datetime-local"
                    className="input"
                    value={schedule[r.id] || ''}
                    onChange={e=> setSchedule(prev => ({...prev, [r.id]: e.target.value}))}
                  />
                </td>
                <td className="space-x-2">
                  <button
                    className="btn btn-primary px-3"
                    onClick={()=> setPublished(p=> ({...p, [r.id]: true}))}
                    disabled={!!published[r.id]}
                  >{published[r.id]? 'Scheduled' : 'Publish'}</button>
                  <button
                    className="btn btn-ghost px-3"
                    onClick={()=> setPublished(p=> ({...p, [r.id]: false}))}
                  >Unpublish</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
