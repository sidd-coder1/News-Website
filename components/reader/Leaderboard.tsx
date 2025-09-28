const users = Array.from({length:10}, (_,i)=> ({
  id: i,
  name: ['Riya','Alex','Mia','Ethan','Sofia','Liam','Noah','Ava','Zoe','Kai'][i],
  points: 1000 - i*73,
  badge: ['Gold','Silver','Bronze','Contributor','Rookie'][i%5],
  avatar: `https://i.pravatar.cc/100?img=${i+20}`
}))

export default function Leaderboard(){
  return (
    <section className="card p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold mb-3">Top Contributors</h2>
          <ul className="space-y-2">
            {users.map((u, idx)=> (
              <li key={u.id} className="flex items-center justify-between bg-muted rounded-md px-3 py-2">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 w-6 text-right">{idx+1}</span>
                  <img src={u.avatar} alt={u.name} className="h-8 w-8 rounded-full"/>
                  <div>
                    <div className="font-medium">{u.name}</div>
                    <div className="text-xs text-slate-500">{u.badge}</div>
                  </div>
                </div>
                <div className="text-sm font-semibold">{u.points} pts</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <div className="card p-3">
            <h3 className="font-medium mb-2">Badges</h3>
            <div className="flex flex-wrap gap-2">
              {['Gold','Silver','Bronze','Contributor','Rookie','Fact-Checker','Reporter'].map(b=> (
                <span key={b} className="badge">{b}</span>
              ))}
            </div>
          </div>
          <div className="card p-3">
            <h3 className="font-medium mb-2">Progress</h3>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs"><span>Weekly Goal</span><span>70%</span></div>
                <div className="h-2 bg-slate-200 rounded">
                  <div className="h-2 bg-primary rounded" style={{ width: '70%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs"><span>Article Shares</span><span>45%</span></div>
                <div className="h-2 bg-slate-200 rounded">
                  <div className="h-2 bg-secondary rounded" style={{ width: '45%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
