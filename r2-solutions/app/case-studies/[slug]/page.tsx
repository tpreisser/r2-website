import { caseStudies } from '@/lib/case-studies';
import CaseStudyClient from './CaseStudyClient';

// Required for static export - generates all case study pages at build time
export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseStudyClient slug={slug} />;
}
