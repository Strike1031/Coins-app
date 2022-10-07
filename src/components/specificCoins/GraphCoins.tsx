import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { GoKebabVertical } from 'react-icons/go';

import clsxm from '@/lib/clsxm';

import Dots from '@/assets/dots.svg';

import Button from '../Common/Button';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
// import NextImage from '../Common/NextImage';
import UnstyledLink from '../links/UnstyledLink';
import ArrowExpand from '../../../public/icons/arrow-expand.svg';

const DynamicAreaChart = dynamic(() => import('./Chart/AreaChart'), {
  ssr: false,
});

const Tabs: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsxm(
        'bg-neutral-20 dark:bg-dark-200 p-1 rounded-l-full rounded-r-full',
        className
      )}
    >
      {children}
    </div>
  );
};

const GraphCoins: FC = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [activeDateTab, setActiveDateTab] = React.useState<number>(0);
  const menu = [
    'Overview',
    'Market',
    'Historical Data',
    'Project Info',
    'Wallets',
    'Analysis',
    'Price Estimates',
  ];
  const dateMenu = ['1D', '7D', '1M', '1Y', 'YTD', 'ALL'];
  const TabMenu = ['Price', '   Market Cap', 'History'];
  // const detailCoins = [
  //   'Cardano',
  //   'https://www.cardano.org/en/home/',
  //   'https://cardanoexplorer.com/',
  //   'https://www.facebook.com/groups/CardanoCommunity',
  //   'https://t.me/CardanoAnnouncements',
  //   'ADA',
  //   'https://www.cardano.org/en/academic-papers/',
  //   'https://twitter.com/cardano',
  //   'https://www.reddit.com/r/cardano/',
  // ];

  return (
    <section id='graph-coin' className='w-full'>
      <Container>
        <Grid className='gap-y-8'>
          <div className='col-span-9 space-x-2'>
            {menu.map((item, index) => (
              <Button
                variant={index === 0 ? 'primary' : 'light'}
                className={clsxm(
                  'px-4 py-2 ',
                  index === 0 ? 'text-white' : 'text-neutral-60'
                )}
                key={index}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className='flex col-span-2 col-end-13 items-center'>
            <Button
              variant='light'
              className='border-neutral-30 px-4 py-2 ml-auto dark:border-neutral-80 dark:text-white'
            >
              <FaShareAlt className='mr-2 w-5 h-5' />
              Share
            </Button>
          </div>
          <hr className='border-neutral-30 col-span-full dark:border-neutral-80' />
          <div className='col-span-3'>
            <Tabs>
              {TabMenu.map((item, index) => (
                <Button
                  className={clsxm(
                    'px-4 py-2 ',
                    index === activeTab
                      ? 'bg-white text-neutral-100 dark:bg-dark-100 dark:text-white'
                      : 'bg-transparent text-neutral-60 dark:hover:bg-dark-100'
                  )}
                  key={index}
                  onClick={() => setActiveTab(index)}
                >
                  {item}
                </Button>
              ))}
            </Tabs>
          </div>
          <div className='span-2 flex col-span-2 col-end-13 justify-end items-center space-x-2'>
            <Button variant='icon' className='p-4 border-none'>
              <ArrowExpand className='text-neutral-60 w-6 h-6' />
            </Button>
            <Button variant='icon' className='p-4 border-none'>
              <GoKebabVertical className='text-neutral-60 w-6 h-6' />
            </Button>
          </div>
          <div className='flex col-span-4 items-center space-x-4'>
            <h6 className='font-medium'>ADA / USD</h6>
            <Dots className='w-2 h-2' />
            <h6 className='font-medium'>1h</h6>
            <h6 className='font-normal text-red-500 dark:text-red-semantic'>
              1.264 -0.0024 (-0.25%)
            </h6>
          </div>
          <div className='flex col-span-4 col-end-13 justify-end items-center'>
            <Tabs>
              {dateMenu.map((item, index) => (
                <Button
                  className={clsxm(
                    'px-4 py-2 ',
                    index === activeDateTab
                      ? 'bg-white text-neutral-100 dark:bg-dark-100 dark:text-white'
                      : 'bg-transparent text-neutral-60 dark:hover:bg-dark-100'
                  )}
                  key={index}
                  onClick={() => setActiveDateTab(index)}
                >
                  {item}
                </Button>
              ))}
            </Tabs>
          </div>
          <div className='col-span-full'>
            {/* <NextImage
              src='/images/chart.png'
              width={1240}
              height={494}
              alt='Chart Dummy'
            /> */}
            <DynamicAreaChart />
          </div>
          <div className='flex flex-col col-span-full space-y-4'>
            <h5 className='font-bold'>ADA Price Live Data</h5>
            <p className='text-md text-neutral-70 dark:text-neutral-60'>
              The live <strong>Cardano price today</strong> is $1,25 USD with a
              24-hour trading volume of $1.288.469.791 USD. We update our ADA to
              USD price in real-time. Cardano is down 3,63% in the last 24
              hours. The current CoinMarketCap ranking is #6, with a live market
              cap of $41.901.326.342 USD. It has a circulating supply of
              33.443.215.362 ADA coins and a max. supply of 45.000.000.000 ADA
              coins.
            </p>
            <p className='text-md text-neutral-70 dark:text-neutral-60'>
              {' '}
              If you would like to know where to buy Cardano, the top
              cryptocurrency exchanges for trading in Cardano stock are
              currently Binance, OKEx, CoinTiger, FTX, and Huobi Global. You can
              find others listed on our crypto exchanges page.
            </p>
          </div>
          <div className='flex flex-col col-span-full space-y-4'>
            <h5 className='font-bold'>What Is Cardano (ADA)?</h5>
            <p className='text-md text-neutral-70 dark:text-neutral-60'>
              <strong>
                {' '}
                Cardano is a proof-of-stake blockchain platform that says its
                goal is to allow “changemakers, innovators and visionaries” to
                bring about positive global change. To learn more about this
                project, check out our deep dive of Cardano.
              </strong>
            </p>
            <p className='text-md text-neutral-70 dark:text-neutral-60'>
              The open-source project also aims to “redistribute power from
              unaccountable structures to the margins to individuals” — helping
              to create a society that is more secure, transparent and fair.
              Cardano was founded back in 2017, and named after the 16th century
              Italian polymath Gerolamo Cardano. The native ADA token takes its
              name from the 19th century mathematician Ada Lovelace, widely
              regarded as the world’s first computer programmer. The ADA token
              is designed to ensure that owners can participate in the operation
              of the network. Because of this, those who hold the cryptocurrency
              have the right to vote on any proposed changes to the software.
            </p>
            <div className='pt-1'>
              <UnstyledLink
                href='/'
                className='max-w-fit text-md font-bold text-primary-500 dark:hover:opacity-80 dark:text-primary-200 hover:text-primary-600'
              >
                Readmore
              </UnstyledLink>
            </div>
          </div>

          <div className='col-span-full'>
            <div className='border-neutral-30 grid grid-cols-2 p-6 rounded-xl border dark:border-neutral-80'>
              <div className='flex flex-col space-y-6'>
                <div className='flex'>
                  <p className='w-3/12 text-sm font-medium'>Currency Name</p>
                  <p className='text-neutral-60 text-sm font-medium'>Cardano</p>
                </div>
                <div className='flex'>
                  <p className='w-3/12 text-sm font-medium'>Website</p>
                  <p className='text-neutral-60 text-sm font-medium'>
                    https://www.cardano.org/en/home/
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-3/12 text-sm font-medium'>Block Explorer</p>
                  <p className='text-neutral-60 text-sm font-medium'>
                    https://cardanoexplorer.com/
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-3/12 text-sm font-medium'>Facebook</p>
                  <p className='text-neutral-60 text-sm font-medium'>
                    https://www.facebook.com/groups/CardanoCommunity
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-3/12 text-sm font-medium'>Telegram</p>
                  <p className='text-neutral-60 text-sm font-medium'>
                    https://t.me/CardanoAnnouncements
                  </p>
                </div>
              </div>
              <div className='flex flex-col space-y-6'>
                <div className='flex'>
                  <p className='w-3/12 text-sm font-medium'>Symbol</p>
                  <p className='text-neutral-60 text-sm font-medium'>Cardano</p>
                </div>
                <div className='flex'>
                  <p className='w-3/12 text-sm font-medium'>Whitepaper</p>
                  <p className='text-neutral-60 text-sm font-medium'>
                    https://www.cardano.org/en/academic-papers/
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-3/12 text-sm font-medium'>Twitter</p>
                  <p className='text-neutral-60 text-sm font-medium'>
                    https://twitter.com/cardano
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-3/12 text-sm font-medium'>Reddit</p>
                  <p className='text-neutral-60 text-sm font-medium'>
                    https://www.reddit.com/r/cardano/
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default GraphCoins;
