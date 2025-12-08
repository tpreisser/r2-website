import { industries } from '@/lib/industries';
import IntegrationClient from './IntegrationClient';

// Required for static export - generates all industry integration pages at build time
export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export default async function IntegrationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <IntegrationClient slug={slug} />;
}
