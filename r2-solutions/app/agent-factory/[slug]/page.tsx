import { agents } from '@/lib/agents';
import AgentClient from './AgentClient';

// Required for static export - generates all agent pages at build time
export function generateStaticParams() {
  return agents.map((agent) => ({
    slug: agent.slug,
  }));
}

export default async function AgentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <AgentClient slug={slug} />;
}
