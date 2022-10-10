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
              className='flex-shrink-0 h-8 inline-flex items-center justify-center rounded-md text-sm text-white-500 w-8 dark:focus:ring-offset-white-800 dark:focus:ring-white-700 dark:hover:text-white-400 dark:text-white-500 hover:text-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white-400'
              data-hs-overlay='#coinDetails-overlay'
            >
              <span className='sr-only'>Close modal</span>
              <svg
                className='h-3.5 w-3.5'
                width='8'
                height='8'
                viewBox='0 0 8 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z'
                  fill='currentColor'
                />
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
                  role='comboBox'
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
                      src='/images/coinDetails/47cxwsny72lbsrc1t48r38v9hxoo.png'
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
        <div className='border-r fixed hidden inset-y-0 min-h-0 overflow-y-hidden scrollbar-thin top-[88px] w-14 sm:block dark:bg-black dark:border-gray-800 hover:overflow-y-auto'>
          <nav className='align-top justify-start overflow-y-auto p-2 scrollbar-thin space-y-1'>
            <a
              href='https://www.geckoterminal.com/watchlist'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='h-6 mr-0 w-6' aria-hidden='true'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                      className='fill-star-yellow'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/arbitrum/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/b5pxe6whp95sgklpatj9rfkkj4ji.svg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/arbitrum_nova/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/xiqrdcmzicnnr4fawm12dcp0g3kf.svg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/astr/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/rm87elm746l9vgxyq88dml7x1udh.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/aurora/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/8bnknlwon3wi0np7txxd99uxol2k.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/avax/pools'
              className='bg-gray-600/50 flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 text-white hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/47cxwsny72lbsrc1t48r38v9hxoo.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/bitgert/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/gtt49ljjjyojwtgshpe9t7bnmrhi.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/bsc/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/rk3bsa3pl5h3h7frn6etl1v4opsz.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/boba/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/lmlla15z97y66ceca9e5nbb0lgg5.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/canto/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/6p7bfea2bd6ifatgssykqzw5p574.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/celo/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/eo2pnrjpolnmkjz9mqg49m2llvrh.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/clover_finance/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/gb0afhp6drbqc8a0ucy49z0hscec.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/cfx/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/qp51sy0ufgluirujbend31p1f1u7.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/cro/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/6umwmj6uoeqxmfl6odnqx3hy3acc.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/cube_network/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/53ondrgcmdfb7w34qi5y9w6h45tk.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/dfk/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/6v3kvp820kr4xvvdiz4sgw7g07tq.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/dogechain/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/3kt9opfq8r5eig5s9tg5etoa1xdx.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/echelon/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/vg7rcnqhcnh0jsreltplknd0babd.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/ela/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/6pa821cyq6tu87l9375hnv1dh0tg.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/nrg/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/7p7fo7ielfncyx9lxugq0s0bf72b.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/eth/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/bqu4tzciplldg2ojzx6ww5hd09ii.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/ethereum_classNameic/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/t1f73zr4fk5i7negdktb8qd6u6aq.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/ethereumfair/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/lznpgj67yx7dstbdyhvqvoxh5omd.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/ethw/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/o3mkgufpqi9wt4x9lu2dqlhopvir.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/evmos/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/cu7rb0tormsx93qyx4ggb0lii355.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/ftm/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/uvjtu2wc4pkwdqvoqkegb6zzib3n.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/findora/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/4wxhxn53o3dzay0dailkk0cm67pb.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/fuse/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/mnn4d9yihx1nvd17uxdlqekflukw.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/xdai/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/2r4p3wwade58b92610xv46bef838.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/godwoken/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/edd6hj05xdckak4n977danr7051h.svg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/one/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/d21nu5y6v36xg1k0b2h6m6kiorxe.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/hsc/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/gewd0xos8d6lmqks1iqpesuzqzh6.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/heco/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/pyefqee8axmmadetm76j3vae1wdz.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/iotx/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/6baqslljjd54lb8rloyg0a30s0mi.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/kai/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/c27sibb2pyik3jw55hzerw7fshj4.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/kava/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/9lx52nbtjvtdzgr62jx4hxv5ui1o.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/kekchain/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/w5uzq9iq0wk8mordhcc6n0uyavq0.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/klaytn/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/jau52fbj8581xzasvr70vpjjnuzm.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/kcc/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/92qqv1zcvsa94mz4dx2sm46cn49j.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/mtr/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/0rrmdg4oroqkpswwmk4c9mljdh3k.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/metis/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/83e41lwqghcvo6lv0p11o2v2370j.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/milkada/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/tq5jr2dn9hom0fymvvtd846c5zeg.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/glmr/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/eq0poqyieb7md6yynb4eveplp7dp.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/movr/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/pvvr0s3uxspq23w0edm2xhyss8zu.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/oasis/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/rucvydmropv3zq78yrru9l7xhnib.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/oec/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/f7x1b66v3g4s7uh6wd2osnkv9ssy.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/optimism/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/ugp5lpdi5adfizqj66tam5yl1zfm.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/polygon_pos/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/dau5esiwuf9jj9r0jchj9qgdhy8g.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/redlight_chain/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/bstairgtyh7jgynhj2g1mqciityk.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/ronin/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/dh5x7l6vsoccgge3bcx6hjqlpq95.svg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/shibchain/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/s1chvhnfk4ned8kf37vicizfmcyq.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/sdn/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/e1j6djmgvdxtqt8hfqg6no5w77an.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/bch/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/ffk9srcy5zwjl7wj7tpynh961yyt.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/solana/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/ttmzp815hr8hanm6bwxp549dq9rp.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/songbird/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/9w3lzd9lr4tu9kvwnke5ysptwwc6.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/step-network/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/8kw8l0036yg0g2tuur0ao2felq4n.jpg'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/sxn/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/58tuicteq1ccwzyfynqcsy4drdoj.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/sys/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/lxvbcx0wchxytg1to4rfs9d5d76l.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/tlos/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/rqpxwj9akldvcveaf8mq0b0t1czd.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/terra/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/16qi25by7w5af4lbtntk9altpr0o.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/thundercore/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/pz9kni4ylr1c59cd6u9yiul8jbuh.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/tombchain/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/84p4hmm3v4mqzjaiplps6hvzb6q6.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/tomochain/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/9r2rzkm28bpd3xjmxdt41mgqvfz9.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/velas/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/fejak8s0thn4yswe1qbjijkehnxi.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
            <a
              href='https://www.geckoterminal.com/wan/pools'
              className='flex font-medium group items-center px-2 py-2 rounded-md text-base text-gray-300 hover:bg-gray-600/30 hover:text-white'
            >
              <span className='inline-block'>
                <div>
                  <div className='flex flex-shrink-0 h-6 mr-0 w-6'>
                    <NextImage
                      alt=''
                      src='/images/coinDetails/oq5q9xux1xzf17d9ssi0pylt7f4h.png'
                      width='25'
                      height='25'
                      decoding='async'
                      data-nimg='future'
                    />
                  </div>
                </div>
              </span>
            </a>
          </nav>
        </div>
        <div className='flex flex-col min-w-0 overflow-hidden text-gray-400 sm:ml-14'>
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
                      <h1 className='mb-1 text-gray-400'>
                        <span
                          className='block max-w-full truncate'
                          title='Wrapped AVAX Price (WAVAX)'
                        >
                          Wrapped AVAX Price (WAVAX)
                        </span>
                      </h1>
                      <div className='flex gap-2 items-center mb-2 text-3xl text-white md:gap-3 lg:mb-4'>
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
                              className='fill-transparent stroke-2 stroke-star-yellow'
                            >
                              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                            </svg>
                          </button>
                          <div className='absolute'></div>
                        </div>
                        <a
                          className='flex'
                          href='https://www.geckoterminal.com/avax/pools'
                        >
                          <span className='bg-gray-400/30 flex font-medium gap-1 h-full inline-flex items-center items-center leading-none px-2.5 py-1 rounded-full text-gray-200 text-xs uppercase hover:text-white'>
                            <div className='flex flex-shrink-0'>
                              <NextImage
                                alt=''
                                src='/images/coinDetails/47cxwsny72lbsrc1t48r38v9hxoo(1).png'
                                width='15'
                                height='15'
                                decoding='async'
                                data-nimg='future'
                              />
                            </div>{' '}
                            avax
                          </span>
                        </a>
                        <a
                          className='flex'
                          href='https://www.geckoterminal.com/avax/traderjoe/pools'
                        >
                          <span className='bg-gray-400/30 flex font-medium gap-1 h-full inline-flex items-center items-center leading-none px-2.5 py-1 rounded-full text-gray-200 text-xs hover:text-white'>
                            <div className='flex flex-shrink-0'>
                              <NextImage
                                alt=''
                                src='/images/coinDetails/bdeeu5zvptlz3favfc8n8c3bmynn.png'
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
                            <span className='bg-gray-400/30 flex font-medium gap-1 inline-flex items-center items-center leading-none px-3 py-1 rounded rounded-full text-gray-200 text-sm'>
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
                            <span className='bg-gray-400/30 flex font-medium gap-1 inline-flex items-center items-center leading-none px-3 py-1 rounded rounded-full text-gray-200 text-sm'>
                              <div className='flex flex-shrink-0'>
                                <NextImage
                                  alt=''
                                  src='/images/coinDetails/wrapped-avax(1).png'
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
                            <span className='bg-gray-400/30 flex font-medium gap-1 inline-flex items-center items-center leading-none px-3 py-1 rounded rounded-full text-gray-200 text-sm'>
                              <div className='flex flex-shrink-0'>
                                <NextImage
                                  alt=''
                                  src='/images/coinDetails/USD_Coin_icon(1).png'
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
                                  src='/images/coinDetails/bdeeu5zvptlz3favfc8n8c3bmynn.png'
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
                      style={{ height: 'calc(60% - 2.5px)' }}
                    >
                      <div className='h-full'>
                        <div className='TVChartContainer h-full min-w-full'>
                          <iframe
                            id='tradingview_fd83c'
                            name='tradingview_fd83c'
                            src='/images/coinDetails/en-tv-chart.9df149da.html'
                            title='Financial Chart'
                            frameBorder='0'
                            // allowTransparency='true'
                            scrolling='no'
                            // allowFullScreen=''

                            style={{
                              display: 'block',
                              width: '100%',
                              height: '100%',
                            }}
                          ></iframe>
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
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>
                                      <span className='hidden md:inline'>
                                        49 seconds ago
                                      </span>
                                      <span className='md:hidden'>
                                        49 sec. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-red-500'>
                                      sell
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>5.6211</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>5.6211</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x096...9231
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0xc4536be6322daa14379f0e8df73b21e4607578eb91d3d81bd0cb711caefc522d'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>
                                      <span className='hidden md:inline'>
                                        5 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        5 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-red-500'>
                                      sell
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>3</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>3</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0xc57...8a70
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0x994159a68599e367384dcf80f134bd0d95a2a4ec48665c729d3169e77e59d9fa'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      <span className='hidden md:inline'>
                                        6 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        6 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-green-500'>
                                      buy
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>0.9614</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>0.9614</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0xdb6...f498
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0x43bad387edca1931216d592a614662cf49a264497d617d77a4ebc8469f5455ba'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      <span className='hidden md:inline'>
                                        6 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        6 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-green-500'>
                                      buy
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>0.75</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>0.75</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x60a...33d4
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0x3ae41d872c7245d15a3190ee44a6d6cd301d1ba191863773598f5dc2b8c1dfb5'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      <span className='hidden md:inline'>
                                        7 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        7 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-green-500'>
                                      buy
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>0.2686</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>0.2686</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x60a...33d4
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0xac9fbd7e9169b9e9dae8853d76af55024008e9cb62167dc07ac6bcbd3e10a320'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      <span className='hidden md:inline'>
                                        8 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        8 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-green-500'>
                                      buy
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>24.38</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>24.38</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x60a...33d4
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0x7a35279b032689bb307c2e9cc03a9ccf67f50a8c1833857565f7ea1cf516fae3'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      <span className='hidden md:inline'>
                                        10 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        10 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-green-500'>
                                      buy
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>0.3015</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>0.3015</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x60a...33d4
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0xe9dd46264bc9226e3d09fecea6341be1b68820148a25ee8a5b2d76d76e3ee4ab'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      <span className='hidden md:inline'>
                                        10 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        10 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-green-500'>
                                      buy
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      0.01193
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      0.01193
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x60a...33d4
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0xa041f55f8c21ef891d7d516b66902564d476f461a85aec077a3037a04073556a'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      <span className='hidden md:inline'>
                                        10 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        10 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-green-500'>
                                      buy
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      0.03215
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      0.03215
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x4b9...094d
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0xfb0a4de31dc69b0c74948a5847e4358db899949792a2532f6a135a0e6f3ad055'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      <span className='hidden md:inline'>
                                        11 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        11 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-green-500'>
                                      buy
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>0.8</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>0.8</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x60a...33d4
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0x108ad9d40c8c5ff9e9d734e928d048c5b941c4d9bae215fa511ad35aa227ae46'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>
                                      <span className='hidden md:inline'>
                                        11 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        11 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-red-500'>
                                      sell
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>0.03234</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>0.03234</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x315...45f3
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0x0fd1ac7cdffb69c9b5e85c6ee15512b8a3f4abe0ac44c054ce7fd18d5a9fb267'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      <span className='hidden md:inline'>
                                        12 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        12 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-green-500'>
                                      buy
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>59.47</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>59.47</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x60a...33d4
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0x472ea5124ede5955abdadd098f96bba3a697edd300ceeed12a985b71a5344868'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>
                                      <span className='hidden md:inline'>
                                        13 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        13 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-red-500'>
                                      sell
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>9.274</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>9.274</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0xa42...12f3
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0xdbdbc31465fa650430caeb7815057db66480e8f01bbe0352a01e6ad947623a6b'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>
                                      <span className='hidden md:inline'>
                                        13 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        13 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-red-500'>
                                      sell
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>38.84</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>38.84</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0xa9b...8579
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0xdcc65053bffd4bd03e5c5b297207318d17e8baec5fa2a35321213bf6ed6b5369'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      <span className='hidden md:inline'>
                                        13 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        13 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-green-500'>
                                      buy
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1.0155</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1.0155</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0xe7e...c285
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0xe062020c3afb8a9bf672e25e754d82e4b636daeeb123757aa9fc03bac684b75f'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>
                                      <span className='hidden md:inline'>
                                        13 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        13 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-red-500'>
                                      sell
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>47.2</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>47.2</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x2d8...ce64
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0xdf0961e1c5227dc40ad9c83a19a2112164aac7e1036d595e57231384f884a8de'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>
                                      <span className='hidden md:inline'>
                                        14 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        14 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-red-500'>
                                      sell
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>59.84</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>59.84</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0xfcb...9c3c
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0x9853eb7d4fccb7aa3f3e33685beda7fdb1290db6c6860425790bf31455486987'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>
                                      <span className='hidden md:inline'>
                                        14 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        14 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-red-500'>
                                      sell
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>8.3484</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-red-500'>8.3484</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x6dd...caf6
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0x2f0afaa3484ecdf0449290e70ed85dcaabef9fd027538dfa8258fd1594f50158'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      <span className='hidden md:inline'>
                                        17 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        17 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-green-500'>
                                      buy
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      0.04926
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      0.04926
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x0b4...3225
                                  </td>
                                  <td
                                    className='bg-black border-b border-gray-800/80 px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0xc95697333ff11e57bd2a61e0004bed229d6c8097be97fd36fff04359da37becd'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr className='divide-gray-800/80 divide-x text-gray-300 text-sm'>
                                  <td
                                    className='bg-black px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>
                                      <span className='hidden md:inline'>
                                        17 minutes ago
                                      </span>
                                      <span className='md:hidden'>
                                        17 min. ago
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='capitalize text-green-500'>
                                      buy
                                    </div>
                                  </td>
                                  <td
                                    className='bg-black px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>1</div>
                                  </td>
                                  <td
                                    className='bg-black px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>$16.77</div>
                                  </td>
                                  <td
                                    className='bg-black px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>7.9525</div>
                                  </td>
                                  <td
                                    className='bg-black px-4 py-1 text-right whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <div className='text-green-500'>7.9525</div>
                                  </td>
                                  <td
                                    className='bg-black px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    0x60a...33d4
                                  </td>
                                  <td
                                    className='bg-black px-4 py-1 whitespace-nowrap md:py-1.5'
                                    colSpan={1}
                                  >
                                    <a
                                      className='dark:hover:text-violet-400 dark:text-violet-500 hover:underline'
                                      href='https://snowtrace.io/tx/0xf7cb48b069a3e078f84dc8ec2904f07c2dd613cc7268133585e0738ee92b50dc'
                                      target='_blank'
                                      rel='noreferrer noopener'
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
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
                                  href='https://www.geckoterminal.com/avax/pools/0xf4003f4efbe8691b60249e6afbd307abe7758adb'
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
                                  href='https://www.geckoterminal.com/avax/pools/0xf4003f4efbe8691b60249e6afbd307abe7758adb'
                                >
                                  1
                                </a>
                                <a
                                  className='border border-gray-200 font-medium inline-flex items-center px-4 py-2 relative text-gray-400 text-sm dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:bg-gray-50'
                                  href='https://www.geckoterminal.com/avax/pools/0xf4003f4efbe8691b60249e6afbd307abe7758adb'
                                >
                                  2
                                </a>
                                <a
                                  className='border border-gray-200 font-medium inline-flex items-center px-4 py-2 relative text-gray-400 text-sm dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:bg-gray-50'
                                  href='https://www.geckoterminal.com/avax/pools/0xf4003f4efbe8691b60249e6afbd307abe7758adb'
                                >
                                  3
                                </a>
                                <a
                                  className='border border-gray-200 font-medium inline-flex items-center pointer-events-none px-4 py-2 relative text-gray-400 text-sm dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:bg-gray-50'
                                  href='https://www.geckoterminal.com/avax/pools/0xf4003f4efbe8691b60249e6afbd307abe7758adb'
                                >
                                  ...
                                </a>
                                <a
                                  className='border border-gray-200 font-medium inline-flex items-center px-4 py-2 relative text-gray-400 text-sm dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:bg-gray-50'
                                  href='https://www.geckoterminal.com/avax/pools/0xf4003f4efbe8691b60249e6afbd307abe7758adb'
                                >
                                  717
                                </a>
                                <a
                                  className='border border-gray-200 font-medium inline-flex items-center pr-2 px-4 py-2 relative rounded-r-md text-gray-400 text-sm dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:bg-gray-50'
                                  href='https://www.geckoterminal.com/avax/pools/0xf4003f4efbe8691b60249e6afbd307abe7758adb'
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
