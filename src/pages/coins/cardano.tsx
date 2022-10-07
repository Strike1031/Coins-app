import React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import GraphCoins from '@/components/specificCoins/GraphCoins';
import Hero from '@/components/specificCoins/Hero';
import Market from '@/components/specificCoins/Market';
import News from '@/components/specificCoins/News';
import Statistic from '@/components/specificCoins/Statistic';

const Cardano = () => {
  return (
    <>
      {' '}
      <Seo templateTitle='Coins Apps DexMarketCap' />
      <Layout>
        <Hero />
        <GraphCoins />
        <Statistic />
        <Market />
        <News />
      </Layout>
    </>
  );
};

export default Cardano;
