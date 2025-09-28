"use client"
import { Line, LineChart, Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const perf = Array.from({length:10}, (_,i)=> ({ name: `D${i+1}`, timeOnPage: 30 + i*5, bounce: 40 - i, shares: 10 + i*2 }))

export default function PerformancePanel(){
  return (
    <section className="card p-4">
      <h2 className="font-semibold">Performance</h2>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={perf}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="timeOnPage" stroke="#0ea5e9" />
            <Line type="monotone" dataKey="bounce" stroke="#ef4444" />
            <Line type="monotone" dataKey="shares" stroke="#22c55e" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
