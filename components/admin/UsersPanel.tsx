import Image from 'next/image'

const users = Array.from({length:6}, (_,i)=> ({
  id: i,
  name: ['Ava Patel','Liam Chen','Sofia Rossi','Noah Müller','Mia García','Ethan Lee'][i],
  role: ['Admin','Editor','Journalist','Moderator','Reader','Analyst'][i%6],
  avatar: `https://i.pravatar.cc/100?img=${i+10}`,
}))

export default function UsersPanel(){
  return (
    <section className="card p-4">
      <h2 className="font-semibold mb-3">User Management</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td className="flex items-center gap-3">
                  <Image src={u.avatar} alt={u.name} width={32} height={32} className="rounded-full"/>
                  <span>{u.name}</span>
                </td>
                <td>
                  <span className="badge">{u.role}</span>
                </td>
                <td className="space-x-2">
                  <button className="btn btn-ghost px-2">View</button>
                  <button className="btn btn-primary px-3">Promote</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
