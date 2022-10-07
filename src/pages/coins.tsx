import React, { FC } from 'react';

import ListCoins from '@/components/coins/ListCoins';
import TodayMarket from '@/components/coins/TodayMarket';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/Seo';

const Coins: FC = () => {
  return (
    <>
      <Seo templateTitle='Coins Apps DexMarketCap' />
      <TodayMarket />
      <ListCoins />
      <Footer />
    </>
  );
};

export default Coins;
