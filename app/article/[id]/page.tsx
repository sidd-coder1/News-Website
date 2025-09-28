import Comments from '@/components/reader/Comments'
import LiveTicker from '@/components/shared/LiveTicker'
import { notFound } from 'next/navigation'

function getMockArticle(id: string){
  return {
    id,
    title: `Deep Dive: Article ${id}`,
    author: 'Alex Kim',
    category: 'World',
    image: `https://picsum.photos/seed/article-${id}/1200/600`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo non mauris rhoncus fermentum. Vivamus sit amet neque a justo pharetra tempor. Sed bibendum, urna ac ultricies sollicitudin, justo augue efficitur dui, id consequat dui nulla vitae lacus.\n\nFusce at nunc ut lorem malesuada condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`,
    timestamp: new Date().toISOString(),
  }
}

export default function ArticlePage({ params }: { params: { id: string } }){
  const article = getMockArticle(params.id)
  if(!article) return notFound()
  return (
    <div className="space-y-6">
      <LiveTicker messages={["Live Fact-Check: Claim rated Mostly True","Update: Additional sources added","Correction: Typo fixed in paragraph 2"]} />
      <article className="card overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <span className="badge">{article.category}</span>
            <span>By {article.author}</span>
            <span>• {new Date(article.timestamp).toLocaleString()}</span>
          </div>
          <h1 className="text-2xl font-bold">{article.title}</h1>
          <div className="prose prose-slate max-w-none dark:prose-invert">
            {article.content.split('\n\n').map((p, i)=> <p key={i}>{p}</p>)}
          </div>
        </div>
      </article>
      <Comments articleId={article.id} />
    </div>
  )
}
