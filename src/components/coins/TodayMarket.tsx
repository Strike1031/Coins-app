import { useTheme } from 'next-themes';
import React, { FC } from 'react';
import { FaSearch } from 'react-icons/fa';

import useResponsive from '@/lib/useResponsive';

import ListCardDekstop from './card/ListCardDekstop';
import ListCardMobile from './card/ListCardMobile';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import SwitchDark from '../Common/SwitchDark';

const TodayMarket: FC = () => {
  const { theme, setTheme } = useTheme();
  const { isMobile } = useResponsive();

  const handleDarkTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <section id='today-market' className='pt-8 mb-12 w-full lg:pt-24'>
      <Container>
        <Grid className='gap-y-6'>
          <div className='col-span-4 lg:col-span-5'>
            <h4>
              Today Market is down
              <span className='text-red-500 dark:text-red-semantic'>2,35%</span>
            </h4>
          </div>
          <div className='flex col-span-full col-end-5 row-start-2 justify-end items-center space-x-4 divide-x-2 lg:col-span-4 lg:col-end-13 lg:row-start-1 dark:divide-neutral-80'>
            <label htmlFor='' className='relative'>
              <FaSearch className='absolute top-3 left-4 z-10 w-4 h-5 dark:text-white' />
              <input
                type='text'
                placeholder='Search'
                className='border-neutral-40 max-w-[290px] placeholder:text-neutral-60 pr-[10px] py-[10px] pl-10 w-full text-sm text-black bg-transparent rounded-r-full rounded-l-full border dark:border-neutral-80'
              />
            </label>
            <div className='flex justify-center items-center pl-4'>
              <SwitchDark theme={theme} handleDarkTheme={handleDarkTheme} />
            </div>
          </div>
          {isMobile ? <ListCardDekstop /> : <ListCardMobile />}
        </Grid>
      </Container>
    </section>
  );
};

export default TodayMarket;
