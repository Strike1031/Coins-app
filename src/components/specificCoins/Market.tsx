import React, { FC } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import CardanoDummy from '@/data/cardanoDummy';

import Button from '../Common/Button';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import NextImage from '../Common/NextImage';
const Market: FC = () => {
  return (
    <section id='market-coins' className='pt-14 w-full'>
      <Container>
        <Grid className='gap-y-8'>
          <div className='flex col-span-3 items-center'>
            <h4>Cardano Markets</h4>
          </div>
          <div className='flex col-span-2 col-end-13 justify-end items-center'>
            <Button variant='outline' className='px-4 py-2'>
              View all
              <BiChevronRight className='ml-1 w-5 h-5' />
            </Button>
          </div>
          <div className='col-span-full'>
            <table className='overflow-y-hidden text-sm table-auto'>
              <thead>
                <tr>
                  <td className='border-neutral-30 text-neutral-60 flex-1 py-6 pr-4 font-bold text-center border-t border-b dark:border-neutral-80 dark:text-neutral-50'>
                    #
                  </td>
                  <td className='border-neutral-30 text-neutral-60 flex-1 py-6 pr-6 pl-2 font-bold border-t border-b lg:w-2/12 dark:border-neutral-80 dark:text-neutral-50'>
                    Source
                  </td>
                  <td className='border-neutral-30 text-neutral-60 flex-1 px-4 py-6 font-bold text-left border-t border-b dark:border-neutral-80 dark:text-neutral-50'>
                    Pairs
                  </td>
                  <td className='border-neutral-30 text-neutral-60 flex-1 px-4 py-6 font-bold text-center whitespace-nowrap border-t border-b lg:w-2/12 dark:border-neutral-80 dark:text-neutral-50'>
                    Price
                  </td>

                  <td className='border-neutral-30 text-neutral-60 flex-1 px-4 py-6 font-bold text-right border-t border-b dark:border-neutral-80 dark:text-neutral-50'>
                    +2% Depth
                  </td>
                  <td className='border-neutral-30 text-neutral-60 flex-1 px-4 py-6 font-bold text-right whitespace-nowrap border-t border-b dark:border-neutral-80 dark:text-neutral-50'>
                    -2% Depth
                  </td>
                  <td className='border-neutral-30 text-neutral-60 flex-1 px-4 py-6 font-bold text-right border-t border-b dark:border-neutral-80 dark:text-neutral-50'>
                    Volume
                  </td>
                  <td className='border-neutral-30 items-right text-neutral-60 flex-1 flex-grow px-4 py-6 min-w-min font-bold border-t border-b lg:w-1/12 dark:border-neutral-80 dark:text-neutral-50'>
                    <div className='flex justify-end items-center whitespace-nowrap'>
                      Vol. %
                    </div>
                  </td>
                  <td className='border-neutral-30 items-right text-neutral-60 flex-1 flex-grow px-2 py-6 min-w-min font-bold border-t border-b lg:w-1/12 dark:border-neutral-80 dark:text-neutral-50'>
                    <div className='flex justify-end items-center whitespace-nowrap'>
                      Liquidity
                    </div>
                  </td>
                  <td className='border-neutral-30 items-right text-neutral-60 flex-1 flex-grow py-6 pl-4 min-w-min font-bold border-t border-b lg:w-1/12 dark:border-neutral-80 dark:text-neutral-50'>
                    <div className='flex justify-end items-center whitespace-nowrap'>
                      Updated
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {CardanoDummy?.map((coin, index) => (
                  <tr
                    key={index}
                    className='border-neutral-30 border-b dark:border-neutral-80'
                  >
                    <td className='py-7 pl-4 align-middle whitespace-nowrap lg:px-0'>
                      <div className='flex items-center space-x-2 w-full'>
                        {index + 1}
                      </div>
                    </td>
                    <td className='py-2 align-middle whitespace-nowrap lg:pr-4'>
                      <div className='flex items-center w-full'>
                        <div className='mr-2 w-8 h-8'>
                          <NextImage
                            alt='Bitcoin'
                            src={coin.logo}
                            width={32}
                            height={32}
                            quality={100}
                          />
                        </div>
                        <p className='mr-1 text-sm font-medium'>{coin.name}</p>
                      </div>
                    </td>
                    <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
                      <div className='flex items-center w-full'>
                        <p className='text-sm font-medium text-primary-500 dark:text-primary-200'>
                          {coin.pairs}
                        </p>
                      </div>
                    </td>
                    <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
                      <div className='flex justify-center items-center w-full'>
                        <p className='text-sm font-medium'>{coin.price}</p>
                      </div>
                    </td>
                    <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
                      <div className='flex items-center space-x-1 w-full'>
                        <p className='text-sm font-medium'>{coin.depthPlus}</p>
                      </div>
                    </td>
                    <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
                      <div className='flex items-center space-x-1 w-full'>
                        <p className='text-sm font-medium'>{coin.depthMinus}</p>
                      </div>
                    </td>
                    <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
                      <div className='flex items-center space-x-1 w-full'>
                        <p className='text-sm font-medium'>{coin.volume}</p>
                      </div>
                    </td>
                    <td className='px-4 py-2 text-right align-middle whitespace-nowrap lg:px-4'>
                      <div className='flex justify-end items-center space-x-1 w-full'>
                        <p className='text-sm font-medium'>{coin.vol}</p>
                      </div>
                    </td>
                    <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
                      <div className='flex justify-end items-center space-x-1 w-full'>
                        <p className='text-sm font-medium'>{coin.liquidity}</p>
                      </div>
                    </td>
                    <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
                      <div className='flex justify-end items-center space-x-1 w-full'>
                        <p className='text-sm font-medium'>{coin.updated}</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default Market;
