const rows = Array.from({length:20}, (_,i)=> ({
  id: i,
  action: ['LOGIN','PUBLISH','UPDATE','DELETE'][i%4],
  actor: ['Ava','Liam','Mia','Ethan'][i%4],
  time: new Date(Date.now()-i*3600000).toISOString(),
}))

export default function AuditLog(){
  return (
    <section className="card p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Audit Log</h2>
        <input className="input max-w-xs" placeholder="Search" />
      </div>
      <div className="overflow-x-auto mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Actor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <td>{new Date(r.time).toLocaleString()}</td>
                <td>{r.actor}</td>
                <td>{r.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
