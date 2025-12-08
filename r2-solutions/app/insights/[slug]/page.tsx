import { articles } from '@/lib/articles';
import ArticleClient from './ArticleClient';

// Required for static export - generates all article pages at build time
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticleClient slug={slug} />;
}
