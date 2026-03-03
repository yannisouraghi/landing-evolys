'use client';

import { useSearchParams } from 'next/navigation';

const CALENDLY_LINKS: Record<string, string> = {
  linkedin: 'https://calendly.com/evolys-/appel-de-decouverte-conciergerie-transaction-clone-1',
  instagram: 'https://calendly.com/evolys-/appel-de-decouverte-conciergerie-transaction-clone-2',
};

const DEFAULT_CALENDLY_LINK = 'https://calendly.com/d/cwv3-jv5-bmj/developper-sa-conciergerie-grace-a-la-transaction';

export function useCalendlyLink(): string {
  const searchParams = useSearchParams();
  const utmSource = searchParams.get('utm_source');

  if (utmSource && CALENDLY_LINKS[utmSource]) {
    return CALENDLY_LINKS[utmSource];
  }

  return DEFAULT_CALENDLY_LINK;
}
