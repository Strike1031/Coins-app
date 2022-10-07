import * as React from 'react';

import Hero from '@/components/homepage/Hero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Homepage DexMarketCap' />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
