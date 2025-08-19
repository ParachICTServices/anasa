import { unstable_cache } from "next/cache";
import { getPage, getSection } from '@/app/(dataLayer)/getPages';

export function useCachedPage<T>(pageType: string, slug: string) {
  return unstable_cache(
    () => getPage(pageType, slug) as Promise<T>,
    [`${slug}-page-cache`], // dynamic cache key
    {
      tags: [pageType],
      revalidate: 30,
    }
  );
}
export function useCachedSection<T>(pageType: string, slug: string) {
  return unstable_cache(
    () => getSection(pageType) as Promise<T>,
    [`${slug}-section-cache`], // dynamic cache key
    {
      tags: [pageType],
      revalidate: 30,
    }
  );
}
