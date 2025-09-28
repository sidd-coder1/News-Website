const cards = Array.from({length:4}, (_,i)=> ({
  id: i,
  title: `Flagged Content ${i+1}`,
  reason: ['Hate','Spam','Misinformation','Harassment'][i%4],
  preview: `https://picsum.photos/seed/mod-${i}/400/240`
}))

export default function Moderation(){
  return (
    <section className="card p-4">
      <h2 className="font-semibold mb-3">Moderation Queue</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map(c => (
          <div key={c.id} className="card overflow-hidden">
            <img src={c.preview} alt="preview" className="w-full h-36 object-cover" />
            <div className="p-3 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{c.title}</h3>
                <span className="badge">{c.reason}</span>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-primary px-3">Approve</button>
                <button className="btn btn-ghost px-3">Reject</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
