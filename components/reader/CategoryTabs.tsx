"use client"

export default function CategoryTabs({ categories, value, onChange }:{ categories: string[]; value: string; onChange: (v:string)=>void }){
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar">
      {categories.map(cat => (
        <button key={cat} className={`btn ${value===cat? 'btn-primary':'btn-ghost'} px-3 py-1 whitespace-nowrap`} onClick={()=>onChange(cat)}>
          {cat}
        </button>
      ))}
    </div>
  )
}
