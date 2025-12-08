import { industries } from '@/lib/industries';
import HowWeApplyAIClient from './HowWeApplyAIClient';

// Required for static export - generates all industry how-we-apply-ai pages at build time
export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export default async function HowWeApplyAIPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <HowWeApplyAIClient slug={slug} />;
}
