import type { WebPage, Graph, BreadcrumbList, Action } from 'schema-dts';

import { LogoUrl, OrganizationId, RootPageId, SiteNodeId } from '@/app/RootStructuredData';

/* NOTE: this schema references objects defined in /app/RootStructuredData.tsx */
const ThisPageId = 'https://www.thedreamynails.com/book/';
const BreadcrumbId = `${ThisPageId}#breadcrumb`;

const pageStructuredData: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': ThisPageId,
      isPartOf: { '@id': SiteNodeId },
      dateCreated: '2023-09-21T20:39:00+11:00',
      dateModified: '2024-10-08T21:20:00+11:00',
      provider: { '@id': OrganizationId },
      breadcrumb: { '@id': BreadcrumbId },
      thumbnailUrl: LogoUrl,
      potentialAction: [{
        '@type': 'BuyAction',
        target: [ThisPageId],
        name: 'Book an appointment',
        seller: { '@id': OrganizationId },
      } as Action,],
    } as WebPage,
    {
      '@type': 'BreadcrumbList',
      '@id': BreadcrumbId,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: RootPageId },
        { '@type': 'ListItem', position: 2, name: 'Book an appointment', item: ThisPageId },
      ],
    } as BreadcrumbList,
  ],
};

export default function PageStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
    />
  );
}
