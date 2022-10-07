import Script from 'next/script';
import React, { useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import clsxm from '@/lib/clsxm';

import Coins from '@/data/coinsDummy';

import CoinDetails from '@/pages/coins/coinDetails';

import NextImage from '../Common/NextImage';
import GraphDown from '../../../public/images/graph-down.svg';
import GraphUp from '../../../public/images/graph-up.svg';

const TableCoins = () => {
  const [paginationPage, setPaginationPage] = useState(0);
  const pageNumbers = [];
  for (let i = 0; i <= Coins?.length / 10; i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <button
        className={clsxm(
          ' border border-neutral-30 px-3 py-2 rounded-lg  text-xs dark:border-neutral-80',
          number === paginationPage
            ? 'bg-primary-500 text-white'
            : 'bg-white dark:bg-dark-100 dark:text-white hover:bg-neutral-20'
        )}
        key={number}
        onClick={() => {
          if (number < Coins.length / 10) {
            setPaginationPage(number);
            window.scrollTo(0, 0);
          }
        }}
      >
        {number + 1}
      </button>
    );
  });

  return (
    <>
      <div className='overflow-x-auto'>
        <table className='overflow-y-hidden table-auto text-xs'>
          <thead>
            <tr>
              <td className='border-b border-neutral-30 border-t flex-1 font-bold px-4 py-6 text-black-500 text-center lg:w-1/12 dark:border-neutral-80'>
                #
              </td>
              <td className='border-b border-neutral-30 border-t flex-1 font-bold pl-2 pr-6 py-6 text-black-500 lg:w-4/12 dark:border-neutral-80'>
                Name
              </td>
              <td className='border-b border-neutral-30 border-t flex-1 font-bold px-4 py-6 text-black-500 text-right dark:border-neutral-80'>
                Price
              </td>
              <td className='border-b border-neutral-30 border-t flex-1 font-bold px-4 py-6 text-black-500 whitespace-nowrap lg:w-2/12 dark:border-neutral-80'>
                Price Changes
              </td>

              <td className='border-b border-neutral-30 border-t flex-1 font-bold px-2 py-6 text-black-500 text-center dark:border-neutral-80'>
                1H %
              </td>
              <td className='border-b border-neutral-30 border-t flex-1 font-bold px-2 py-6 text-black-500 text-center whitespace-nowrap dark:border-neutral-80'>
                24H %
              </td>
              <td className='border-b border-neutral-30 border-t flex-1 font-bold px-2 py-6 text-black-500 text-center dark:border-neutral-80'>
                7d %
              </td>
              <td className='border-b border-neutral-30 border-t flex-1 flex-grow font-bold items-center min-w-min px-4 py-6 text-black-500 lg:w-2/12 dark:border-neutral-80'>
                <div className='flex items-center whitespace-nowrap'>
                  Market Cap
                  <BsFillExclamationCircleFill className='h-4 ml-1 text-neutral-40 w-4' />
                </div>
              </td>
              <td className='border-b border-neutral-30 border-t flex-1 flex-grow font-bold items-center min-w-min px-4 py-6 text-black-500 lg:w-2/12 dark:border-neutral-80'>
                <div className='flex items-center whitespace-nowrap'>
                  Volume
                  <BsFillExclamationCircleFill className='h-4 ml-1 text-neutral-40 w-4' />
                </div>
              </td>
              <td className='border-b border-neutral-30 border-t flex-1 flex-grow font-bold items-center min-w-min px-4 py-6 text-black-500 lg:w-2/12 dark:border-neutral-80'>
                <div className='flex items-center whitespace-nowrap'>
                  Supply
                  <BsFillExclamationCircleFill className='h-4 ml-1 text-neutral-40 w-4' />
                </div>
              </td>
              <td className='border-b border-neutral-30 border-t flex-1 flex-grow font-bold min-w-min px-4 py-6 text-black-500 lg:w-2/12 dark:border-neutral-80'>
                Liquidity
              </td>
              <td className='border-b border-neutral-30 border-t flex-1 font-bold px-3 py-6 text-black-500 text-right lg:w-2/12 dark:border-neutral-80'>
                Graph
              </td>
            </tr>
          </thead>
          <tbody>
            {Coins?.slice(
              0 + paginationPage * 10,
              10 + paginationPage * 10
            ).map((coin, index) => (
              <tr
                key={index}
                className='border-b border-neutral-30 dark:border-neutral-80'
              >
                <td className='align-middle px-4 py-7 whitespace-nowrap lg:px-0'>
                  <div className='flex items-center space-x-2 w-full'>
                    <AiOutlineStar className='h-4 mr-2 text-neutral-60 w-4' />
                    {/* write coins number base on paginationPage  */}
                    {index + 1 + paginationPage * 10}
                  </div>
                </td>
                <td className='align-middle px-4 py-2 whitespace-nowrap lg:px-4'>
                  <button
                    type='button'
                    className='flex items-center w-full'
                    data-hs-overlay='#coinDetails-overlay'
                  >
                    <div className='h-8 mr-2 w-8'>
                      <NextImage
                        alt='Bitcoin'
                        src={coin.logo}
                        width={32}
                        height={32}
                      />
                    </div>
                    <p className='font-medium mr-1 text-sm'>{coin.name}</p>
                    <p className='capitalize font-medium text-neutral-50 text-sm'>
                      {coin.code}
                    </p>
                  </button>
                </td>
                <td className='align-middle px-4 py-2 whitespace-nowrap lg:px-4'>
                  <div className='flex items-center w-full'>
                    <p className='font-medium text-sm'>{coin.price}</p>
                  </div>
                </td>
                <td className='align-middle px-4 py-2 whitespace-nowrap lg:px-4'>
                  <div className='flex items-center justify-center w-full'>
                    <p className='font-medium text-sm'>{coin.priceChange}</p>
                  </div>
                </td>
                <td className='align-middle px-4 py-2 whitespace-nowrap lg:px-4'>
                  <div className='flex items-center space-x-1 w-full'>
                    {coin['1h']?.change === 'down' ? (
                      <FaChevronDown className='h-3 text-red-500 w-3 dark:text-red-semantic' />
                    ) : (
                      <FaChevronUp className='h-3 text-green-500 w-3' />
                    )}
                    <p
                      className={clsxm(
                        'font-medium text-sm',
                        coin['1h']?.change === 'down'
                          ? 'text-red-500 dark:text-red-semantic '
                          : 'text-green-500 '
                      )}
                    >
                      {coin['1h'].changePercent}
                    </p>
                  </div>
                </td>
                <td className='align-middle px-4 py-2 whitespace-nowrap lg:px-4'>
                  <div className='flex items-center space-x-1 w-full'>
                    {coin['24h']?.change === 'down' ? (
                      <FaChevronDown className='h-3 text-red-500 w-3 dark:text-red-semantic' />
                    ) : (
                      <FaChevronUp className='h-3 text-green-500 w-3' />
                    )}
                    <p
                      className={clsxm(
                        'font-medium text-sm',
                        coin['24h']?.change === 'down'
                          ? 'text-red-500 dark:text-red-semantic '
                          : 'text-green-500 '
                      )}
                    >
                      {coin['1h'].changePercent}
                    </p>
                  </div>
                </td>
                <td className='align-middle px-4 py-2 whitespace-nowrap lg:px-4'>
                  <div className='flex items-center space-x-1 w-full'>
                    {coin['7d']?.change === 'down' ? (
                      <FaChevronDown className='h-3 text-red-500 w-3 dark:text-red-semantic' />
                    ) : (
                      <FaChevronUp className='h-3 text-green-500 w-3' />
                    )}
                    <p
                      className={clsxm(
                        'font-medium text-sm',
                        coin['7d']?.change === 'down'
                          ? 'text-red-500 dark:text-red-semantic '
                          : 'text-green-500 '
                      )}
                    >
                      {coin['1h'].changePercent}
                    </p>
                  </div>
                </td>
                <td className='align-middle px-4 py-2 text-right whitespace-nowrap lg:px-4'>
                  <div className='flex items-center justify-end space-x-1 w-full'>
                    <p className='font-medium text-sm'>{coin.marketCap}</p>
                  </div>
                </td>
                <td className='align-middle px-4 py-2 whitespace-nowrap lg:px-4'>
                  <div className='flex items-center justify-end space-x-1 w-full'>
                    <p className='font-medium text-sm'>{coin.volume}</p>
                  </div>
                </td>
                <td className='align-middle px-4 py-2 whitespace-nowrap lg:px-4'>
                  <div className='flex items-center justify-end space-x-1 w-full'>
                    <p className='font-medium text-sm'>{coin.supply}</p>
                  </div>
                </td>
                <td className='align-middle px-4 py-2 whitespace-nowrap lg:px-4'>
                  <div className='flex items-center justify-end space-x-1 w-full'>
                    <p className='font-medium text-sm'>{coin.liquidity}</p>
                  </div>
                </td>
                <td className='align-middle px-4 py-2 whitespace-nowrap lg:pl-4'>
                  <div className='flex items-center justify-end w-full'>
                    {coin.graph === 'down' ? (
                      <GraphDown className='h-8 w-auto' />
                    ) : (
                      <GraphUp className='h-8 w-auto' />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex flex-col mt-2 sm:flex-row lg:items-center lg:justify-between lg:mb-[88px] lg:mt-8'>
        <p className='font-medium mt-4 order-2 text-sm lg:mt-0 lg:order-1'>
          {' '}
          Showing {paginationPage + 1} to 10 of {Coins?.length} entries
        </p>
        <div className='flex flex-nowrap font-medium justify-end min-w-min mt-4 order-1 overflow-x-auto self-start space-x-3 text-sm w-full sm:mt-0 lg:order-2 lg:overflow-hidden lg:self-auto'>
          <button
            className='border border-neutral-30 px-3 py-2 rounded-lg text-xs dark:border-neutral-80'
            onClick={() => {
              if (paginationPage) {
                setPaginationPage(paginationPage - 1);
                window.scrollTo(0, 0);
              }
            }}
          >
            Previous
          </button>
          {renderPageNumbers}

          <button
            className='border border-neutral-30 px-3 py-2 rounded-lg text-xs dark:border-neutral-80'
            onClick={() => {
              if (paginationPage < Coins.length / 10 - 1) {
                setPaginationPage(paginationPage + 1);
                window.scrollTo(0, 0);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
      <CoinDetails />
      <Script src='/js/preline.js' />
    </>
  );
};

export default TableCoins;
