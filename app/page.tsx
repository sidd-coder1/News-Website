import Feed from '@/components/reader/Feed'
import TrendingCarousel from '@/components/reader/TrendingCarousel'
import EmotionFilters from '@/components/reader/EmotionFilters'
import Gauge from '@/components/shared/Gauge'

export default function HomePage() {
  return (
    <div className="space-y-6">
      <TrendingCarousel />
      <EmotionFilters />
      <section className="card p-4 flex items-center justify-between">
        <div>
          <h2 className="font-semibold">Green Impact Meter</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">Estimated sustainability score based on delivery efficiency and caching</p>
        </div>
        <Gauge value={72} label="Green Impact" />
      </section>
      <Feed />
    </div>
  )
}
