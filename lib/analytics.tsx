'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      try {
        const gtag = (window as any).gtag;
        if (gtag) {
          gtag('config', 'G-XXXXXXXXXX', {
            page_path: pathname,
          });
        }
      } catch {}
    }
  }, [pathname]);

  return null;
}

export function AnalyticsScript() {
  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
