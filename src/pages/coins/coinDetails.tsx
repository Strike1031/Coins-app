import { AdvancedChart } from 'react-tradingview-embed';

import exchangeHistoryDummy from '@/data/exchangeHistoryDummy';

// import { TechnicalAnalysis } from 'react-ts-tradingview-widgets';
import NextImage from '@/components/Common/NextImage';
const CoinDetails = () => {
  return (
    <div
      id='coinDetails-overlay'
      className='-translate-x-full bg-white border-r duration-300 fixed h-full hidden hs-overlay hs-overlay-open:translate-x-0 left-0 max-w-100 top-0 transform transition-all w-full z-[60] dark:bg-gray-800 dark:border-gray-700'
      tabIndex={-1}
    >
      <div id='__next'>
        <div className='flex flex-col-reverse sticky top-0 z-20 sm:flex-col'>
          <div className='bg-gray-900 border-b border-gray-800 flex gap-2 h-[32px] items-center justify-center px-4 py-1.5 sticky text-gray-200 text-xs top-14 w-full z-10 sm:gap-4 sm:top-0'>
            <button
              type='button'
              className='absolute flex-shrink-0 h-8 items-center left-6 rounded-md text-sm text-white-500 top-0 w-8 dark:focus:ring-offset-white-800 dark:focus:ring-white-700 dark:hover:text-white-400 dark:text-white-500 hover:text-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white-400'
              data-hs-overlay='#coinDetails-overlay'
            >
              <span className='sr-only'>Close modal</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='16'
                fill='currentColor'
                className='bi bi-arrow-return-left'
                viewBox='0 0 32 16'
              >
                {' '}
                <path
                  fill='currentColor'
                  d='M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z'
                />{' '}
              </svg>
            </button>
            <div className='flex gap-1 items-center'>
              <span className='text-gray-300'>Networks :</span>
              <span className='font-medium hidden text-violet-400 sm:inline'>
                64
              </span>
              <span className='font-medium text-violet-400 sm:hidden'>64</span>
            </div>
            <div className='flex gap-1 items-center'>
              <span className='text-gray-300'>Dexes :</span>
              <span className='font-medium hidden text-violet-400 sm:inline'>
                326
              </span>
              <span className='font-medium text-violet-400 sm:hidden'>326</span>
            </div>
            <div className='flex gap-1 items-center'>
              <span className='text-gray-300'>Pools :</span>
              <span className='font-medium hidden text-violet-400 sm:inline'>
                1,155,806
              </span>
              <span className='font-medium text-violet-400 sm:hidden'>1M</span>
            </div>
            <div className='flex gap-1 items-center'>
              <span className='text-gray-300'>Tokens :</span>
              <span className='font-medium hidden text-violet-400 sm:inline'>
                1,040,904
              </span>
              <span className='font-medium text-violet-400 sm:hidden'>1M</span>
            </div>
          </div>
          <nav className='border-b flex h-14 items-center py-2 shadow-md sticky top-0 z-20 sm:top-[32px] dark:bg-gray-900 dark:border-gray-800 dark:shadow-gray-600/10'>
            <div className='flex gap-1 items-center px-2 w-full sm:gap-4 md:w-auto'>
              <div className='flex gap-1 items-center p-2'>
                <div className='hidden xl:inline-block'>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center p-2 rounded-full dark:focus:bg-violet-400/30 dark:hover:bg-violet-400/30 dark:text-gray-50'
                  >
                    <span className='sr-only'>Show networks list</span>
                  </button>
                </div>
              </div>
              <div
                id='autocomplete'
                className='ml-auto relative sm:ml-0 sm:w-80'
              >
                <span className='sr-only'>Searchbar</span>
                <span className='absolute bg-violet-400/50 hidden px-1.5 py-0.5 right-2 rounded text-violet-200/80 text-xs top-[6px] sm:block'>
                  /
                </span>
                <div
                  className='aa-Autocomplete'
                  role='combobox'
                  aria-expanded='false'
                  aria-haspopup='listbox'
                  aria-labelledby='autocomplete-27-label'
                >
                  <button type='button' className='aa-DetachedSearchButton'>
                    <div className='aa-DetachedSearchButtonIcon'>
                      <svg
                        className='aa-SubmitIcon'
                        viewBox='0 0 24 24'
                        width='20'
                        height='20'
                        fill='currentColor'
                      >
                        <path d='M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z'></path>
                      </svg>
                    </div>
                    <div className='aa-DetachedSearchButtonPlaceholder'>
                      Search network, dex or tokens
                    </div>
                  </button>
                </div>
              </div>
              <div className='ml-2 sm:block md:ml-4'>
                <div className='flex space-x-4'>
                  <a
                    className='flex font-medium items-center px-3 py-2 relative rounded-md text-gray-300 text-sm whitespace-nowrap hover:bg-gray-600/30 hover:text-white'
                    href='https://www.geckoterminal.com/ethwars'
                  >
                    <span className='mr-2'>⚔️ ETH Wars</span>
                    <span className='absolute bg-red-500 leading-none p-0.5 right-1 rounded text-[7px] text-white top-0 sm:hidden'>
                      New
                    </span>
                    <span className='bg-red-600 font-medium inline-flex items-center leading-none px-2.5 py-1 rounded-full text-red-100 text-xs sm:inline'>
                      New
                    </span>
                  </a>
                </div>
              </div>
              <button
                type='button'
                className='bg-gradient-to-r from-violet-800 gap-1 inline-flex items-center mr-2 px-2.5 py-1.5 rounded-full text-gray-50 text-sm to-indigo-600 sm:hidden hover:bg-violet-700 focus:bg-violet-700'
              >
                <span className='sr-only'>Open sidebar</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  aria-hidden='true'
                  className='h-5 mr-2 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h7'
                  ></path>
                </svg>
                <div className='flex gap-2 items-center xs:max-w-[25vw]'>
                  <div className='flex flex-shrink-0 h-5 w-5'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/wrapped-avax.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                  <span className='max-w-[200px] truncate xxs:hidden'>
                    Avalanche
                  </span>
                </div>
              </button>
            </div>
          </nav>
        </div>
        <div className='flex flex-col min-w-0 overflow-hidden text-gray-400'>
          <main>
            <div className='pb-10 px-0'>
              <div className='grid grid-cols-12 md:divide-gray-800 md:divide-x'>
                <div className='col-span-12 flex flex-col gap-2 overflow-x-hidden overflow-y-auto pt-4 px-4 scrollbar-thin md:col-span-5 md:h-screen-layout md:p-4 lg:col-span-4 xl:col-span-4 2xl:col-span-3'>
                  <nav className='mb-1 lg:mb-2' aria-label='breadcrumbs'>
                    <ol className='flex flex-row items-center text-gray-400'>
                      <li>
                        <svg
                          className='cursor-pointer flex-shrink-0 h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          href='/'
                        >
                          <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
                        </svg>
                      </li>
                      <li className='flex flex-row items-center text-sm lg:text-base'>
                        <svg
                          className='flex-shrink-0 h-5 text-gray-400 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          aria-hidden='true'
                        >
                          <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z'></path>
                        </svg>
                        <a
                          className='font-bold gap-2 inline-flex items-center'
                          href='https://www.geckoterminal.com/avax/pools'
                        >
                          <span className='truncate'>Avalanche</span>
                        </a>
                      </li>
                      <li className='flex flex-row items-center text-sm lg:text-base'>
                        <svg
                          className='flex-shrink-0 h-5 text-gray-400 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          aria-hidden='true'
                        >
                          <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z'></path>
                        </svg>
                        <a
                          className='gap-2 inline-flex items-center'
                          href='https://www.geckoterminal.com/avax/traderjoe/pools'
                        >
                          <span className='truncate'>TraderJoe</span>
                        </a>
                      </li>
                    </ol>
                  </nav>
                  <div>
                    <div className='flex items-center'>
                      <div className='flex gap-x-1 items-center mr-2 lg:mr-4'>
                        <div className='flex flex-shrink-0'>
                          <NextImage
                            alt=''
                            src='/images/coinDetails/wrapped-avax.png'
                            width='25'
                            height='25'
                            decoding='async'
                            data-nimg='future'
                          />
                        </div>
                        <div className='flex flex-shrink-0'>
                          <NextImage
                            alt=''
                            src='/images/coinDetails/USD_Coin_icon.png'
                            width='25'
                            height='25'
                            decoding='async'
                            data-nimg='future'
                          />
                        </div>
                      </div>
                      <div className='flex font-light gap-1 items-center mr-2 text-gray-200 text-sm lg:text-base'>
                        <span className='font-bold inline-block truncate'>
                          WAVAX
                        </span>
                        <span>/</span>
                        <span className='inline-block truncate'>USDC</span>
                      </div>
                      <div className='flex items-center'>
                        <button>
                          <svg
                            className='flex-shrink-0 h-5 w-5'
                            viewBox='0 0 512 512'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <defs>
                              <clipPath id='a'>
                                <path d='M345.37 9.375c12.5-12.5 32.75-12.5 45.25 0l112 112c12.5 12.5 12.5 32.75 0 45.25l-112 112C384.38 284.875 376.2 288 368 288c-8.2 0-16.4-3.1-22.58-9.37-12.5-12.5-12.5-32.75 0-45.25L402.8 176H32c-17.69 0-32-14.31-32-32 0-17.69 14.31-32 32-32h370.8l-57.43-57.375c-12.5-12.5-12.5-32.75 0-45.25Z'></path>
                              </clipPath>
                              <clipPath id='b'>
                                <path d='M121.375 9.375c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-57.38 57.38h370.7c17.7 0 32 14.31 32 32 0 17.69-14.31 32-32 32h-370.7l57.32 57.375c12.5 12.5 12.5 32.75 0 45.25-6.24 6.25-14.42 9.375-22.62 9.375-8.2 0-16.4-3.1-22.57-9.38l-112-112c-12.5-12.5-12.5-32.75 0-45.25Z'></path>
                              </clipPath>
                            </defs>
                            <g clipPath='url(#a)'>
                              <path
                                fill='#bb86fc'
                                d='M0 0h511.995v288H0V0z'
                              ></path>
                            </g>
                            <g
                              clipPath='url(#b)'
                              transform='translate(0 256) scale(0.75)'
                            >
                              <path
                                fill='#bb86fc'
                                opacity='60%'
                                d='M0 0h511.945v288.005H0V0z'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className='my-2 lg:my-4'>
                      <h6 className='mb-1 text-gray-400'>
                        <span
                          className='block max-w-full truncate'
                          title='Wrapped AVAX Price (WAVAX)'
                        >
                          Wrapped AVAX Price (WAVAX)
                        </span>
                      </h6>
                      <div className='flex gap-2 items-center mb-2 text-2xl text-white md:gap-3 lg:mb-4'>
                        <span id='pool-price-display'>$16.77</span>
                        <span className='bg-red-600 font-medium inline-flex items-center leading-none px-2.5 py-1 rounded-full text-red-100 text-xs'>
                          -2.73%
                        </span>
                      </div>
                      <div className='flex flex-wrap gap-2 items-center mt-2'>
                        <div className='relative'>
                          <button
                            className='bg-gray-400/30 flex-shrink-0 items-center px-3 py-1.5 rounded shadow-sm hover:bg-gray-400/40 active:outline-none active:ring-2 active:ring-violet-500'
                            id='headlessui-menu-button-:rn:'
                            type='button'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              aria-hidden='true'
                              width='20'
                              height='20'
                              style={{
                                strokeWidth: '2',
                                stroke: '#fc6',
                                fill: 'transparent',
                              }}
                            >
                              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                            </svg>
                          </button>
                          <div className='absolute'></div>
                        </div>
                        <a className='flex' href='/avax/pools'>
                          <span className='bg-gray-400/30 font-medium gap-1 h-full inline-flex items-center leading-none px-2.5 py-1 rounded-full text-gray-200 text-xs uppercase hover:text-white'>
                            <div className='flex flex-shrink-0'>
                              <NextImage
                                alt=''
                                src='/images/coinDetails/wrapped-avax.png'
                                width='15'
                                height='15'
                                decoding='async'
                                data-nimg='future'
                              />
                            </div>{' '}
                            avax
                          </span>
                        </a>
                        <a className='flex' href='/avax/traderjoe/pools'>
                          <span className='bg-gray-400/30 font-medium gap-1 h-full inline-flex items-center leading-none px-2.5 py-1 rounded-full text-gray-200 text-xs hover:text-white'>
                            <div className='flex flex-shrink-0'>
                              <NextImage
                                alt=''
                                src='/images/coinDetails/traderJoe.png'
                                width='15'
                                height='15'
                                decoding='async'
                                data-nimg='future'
                              />
                            </div>{' '}
                            TraderJoe
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className='my-4'>
                      <div className='gap-2 grid grid-cols-3'>
                        <div className='bg-gray-500/60 flex flex-col items-center p-1 rounded'>
                          <span>0%</span>
                          <span className='text-gray-300 text-sm'>5m</span>
                        </div>
                        <div className='bg-red-600/60 flex flex-col items-center p-1 rounded text-red-300'>
                          <span>-0.02%</span>
                          <span className='text-gray-300 text-sm'>15m</span>
                        </div>
                        <div className='bg-red-600/60 flex flex-col items-center p-1 rounded text-red-300'>
                          <span>-0.46%</span>
                          <span className='text-gray-300 text-sm'>30m</span>
                        </div>
                        <div className='bg-red-600/60 flex flex-col items-center p-1 rounded text-red-300'>
                          <span>-0.9%</span>
                          <span className='text-gray-300 text-sm'>1h</span>
                        </div>
                        <div className='bg-red-600/60 flex flex-col items-center p-1 rounded text-red-300'>
                          <span>-1.86%</span>
                          <span className='text-gray-300 text-sm'>6h</span>
                        </div>
                        <div className='bg-red-600/60 flex flex-col items-center p-1 rounded text-red-300'>
                          <span>-2.73%</span>
                          <span className='text-gray-300 text-sm'>24h</span>
                        </div>
                      </div>
                      <div className='bg-gray-500/20 mt-4 p-0 rounded-md'>
                        <nav
                          className='flex p-1 relative rounded-tl-md rounded-tr-md z-0'
                          aria-label='Tabs'
                        >
                          <a className='cursor-pointer flex-1 font-medium group min-w-0 overflow-hidden p-2 relative text-center text-gray-500 text-sm hover:text-gray-200 focus:z-10'>
                            <span>5m</span>
                          </a>
                          <a className='cursor-pointer flex-1 font-medium group min-w-0 overflow-hidden p-2 relative text-center text-gray-500 text-sm hover:text-gray-200 focus:z-10'>
                            <span>15m</span>
                          </a>
                          <a className='cursor-pointer flex-1 font-medium group min-w-0 overflow-hidden p-2 relative text-center text-gray-500 text-sm hover:text-gray-200 focus:z-10'>
                            <span>30m</span>
                          </a>
                          <a className='cursor-pointer flex-1 font-medium group min-w-0 overflow-hidden p-2 relative text-center text-gray-500 text-sm hover:text-gray-200 focus:z-10'>
                            <span>1h</span>
                          </a>
                          <a className='cursor-pointer flex-1 font-medium group min-w-0 overflow-hidden p-2 relative text-center text-gray-500 text-sm hover:text-gray-200 focus:z-10'>
                            <span>6h</span>
                          </a>
                          <a
                            className='bg-black cursor-pointer drop-shadow-md flex-1 font-medium group min-w-0 overflow-hidden p-2 relative rounded-md text-center text-gray-200 text-sm focus:z-10'
                            aria-current='page'
                          >
                            <span>24h</span>
                          </a>
                        </nav>
                        <div className='gap-2 grid grid-cols-4 px-4 py-2'>
                          <div className='flex flex-col gap-1 items-center text-sm'>
                            <span className='font-light text-gray-500 uppercase'>
                              Txns
                            </span>
                            <span className='text-gray-200'>1,862</span>
                          </div>
                          <div className='flex flex-col gap-1 items-center text-sm'>
                            <span className='font-light text-gray-500 uppercase'>
                              Buys
                            </span>
                            <span className='text-gray-200'>900</span>
                          </div>
                          <div className='flex flex-col gap-1 items-center text-sm'>
                            <span className='font-light text-gray-500 uppercase'>
                              Sells
                            </span>
                            <span className='text-gray-200'>962</span>
                          </div>
                          <div className='flex flex-col gap-1 items-center text-sm'>
                            <span className='font-light text-gray-500 uppercase'>
                              Volume
                            </span>
                            <span className='text-gray-200'>$2.61M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:flex md:flex-col md:gap-2'>
                    <div className='gap-2 grid grid-cols-4 mt-4 lg:gap-3'>
                      <div className='col-span-2 flex flex-col'>
                        <small className='text-gray-400'>
                          Fully Diluted Valuation
                        </small>
                        <span className='text-gray-200'>$141.61M</span>
                      </div>
                      <div className='col-span-2 flex flex-col'>
                        <small className='text-gray-400'>
                          Total Liquidity (USD)
                        </small>
                        <span className='text-gray-200'>$23.41M</span>
                      </div>
                      <div className='col-span-2 flex flex-col'>
                        <small className='text-gray-400'>
                          24hr Trading Volume
                        </small>
                        <span className='text-gray-200'>$2.61M</span>
                      </div>
                      <div className='col-span-2 flex flex-col'>
                        <small className='text-gray-400'>Market Cap</small>
                        <span className='text-gray-200'>-</span>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <h3 className='font-bold hidden mb-2 text-gray-500 text-xs uppercase md:block'>
                        Quick Links
                      </h3>
                      <div className='flex flex-col gap-1 lg:gap-2'>
                        <div className='grid grid-cols-4 items-center'>
                          <span className='col-span-1 text-sm truncate'>
                            Pair
                          </span>
                          <div className='col-span-3 flex gap-2 items-center'>
                            <span className='bg-gray-400/30 font-medium gap-1 inline-flex items-center leading-none px-3 py-1 rounded-full text-gray-200 text-sm'>
                              <div>0xf40...8adb</div>
                            </span>
                            <div className='flex gap-0.5 items-center'>
                              <div>
                                <button className='block'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    aria-hidden='true'
                                    className='fill-gray-400'
                                    width='18'
                                    height='18'
                                  >
                                    <path d='M8 2a1 1 0 000 2h2a1 1 0 100-2H8z'></path>
                                    <path d='M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z'></path>
                                  </svg>
                                </button>
                              </div>
                              <div>
                                <a
                                  href='https://snowtrace.io/address/0xf4003f4efbe8691b60249e6afbd307abe7758adb'
                                  target='_blank'
                                  rel='noreferrer'
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    aria-hidden='true'
                                    className='fill-gray-400'
                                    width='18'
                                    height='18'
                                  >
                                    <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                                    <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='grid grid-cols-4 items-center'>
                          <span className='col-span-1 text-sm truncate'>
                            WAVAX
                          </span>
                          <div className='col-span-3 flex gap-2 items-center'>
                            <span className='bg-gray-400/30 font-medium gap-1 inline-flex items-center leading-none px-3 py-1 rounded-full text-gray-200 text-sm'>
                              <div className='flex flex-shrink-0'>
                                <NextImage
                                  alt=''
                                  src='/images/coinDetails/wrapped-avax.png'
                                  width='15'
                                  height='15'
                                  decoding='async'
                                  data-nimg='future'
                                />
                              </div>
                              <div>0xb31...66c7</div>
                            </span>
                            <div className='flex gap-0.5 items-center'>
                              <div>
                                <button className='block'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    aria-hidden='true'
                                    className='fill-gray-400'
                                    width='18'
                                    height='18'
                                  >
                                    <path d='M8 2a1 1 0 000 2h2a1 1 0 100-2H8z'></path>
                                    <path d='M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z'></path>
                                  </svg>
                                </button>
                              </div>
                              <div>
                                <a
                                  href='https://snowtrace.io/address/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
                                  target='_blank'
                                  rel='noreferrer'
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    aria-hidden='true'
                                    className='fill-gray-400'
                                    width='18'
                                    height='18'
                                  >
                                    <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                                    <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
                                  </svg>
                                </a>
                              </div>
                              <div>
                                <a
                                  href='https://www.coingecko.com/coins/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7?utm_source=geckoterminal&amp;utm_medium=referral&amp;utm_campaign=badge'
                                  target='_blank'
                                  rel='noreferrer'
                                >
                                  <div className='flex flex-shrink-0 h-[18px] w-[18px]'>
                                    <NextImage
                                      alt=''
                                      src='/images/coinDetails/coingecko.png'
                                      width='25'
                                      height='25'
                                      decoding='async'
                                      data-nimg='future'
                                    />
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='grid grid-cols-4 items-center'>
                          <span className='col-span-1 text-sm truncate'>
                            USDC
                          </span>
                          <div className='col-span-3 flex gap-2 items-center'>
                            <span className='bg-gray-400/30 font-medium gap-1 inline-flex items-center leading-none px-3 py-1 rounded-full text-gray-200 text-sm'>
                              <div className='flex flex-shrink-0'>
                                <NextImage
                                  alt=''
                                  src='/images/coinDetails/USD_Coin_icon.png'
                                  width='15'
                                  height='15'
                                  decoding='async'
                                  data-nimg='future'
                                />
                              </div>
                              <div>0xb97...8a6e</div>
                            </span>
                            <div className='flex gap-0.5 items-center'>
                              <div>
                                <button className='block'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    aria-hidden='true'
                                    className='fill-gray-400'
                                    width='18'
                                    height='18'
                                  >
                                    <path d='M8 2a1 1 0 000 2h2a1 1 0 100-2H8z'></path>
                                    <path d='M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z'></path>
                                  </svg>
                                </button>
                              </div>
                              <div>
                                <a
                                  href='https://snowtrace.io/address/0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e'
                                  target='_blank'
                                  rel='noreferrer'
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    aria-hidden='true'
                                    className='fill-gray-400'
                                    width='18'
                                    height='18'
                                  >
                                    <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                                    <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
                                  </svg>
                                </a>
                              </div>
                              <div>
                                <a
                                  href='https://www.coingecko.com/coins/0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e?utm_source=geckoterminal&amp;utm_medium=referral&amp;utm_campaign=badge'
                                  target='_blank'
                                  rel='noreferrer'
                                >
                                  <div className='flex flex-shrink-0 h-[18px] w-[18px]'>
                                    <NextImage
                                      alt=''
                                      src='/images/coinDetails/coingecko.png'
                                      width='25'
                                      height='25'
                                      decoding='async'
                                      data-nimg='future'
                                    />
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='grid grid-cols-4 items-center'>
                          <span className='col-span-1 text-sm'>Trade</span>
                          <div className='col-span-3 flex items-center'>
                            <button className='bg-gray-700 border border-transparent flex font-medium gap-2 items-center px-2.5 py-1.5 rounded shadow-sm text-white text-xs hover:bg-gray-800 focus:outline-none'>
                              Swap on
                              <div className='flex flex-shrink-0'>
                                <NextImage
                                  alt=''
                                  src='/images/coinDetails/traderJoe.png'
                                  width='16'
                                  height='16'
                                  decoding='async'
                                  data-nimg='future'
                                />
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className='grid grid-cols-4 items-center'>
                          <span className='col-span-1 text-sm'>Share</span>
                          <div className='col-span-3 flex items-center'>
                            <div className='flex flex-row items-center space-x-2'>
                              <span
                                style={{
                                  lineHeight: '0',
                                  transform: 'translateY(0%)',
                                  transition: 'transform 100ms ease 0s',
                                }}
                              >
                                <button
                                  aria-label='facebook'
                                  className='react-share__ShareButton'
                                  style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    padding: '0px',
                                    font: 'inherit',
                                    color: 'inherit',
                                    cursor: 'pointer',
                                  }}
                                >
                                  <svg
                                    viewBox='0 0 64 64'
                                    width='30'
                                    height='30'
                                    className='rounded-sm'
                                  >
                                    <rect
                                      width='64'
                                      height='64'
                                      rx='0'
                                      ry='0'
                                      fill='#3b5998'
                                    ></rect>
                                    <path
                                      d='M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z'
                                      fill='white'
                                    ></path>
                                  </svg>
                                </button>
                              </span>
                              <span
                                style={{
                                  lineHeight: '0',
                                  transform: 'translateY(0%)',
                                  transition: 'transform 100ms ease 0s',
                                }}
                              >
                                <button
                                  aria-label='twitter'
                                  className='react-share__ShareButton'
                                  style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    padding: '0px',
                                    font: 'inherit',
                                    color: 'inherit',
                                    cursor: 'pointer',
                                  }}
                                >
                                  <svg
                                    viewBox='0 0 64 64'
                                    width='30'
                                    height='30'
                                    className='rounded-sm'
                                  >
                                    <rect
                                      width='64'
                                      height='64'
                                      rx='0'
                                      ry='0'
                                      fill='#00aced'
                                    ></rect>
                                    <path
                                      d='M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z'
                                      fill='white'
                                    ></path>
                                  </svg>
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='bg-gray-500/30 mt-4 mx-auto p-4 rounded-2xl w-full sm:w-3/4 md:w-full'>
                      <h3 className='font-medium mb-4 text-gray-200 text-sm'>
                        How do you feel about WAVAX today?
                      </h3>
                      <div className='mb-2 w-full'>
                        <div className='flex'>
                          <div
                            className='bg-green-600 leading-none overflow-hidden py-1 rounded text-center text-white text-xs'
                            style={{ width: '100%' }}
                          >
                            100%
                          </div>
                          <div
                            className='bg-red-600 leading-none overflow-hidden py-1 rounded-r text-center text-white text-xs'
                            style={{ width: '0%' }}
                          ></div>
                        </div>
                      </div>
                      <div className='flex items-center justify-between'>
                        <button className='bg-green-600 border border-transparent flex font-medium gap-2 items-center px-2.5 py-1.5 rounded shadow-sm text-white text-xs hover:bg-green-700 focus:outline-none'>
                          <div className='flex flex-shrink-0'>
                            <NextImage
                              alt=''
                              src='/images/coinDetails/good.svg'
                              width='16'
                              height='16'
                              decoding='async'
                              data-nimg='future'
                            />
                          </div>
                          Looking good
                        </button>
                        <button className='bg-red-600 border border-transparent flex font-medium gap-2 items-center px-2.5 py-1.5 rounded shadow-sm text-white text-xs hover:bg-red-700 focus:outline-none'>
                          <div className='flex flex-shrink-0'>
                            <NextImage
                              alt=''
                              src='/images/coinDetails/bad.svg'
                              width='16'
                              height='16'
                              decoding='async'
                              data-nimg='future'
                            />
                          </div>
                          Not so good
                        </button>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <div className='flex gap-2 items-center mb-2 lg:gap-4 lg:mb-4'>
                        <div className='flex flex-col'>
                          <h3 className='font-bold hidden text-gray-500 text-xs uppercase md:block'>
                            Token Info
                          </h3>
                          <small className='font-light text-[10px] text-gray-500'>
                            <a
                              className='text-green-600 hover:underline'
                              href='https://www.coingecko.com/'
                              target='_blank'
                              rel='noreferrer'
                            >
                              Powered By CoinGecko
                            </a>
                          </small>
                        </div>
                        <nav className='flex space-x-4' aria-label='Tabs'>
                          <button
                            className='bg-violet-600 font-medium px-2 py-1 rounded-md text-gray-200 text-sm'
                            aria-current='page'
                          >
                            WAVAX
                          </button>
                          <button className='font-medium px-2 py-1 rounded-md text-gray-500 text-sm hover:bg-violet-600/60 hover:text-gray-200'>
                            USDC
                          </button>
                        </nav>
                      </div>
                      <h2 className='font-semibold mb-2'>
                        About Wrapped AVAX (WAVAX)
                      </h2>
                      <p className='text-gray-600 whitespace-pre-wrap'>
                        No token info found for WAVAX
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-span-12 mb-4 md:hidden'>
                  <div className='mt-2'>
                    <div className='hidden mx-4 pb-4 pt-2'>
                      <label htmlFor='tabs' className='sr-only'>
                        Select a tab
                      </label>
                      <select
                        id='tabs'
                        name='tabs'
                        className='block border border-gray-600 rounded-md text-sm w-full lg:text-base dark:bg-gray-900 dark:text-gray-200 hover:bg-gray-50 focus:border-gray-700 focus:outline-none focus:ring-violet-500 focus:text-gray-700'
                      >
                        <option value='0'>Market Info</option>
                        <option value='1'>Quick Links</option>
                        <option value='2'>Token Info</option>
                      </select>
                    </div>
                    <div className='border-0'>
                      <div className='border-b border-gray-800 mb-4 overflow-x-auto px-4 scrollbar-thin thinner'>
                        <div className='mr-8'>
                          <nav className='flex space-x-4' aria-label='Tabs'>
                            <button
                              aria-current='page'
                              className='border-b-2 border-gray-300 font-medium group inline-flex items-center py-3 text-gray-200 text-sm'
                            >
                              <span className='whitespace-nowrap'>
                                Market Info
                              </span>
                            </button>
                            <button className='border-b-2 border-transparent font-medium group inline-flex items-center py-3 text-gray-400 text-sm hover:border-gray-400 hover:text-gray-300'>
                              <span className='whitespace-nowrap'>
                                Quick Links
                              </span>
                            </button>
                            <button className='border-b-2 border-transparent font-medium group inline-flex items-center py-3 text-gray-400 text-sm hover:border-gray-400 hover:text-gray-300'>
                              <span className='whitespace-nowrap'>
                                Token Info
                              </span>
                            </button>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='px-4'>
                    <div className='gap-2 grid grid-cols-4 mt-4 lg:gap-3'>
                      <div className='col-span-2 flex flex-col'>
                        <small className='text-gray-400'>
                          Fully Diluted Valuation
                        </small>
                        <span className='text-gray-200'>$141.61M</span>
                      </div>
                      <div className='col-span-2 flex flex-col'>
                        <small className='text-gray-400'>
                          Total Liquidity (USD)
                        </small>
                        <span className='text-gray-200'>$23.41M</span>
                      </div>
                      <div className='col-span-2 flex flex-col'>
                        <small className='text-gray-400'>
                          24hr Trading Volume
                        </small>
                        <span className='text-gray-200'>$2.61M</span>
                      </div>
                      <div className='col-span-2 flex flex-col'>
                        <small className='text-gray-400'>Market Cap</small>
                        <span className='text-gray-200'>-</span>
                      </div>
                    </div>
                    <div className='bg-gray-500/30 mt-4 mx-auto p-4 rounded-2xl w-full sm:w-3/4 md:w-full'>
                      <h3 className='font-medium mb-4 text-gray-200 text-sm'>
                        How do you feel about WAVAX today?
                      </h3>
                      <div className='mb-2 w-full'>
                        <div className='flex'>
                          <div
                            className='bg-green-600 leading-none overflow-hidden py-1 rounded text-center text-white text-xs'
                            style={{ width: '100%;' }}
                          >
                            100%
                          </div>
                          <div
                            className='bg-red-600 leading-none overflow-hidden py-1 rounded-r text-center text-white text-xs'
                            style={{ width: '0%' }}
                          ></div>
                        </div>
                      </div>
                      <div className='flex items-center justify-between'>
                        <button className='bg-green-600 border border-transparent flex font-medium gap-2 items-center px-2.5 py-1.5 rounded shadow-sm text-white text-xs hover:bg-green-700 focus:outline-none'>
                          <div className='flex flex-shrink-0'>
                            <NextImage
                              alt=''
                              src='/images/coinDetails/good.svg'
                              width='16'
                              height='16'
                              decoding='async'
                              data-nimg='future'
                            />
                          </div>
                          Looking good
                        </button>
                        <button className='bg-red-600 border border-transparent flex font-medium gap-2 items-center px-2.5 py-1.5 rounded shadow-sm text-white text-xs hover:bg-red-700 focus:outline-none'>
                          <div className='flex flex-shrink-0'>
                            <NextImage
                              alt=''
                              src='/images/coinDetails/bad.svg'
                              width='16'
                              height='16'
                              decoding='async'
                              data-nimg='future'
                            />
                          </div>
                          Not so good
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-12 px-4 py-4 md:col-span-7 md:px-0 md:py-0 lg:col-span-8 2xl:col-span-9'>
                  <div className='flex flex-col gap-2 md:gap-0 md:h-screen-layout'>
                    <div
                      className='flex-[0_0_400px] md:flex-auto'
                      style={{ height: 'calc(60% - 2.5px)', overflow: 'auto' }}
                    >
                      <div className='h-full'>
                        <div className='TVChartContainer h-full min-w-full'>
                          <AdvancedChart
                            widgetProps={{
                              symbol: 'NASDAQ:AAPL',
                              interval: '180',
                              timezone: 'America/Juneau',
                              theme: 'dark',
                              style: '1',
                              locale: 'en',
                              enable_publishing: false,
                              allow_symbol_change: true,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className='gutter gutter-vertical'
                      style={{ height: '5px' }}
                    ></div>
                    <div style={{ height: 'calc(40% - 2.5px)' }}>
                      <div className='flex flex-col h-full md:overflow-y-auto md:scrollbar-thin'>
                        <div className='overflow-auto'>
                          <div className='inline-block min-w-full scrollbar-thin'>
                            <table
                              className='border-b border-b-gray-800 border-separate border-t border-t-gray-800 min-w-full relative'
                              style={{ borderSpacing: '0px' }}
                            >
                              <thead>
                                <tr className='divide-gray-800/80 divide-x text-gray-200 text-sm dark:bg-black'>
                                  <th
                                    scope='col'
                                    className='backdrop-blur backdrop-filter bg-darkblue border-b border-gray-800/80 font-medium sticky text-left text-xs top-0 tracking-wider uppercase'
                                  >
                                    <div className='px-4 py-2 whitespace-nowrap md:py-3'>
                                      Time
                                    </div>
                                  </th>
                                  <th
                                    scope='col'
                                    className='backdrop-blur backdrop-filter bg-darkblue border-b border-gray-800/80 font-medium sticky text-left text-xs top-0 tracking-wider uppercase'
                                  >
                                    <div className='px-4 py-2 whitespace-nowrap md:py-3'>
                                      Type
                                    </div>
                                  </th>
                                  <th
                                    scope='col'
                                    className='backdrop-blur backdrop-filter bg-darkblue border-b border-gray-800/80 font-medium sticky text-right text-xs top-0 tracking-wider uppercase'
                                  >
                                    <div className='px-4 py-2 whitespace-nowrap md:py-3'>
                                      Price (AVAX)
                                    </div>
                                  </th>
                                  <th
                                    scope='col'
                                    className='backdrop-blur backdrop-filter bg-darkblue border-b border-gray-800/80 font-medium sticky text-right text-xs top-0 tracking-wider uppercase'
                                  >
                                    <div className='px-4 py-2 whitespace-nowrap md:py-3'>
                                      Price (usd)
                                    </div>
                                  </th>
                                  <th
                                    scope='col'
                                    className='backdrop-blur backdrop-filter bg-darkblue border-b border-gray-800/80 font-medium sticky text-right text-xs top-0 tracking-wider uppercase'
                                  >
                                    <div className='px-4 py-2 whitespace-nowrap md:py-3'>
                                      Amount (WAVAX)
                                    </div>
                                  </th>
                                  <th
                                    scope='col'
                                    className='backdrop-blur backdrop-filter bg-darkblue border-b border-gray-800/80 font-medium sticky text-right text-xs top-0 tracking-wider uppercase'
                                  >
                                    <div className='px-4 py-2 whitespace-nowrap md:py-3'>
                                      Total AVAX
                                    </div>
                                  </th>
                                  <th
                                    scope='col'
                                    className='backdrop-blur backdrop-filter bg-darkblue border-b border-gray-800/80 font-medium sticky text-left text-xs top-0 tracking-wider uppercase'
                                  >
                                    <div className='px-4 py-2 whitespace-nowrap md:py-3'>
                                      From
                                    </div>
                                  </th>
                                  <th
                                    scope='col'
                                    className='backdrop-blur backdrop-filter bg-darkblue border-b border-gray-800/80 font-medium sticky text-left text-xs top-0 tracking-wider uppercase'
                                  >
                                    <div className='px-4 py-2 whitespace-nowrap md:py-3'>
                                      TX
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {exchangeHistoryDummy.map((item, index) => (
                                  <tr
                                    key={index}
                                    className='divide-gray-800/80 divide-x text-gray-300 text-sm'
                                  >
                                    <td
                                      className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                      colSpan={1}
                                    >
                                      <div
                                        className={
                                          item.type === 'sell'
                                            ? 'text-red-500'
                                            : 'text-green-500'
                                        }
                                      >
                                        <span className='hidden md:inline'>
                                          {item.time}
                                        </span>
                                        <span className='md:hidden'>
                                          {item.time}
                                        </span>
                                      </div>
                                    </td>
                                    <td
                                      className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                      colSpan={1}
                                    >
                                      <div
                                        className={
                                          item.type === 'sell'
                                            ? 'capitalize text-red-500'
                                            : 'capitalize text-green-500'
                                        }
                                      >
                                        {item.type}
                                      </div>
                                    </td>
                                    <td
                                      className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                      colSpan={1}
                                    >
                                      <div
                                        className={
                                          item.type === 'sell'
                                            ? 'capitalize text-red-500'
                                            : 'capitalize text-green-500'
                                        }
                                      >
                                        {item.aprice}
                                      </div>
                                    </td>
                                    <td
                                      className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                      colSpan={1}
                                    >
                                      <div
                                        className={
                                          item.type === 'sell'
                                            ? 'capitalize text-red-500'
                                            : 'capitalize text-green-500'
                                        }
                                      >
                                        {item.bprice}
                                      </div>
                                    </td>
                                    <td
                                      className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                      colSpan={1}
                                    >
                                      <div
                                        className={
                                          item.type === 'sell'
                                            ? 'capitalize text-red-500'
                                            : 'capitalize text-green-500'
                                        }
                                      >
                                        {item.amount}
                                      </div>
                                    </td>
                                    <td
                                      className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                      colSpan={1}
                                    >
                                      <div
                                        className={
                                          item.type === 'sell'
                                            ? 'capitalize text-red-500'
                                            : 'capitalize text-green-500'
                                        }
                                      >
                                        {item.totalAmount}
                                      </div>
                                    </td>
                                    <td
                                      className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                      colSpan={1}
                                    >
                                      {item.address}
                                    </td>
                                    <td
                                      className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                      colSpan={1}
                                    >
                                      <a
                                        className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                        href={
                                          'https://snowtrace.io/tx/' + item.tx
                                        }
                                        target='_blank'
                                        rel='noreferrer noopener'
                                      >
                                        View
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className='flex flex-1 items-center my-2 px-4 py-1 sm:flex-none md:my-4 md:px-0'>
                          <div className='flex flex-1 items-center justify-center'>
                            <div>
                              <nav
                                className='-space-x-px inline-flex relative rounded-md shadow-sm z-0'
                                aria-label='Pagination'
                              >
                                <a
                                  className='border border-gray-200 font-medium inline-flex items-center pl-2 pointer-events-none px-4 py-2 relative rounded-l-md text-gray-400 text-sm dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:bg-gray-50'
                                  href='/history'
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    aria-hidden='true'
                                    className='h-4 w-4'
                                  >
                                    <path
                                      fillRule='evenodd'
                                      d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                                      clipRule='evenodd'
                                    ></path>
                                  </svg>
                                  Prev
                                </a>
                                <a
                                  className='bg-violet-50 border border-violet-500 font-medium inline-flex items-center pointer-events-none px-4 py-2 relative text-sm text-violet-600 z-10 dark:bg-gray-600 dark:border-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:text-gray-200 hover:bg-gray-50'
                                  href='/history'
                                >
                                  1
                                </a>
                                <a
                                  className='border border-gray-200 font-medium inline-flex items-center px-4 py-2 relative text-gray-400 text-sm dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:bg-gray-50'
                                  href='/history'
                                >
                                  2
                                </a>
                                <a
                                  className='border border-gray-200 font-medium inline-flex items-center px-4 py-2 relative text-gray-400 text-sm dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:bg-gray-50'
                                  href='/history'
                                >
                                  3
                                </a>
                                <a
                                  className='border border-gray-200 font-medium inline-flex items-center pointer-events-none px-4 py-2 relative text-gray-400 text-sm dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:bg-gray-50'
                                  href='/history'
                                >
                                  ...
                                </a>
                                <a
                                  className='border border-gray-200 font-medium inline-flex items-center px-4 py-2 relative text-gray-400 text-sm dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:bg-gray-50'
                                  href='/history'
                                >
                                  10
                                </a>
                                <a
                                  className='border border-gray-200 font-medium inline-flex items-center pr-2 px-4 py-2 relative rounded-r-md text-gray-400 text-sm dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:bg-gray-50'
                                  href='/history'
                                >
                                  Next
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    aria-hidden='true'
                                    className='h-4 w-4'
                                  >
                                    <path
                                      fillRule='evenodd'
                                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                      clipRule='evenodd'
                                    ></path>
                                  </svg>
                                </a>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='Toastify'></div>
          </main>
          <div className='bg-black border-gray-800 border-t p-4 px-4 relative rounded-none text-gray-400 text-xs w-full md:text-sm'>
            <div className='hidden md:block'>
              ⚠️ Disclaimer: All content provided herein our website,
              hyperlinked sites, associated applications, forums, blogs, social
              media accounts and other platforms (“Site”) is for your general
              information only, procured from third party sources. We make no
              warranties of any kind in relation to our content, including but
              not limited to accuracy and updatedness. No part of the content
              that we provide constitutes financial advice, legal advice or any
              other form of advice meant for your specific reliance for any
              purpose. Any use or reliance on our content is solely at your own
              risk and discretion. You should conduct your own research, review,
              analyse and verify our content before relying on them. Trading is
              a highly risky activity that can lead to major losses, please
              therefore consult your financial advisor before making any
              decision. No content on our Site is meant to be a solicitation or
              offer.
            </div>
            <div className='md:hidden'>
              <p className='line-clamp-3'>
                ⚠️ Disclaimer: All content provided herein our website,
                hyperlinked sites, associated applications, forums, blogs,
                social media accounts and other platforms (“Site”) is for your
                general information only, procured from third party sources. We
                make no warranties of any kind in relation to our content,
                including but not limited to accuracy and updatedness. No part
                of the content that we provide constitutes financial advice,
                legal advice or any other form of advice meant for your specific
                reliance for any purpose. Any use or reliance on our content is
                solely at your own risk and discretion. You should conduct your
                own research, review, analyse and verify our content before
                relying on them. Trading is a highly risky activity that can
                lead to major losses, please therefore consult your financial
                advisor before making any decision. No content on our Site is
                meant to be a solicitation or offer.
              </p>
              <button className='bg-black inline text-violet-400'>
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
