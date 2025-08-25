'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/LocaleProvider';
import type { ComponentProps } from 'react';

type LocaleLinkProps = ComponentProps<typeof Link>;

export default function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const locale = useLocale() || 'en';
  
  // Convert href to string
  const hrefString = typeof href === 'string' ? href : href.pathname || '/';
  
  // If href starts with http or is a hash/tel/mailto link, don't modify it
  if (hrefString.startsWith('http') || hrefString.startsWith('#') || hrefString.startsWith('tel:') || hrefString.startsWith('mailto:')) {
    return <Link href={href} {...props} />;
  }
  
  // If it's the root path, return the locale path
  if (hrefString === '/') {
    return <Link href={`/${locale}`} {...props} />;
  }
  
  // If the href already includes the locale, don't add it again
  const localePattern = /^\/(en|az|ru)/;
  if (localePattern.test(hrefString)) {
    return <Link href={href} {...props} />;
  }
  
  // Add the locale prefix to the path
  const localizedHref = `/${locale}${hrefString}`;
  
  return <Link href={localizedHref} {...props} />;
}