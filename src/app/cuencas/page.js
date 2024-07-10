// app/cuencas/page.js

import Intro from '@/components/cuencas/IntroCuencas';
import Bento from '@/components/cuencas/BentoCuencas';
import { Suspense } from 'react';
import SkeletonCuencas from '@/components/skeletons/SkeletonCuencas';

export const revalidate = 60;
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export const metadata = {
  title: 'Cuencas Hidrográficas - AcuaNet',
  openGraph: {
    title: 'Cuencas Hidrográficas - AcuaNet',
    url: 'https://acuanet.es/cuencas',
    siteName: 'AcuaES',
    images: [
      {
        url: 'https://i.imgur.com/Jpt5ENb.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://i.imgur.com/Jpt5ENb.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuencas Hidrográficas - AcuaNet',
    creator: '@_DvzZ_',
    images: ['https://i.imgur.com/Jpt5ENb.png'],
  },
};

function CuencasPage() {
  return (
    <section className="mt-5">
      <Intro title={'Cuencas Hidrográficas'} />
      <Suspense fallback={<SkeletonCuencas />}>
        <Bento />
      </Suspense>
    </section>
  );
}

export default CuencasPage;
