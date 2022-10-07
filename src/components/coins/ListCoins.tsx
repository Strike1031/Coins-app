import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

import TableCoins from './TableCoins';
import Button from '../Common/Button';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

const solutions = [
  {
    name: 'All Coins',
  },
  {
    name: 'Uniswap',
  },
  {
    name: 'Pancakeswap',
  },
];
const time = [
  '10 minutes',
  '30 minutes',
  '1 hour',
  '3 hour',
  '7 hour',
  '12 hour',
  '24 hour',
  '3 days',
  '7 days',
  '30 days',
];
const ListCoins = () => {
  return (
    <section id='list-coins' className='w-full'>
      <Container>
        <Grid>
          <div className='flex overflow-x-auto relative col-span-full items-center pb-3 lg:col-span-8 lg:pb-0'>
            <Button variant='light' className='text-neutral-60 px-4 py-2'>
              Favorites
            </Button>
            <Button
              variant='primary'
              className='px-4 py-2 text-sm text-white whitespace-nowrap lg:text-base'
            >
              Cryptocurrencies
            </Button>
            <Button
              variant='light'
              className='text-neutral-60 px-4 py-2 text-sm whitespace-nowrap lg:text-base'
            >
              New Added
            </Button>
            <Button
              variant='light'
              className='text-neutral-60 px-4 py-2 text-sm whitespace-nowrap lg:text-base'
            >
              DeFi
            </Button>
            <Button
              variant='light'
              className='text-neutral-60 px-4 py-2 text-sm whitespace-nowrap lg:text-base'
            >
              Stablecoin
            </Button>
            <Button
              variant='light'
              className='text-neutral-60 px-4 py-2 text-sm whitespace-nowrap lg:text-base'
            >
              NFT
            </Button>
            <Button
              variant='light'
              className='text-neutral-60 px-4 py-2 text-sm whitespace-nowrap lg:text-base'
            >
              Metaverse
            </Button>
            <button className='flex sticky top-0 right-0 bottom-0 z-10 justify-end items-center w-7 h-full bg-white dark:bg-dark-100'>
              <FaChevronRight className='w-4 h-4 text-primary-500' />
            </button>
          </div>
          <div className='flex overflow-x-auto overflow-y-hidden relative col-span-full items-center pb-3 space-x-2 lg:col-span-4 lg:col-end-13 lg:pb-0'>
            <div className='w-auto'>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${
                  open
                    ? 'border-primary-500 dark:border-primary-200'
                    : 'text-opacity-90 border-neutral-30 dark:border-neutral-80'
                }
                py-2 px-4  text-sm border font-normal  rounded-l-full rounded-r-full flex items-center hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 whitespace-nowrap`}
                    >
                      <span>View by</span>
                      <FaChevronDown
                        className={`${
                          open
                            ? 'rotate-180 text-primary-500 dark:text-primary-200'
                            : 'text-opacity-70 rotate-0 text-neutral-50'
                        }
                  ml-2 h-3 w-3  group-hover:text-opacity-80 transition ease-in-out duration-150`}
                        aria-hidden='true'
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='max-w-[222px] absolute right-0 z-10 mt-2 w-screen transform sm:px-0'>
                        <div className='shadow-dropdown overflow-hidden'>
                          <div className='flex flex-col w-full bg-white rounded-xl dark:bg-dark-200'>
                            {solutions.map((item, index) => (
                              <p
                                key={index}
                                className='px-3 py-2 text-xs cursor-pointer dark:hover:bg-neutral-80 hover:bg-neutral-30'
                              >
                                {item.name}
                              </p>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
            <div className='w-auto'>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${
                  open
                    ? 'border-primary-500 dark:border-primary-200'
                    : 'text-opacity-90 border-neutral-30 dark:border-neutral-80'
                }
                py-2 px-4  text-sm border font-normal  rounded-l-full rounded-r-full flex items-center hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 whitespace-nowrap`}
                    >
                      <span>Top last coin</span>
                      <FaChevronDown
                        className={`${
                          open
                            ? 'rotate-180 text-primary-500 dark:text-primary-200'
                            : 'text-opacity-70 rotate-0 text-neutral-50'
                        }
                  ml-2 h-3 w-3  group-hover:text-opacity-80 transition ease-in-out duration-150`}
                        aria-hidden='true'
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='max-w-[222px] absolute right-0 z-10 mt-2 w-screen transform sm:px-0'>
                        <div className='shadow-dropdown overflow-hidden'>
                          <div className='flex flex-col w-full bg-white rounded-xl dark:bg-dark-200'>
                            {solutions.map((item, index) => (
                              <p
                                key={index}
                                className='px-3 py-2 text-xs cursor-pointer dark:hover:bg-neutral-80 hover:bg-neutral-30'
                              >
                                {item.name}
                              </p>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
            <div className='w-auto'>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${
                  open
                    ? 'border-primary-500 dark:border-primary-200'
                    : 'text-opacity-90 border-neutral-30 dark:border-neutral-80'
                }
                py-2 px-4  text-sm border font-normal  rounded-l-full rounded-r-full flex items-center hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 whitespace-nowrap`}
                    >
                      <span>Top coin</span>
                      <FaChevronDown
                        className={`${
                          open
                            ? 'rotate-180 text-primary-500 dark:text-primary-200'
                            : 'text-opacity-70 rotate-0 text-neutral-50'
                        }
                  ml-2 h-3 w-3  group-hover:text-opacity-80 transition ease-in-out duration-150`}
                        aria-hidden='true'
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='max-w-[222px] absolute right-0 z-10 mt-2 w-screen transform sm:px-0'>
                        <div className='shadow-dropdown overflow-hidden'>
                          <div className='flex flex-col pb-3 w-full bg-white rounded-xl dark:bg-dark-200'>
                            <p className='text-neutral-60 px-3 py-2 mt-2 text-xs dark:text-neutral-50'>
                              Period
                            </p>
                            <hr className='border-neutral-30 dark:border-neutral-80' />
                            {time.map((item, index) => (
                              <p
                                key={index}
                                className='px-3 py-2 text-xs cursor-pointer dark:hover:bg-neutral-80 hover:bg-neutral-30'
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
          <div className='col-span-full mt-4 lg:mt-6'>
            <TableCoins />
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default ListCoins;
