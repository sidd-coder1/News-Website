"use client"
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const data = [
  { name: 'Mon', positive: 30, negative: 12 },
  { name: 'Tue', positive: 45, negative: 15 },
  { name: 'Wed', positive: 50, negative: 20 },
  { name: 'Thu', positive: 60, negative: 18 },
  { name: 'Fri', positive: 55, negative: 22 },
]

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
const keywords = [
  { tag: 'elections', weight: 9 },
  { tag: 'ai', weight: 8 },
  { tag: 'climate', weight: 7 },
  { tag: 'economy', weight: 6 },
  { tag: 'space', weight: 5 },
  { tag: 'health', weight: 4 },
  { tag: 'stocks', weight: 6 },
  { tag: 'policy', weight: 5 },
  { tag: 'sports', weight: 4 },
]

export default function AnalyticsPanel(){
  return (
    <section className="card p-4 space-y-4">
      <h2 className="font-semibold">Analytics</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="positive" fill="#22c55e" />
              <Bar dataKey="negative" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="positive" stroke="#22c55e" />
              <Line type="monotone" dataKey="negative" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-2">Trending Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {keywords.map(k => (
            <span key={k.tag} className="badge" style={{ fontSize: `${0.7 + k.weight*0.08}rem` }}>
              #{k.tag}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-2">Reader Density</h3>
        <div className="h-64 bg-muted rounded-md overflow-hidden">
          <ComposableMap projectionConfig={{ scale: 160 }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography key={geo.rsmKey} geography={geo} style={{ default: { fill: '#e2e8f0' }, hover: { fill: '#94a3b8' } }} />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </section>
  )
}
