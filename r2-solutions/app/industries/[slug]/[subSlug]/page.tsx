import { industries } from '@/lib/industries';
import SubIndustryClient from './SubIndustryClient';

// Required for static export - generates all sub-industry pages at build time
export function generateStaticParams() {
  const params: { slug: string; subSlug: string }[] = [];
  industries.forEach((industry) => {
    if (industry.subIndustries) {
      industry.subIndustries.forEach((sub) => {
        params.push({ slug: industry.slug, subSlug: sub.slug });
      });
    }
  });
  return params;
}

export default async function SubIndustryPage({ params }: { params: Promise<{ slug: string; subSlug: string }> }) {
  const { slug, subSlug } = await params;
  return <SubIndustryClient slug={slug} subSlug={subSlug} />;
}
