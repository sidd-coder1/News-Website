"use client"
import { useState } from 'react'
import { ThumbsUp, Flag } from 'lucide-react'

type Comment = {
  id: string
  author: string
  avatar: string
  content: string
  likes: number
  children?: Comment[]
}

const initial: Comment[] = [
  {
    id: 'c1', author: 'Riya', avatar: 'https://i.pravatar.cc/40?img=32', content: 'Great analysis! I especially liked the data sources used.', likes: 4,
    children: [
      { id: 'c1-1', author: 'Alex', avatar: 'https://i.pravatar.cc/40?img=12', content: 'Agreed! Balanced perspective.', likes: 2 }
    ]
  },
  {
    id: 'c2', author: 'Liam', avatar: 'https://i.pravatar.cc/40?img=15', content: 'I have a different view on this topic.', likes: 1,
  }
]

function CommentItem({ c, onReply }: { c: Comment; onReply: (parentId: string, text: string)=>void }){
  const [showReply, setShowReply] = useState(false)
  const [text, setText] = useState('')
  return (
    <div className="space-y-2">
      <div className="flex gap-3">
        <img src={c.avatar} alt={c.author} className="h-9 w-9 rounded-full" />
        <div className="flex-1">
          <div className="text-sm font-medium">{c.author}</div>
          <div className="text-sm text-slate-700 dark:text-slate-200">{c.content}</div>
          <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
            <button className="inline-flex items-center gap-1 hover:text-foreground"><ThumbsUp className="w-4 h-4"/> {c.likes}</button>
            <button className="hover:text-foreground" onClick={()=> setShowReply(s=>!s)}>Reply</button>
            <button className="inline-flex items-center gap-1 hover:text-foreground"><Flag className="w-4 h-4"/> Report</button>
          </div>
          {showReply && (
            <div className="mt-2 flex gap-2">
              <input className="input" placeholder="Write a reply" value={text} onChange={e=>setText(e.target.value)} />
              <button className="btn btn-primary px-3" onClick={()=>{ if(text.trim()){onReply(c.id, text); setText(''); setShowReply(false)} }}>Send</button>
            </div>
          )}
          {c.children && (
            <div className="pl-6 mt-2 space-y-3 border-l border-slate-200 dark:border-slate-800">
              {c.children.map(child => (
                <CommentItem key={child.id} c={child} onReply={onReply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Comments({ articleId }: { articleId: string }){
  const [comments, setComments] = useState<Comment[]>(initial)
  const [text, setText] = useState('')

  function handleReply(parentId: string, content: string){
    setComments(prev => prev.map(c => {
      if(c.id === parentId){
        const children = c.children ? [...c.children] : []
        children.push({ id: Math.random().toString(36).slice(2), author: 'You', avatar: 'https://i.pravatar.cc/40?img=1', content, likes: 0 })
        return { ...c, children }
      }
      if(c.children){
        return { ...c, children: c.children.map(ch => ch) }
      }
      return c
    }))
  }

  function addTopLevel(){
    if(!text.trim()) return
    setComments(prev => [{ id: Math.random().toString(36).slice(2), author: 'You', avatar: 'https://i.pravatar.cc/40?img=1', content: text, likes: 0 }, ...prev])
    setText('')
  }

  return (
    <section className="card p-4">
      <h2 className="font-semibold mb-3">Comments</h2>
      <div className="flex gap-2 mb-4">
        <input className="input" placeholder="Add a comment" value={text} onChange={e=>setText(e.target.value)} />
        <button className="btn btn-primary px-3" onClick={addTopLevel}>Post</button>
      </div>
      <div className="space-y-4">
        {comments.map(c => (
          <CommentItem key={c.id} c={c} onReply={handleReply} />
        ))}
      </div>
    </section>
  )
}
