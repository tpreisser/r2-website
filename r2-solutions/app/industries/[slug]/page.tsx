import { use } from 'react';
import { industries } from '@/lib/industries';
import { IndustryDetailPageClient } from './IndustryDetailPageClient';

// Required for static export - generates all industry pages at build time
export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export default function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  return <IndustryDetailPageClient slug={slug} />;
}
