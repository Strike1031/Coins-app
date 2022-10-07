import React, { FC } from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { BsBarChartFill } from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

import EnigmaIcon from '@/assets/coins/enigma.svg';

import CardMarket from './CardMarket';
import DashIcon from '../../../../public/logo/coins/dash.svg';
import TieronIcon from '../../../../public/logo/coins/tieron.svg';

const ListCardDekstop: FC = () => {
  return (
    <>
      <div className='col-span-4'>
        <CardMarket>
          <div className='flex items-center mb-8 w-full'>
            <AiFillClockCircle className='text-neutral-60 mr-2 w-4 h-4 dark:text-neutral-50' />
            <p className='text-base font-bold'>Recently Added</p>
            <div className='flex ml-auto'>
              <button className='flex justify-center items-center w-6 h-5'>
                <FaChevronLeft className='text-neutral-40 w-4 h-4' />
              </button>
              <button className='flex justify-center items-center w-6 h-5'>
                <FaChevronRight className='w-4 h-4 text-primary-500' />
              </button>
            </div>
          </div>
          <div className='flex flex-col space-y-6 w-full'>
            <div className='flex items-center w-full'>
              <p className='mr-4 text-sm font-medium'>1</p>
              <EnigmaIcon className='mr-2 w-7 h-7' />
              <span className='flex items-center'>
                <p className='mr-1 text-sm font-medium'>Enigma</p>
                <p className='text-neutral-50 text-xs capitalize'>ENG</p>
              </span>
              <div className='flex ml-auto'>
                <p className='text-neutral-60 text-sm font-medium'>Unknown</p>
              </div>
            </div>
            <div className='flex items-center w-full'>
              <p className='mr-4 text-sm font-medium'>2</p>
              <DashIcon className='mr-2 w-7 h-7' />
              <span className='flex items-center'>
                <p className='mr-1 text-sm font-medium'>QASH</p>
                <p className='text-neutral-50 text-xs capitalize'>QASH</p>
              </span>
              <div className='flex items-center ml-auto text-red-500 dark:text-red-semantic'>
                <FaChevronDown className='mr-1 w-3 h-3' />
                <p className='text-sm font-medium'>0,86%</p>
              </div>
            </div>
            <div className='flex items-center w-full'>
              <p className='mr-4 text-sm font-medium'>3</p>
              <TieronIcon className='mr-2 w-7 h-7' />
              <span className='flex items-center'>
                <p className='mr-1 text-sm font-medium'>Tieron</p>
                <p className='text-neutral-50 text-xs capitalize'>TNT</p>
              </span>
              <div className='flex items-center ml-auto text-green-500'>
                <FaChevronUp className='mr-1 w-3 h-3' />
                <p className='text-sm font-medium'>0,01%</p>
              </div>
            </div>
          </div>
        </CardMarket>
      </div>
      <div className='col-span-4'>
        <CardMarket>
          <div className='flex items-center mb-8 w-full'>
            <HiLightningBolt className='text-neutral-60 mr-2 w-4 h-4 dark:text-neutral-50' />
            <p className='text-base font-bold'>Trending</p>
            <div className='flex ml-auto'>
              <button className='flex justify-center items-center w-6 h-5'>
                <FaChevronLeft className='text-neutral-40 w-4 h-4' />
              </button>
              <button className='flex justify-center items-center w-6 h-5'>
                <FaChevronRight className='w-4 h-4 text-primary-500' />
              </button>
            </div>
          </div>
          <div className='flex flex-col space-y-6 w-full'>
            <div className='flex items-center w-full'>
              <p className='mr-4 text-sm font-medium'>1</p>
              <EnigmaIcon className='mr-2 w-7 h-7' />
              <span className='flex items-center'>
                <p className='mr-1 text-sm font-medium'>Enigma</p>
                <p className='text-neutral-50 text-xs capitalize'>ENG</p>
              </span>
              <div className='flex ml-auto'>
                <p className='text-neutral-60 text-sm font-medium'>Unknown</p>
              </div>
            </div>
            <div className='flex items-center w-full'>
              <p className='mr-4 text-sm font-medium'>2</p>
              <DashIcon className='mr-2 w-7 h-7' />
              <span className='flex items-center'>
                <p className='mr-1 text-sm font-medium'>QASH</p>
                <p className='text-neutral-50 text-xs capitalize'>QASH</p>
              </span>
              <div className='flex items-center ml-auto text-red-500 dark:text-red-semantic'>
                <FaChevronDown className='mr-1 w-3 h-3' />
                <p className='text-sm font-medium'>0,86%</p>
              </div>
            </div>
            <div className='flex items-center w-full'>
              <p className='mr-4 text-sm font-medium'>3</p>
              <TieronIcon className='mr-2 w-7 h-7' />
              <span className='flex items-center'>
                <p className='mr-1 text-sm font-medium'>Tieron</p>
                <p className='text-neutral-50 text-xs capitalize'>TNT</p>
              </span>
              <div className='flex items-center ml-auto text-green-500'>
                <FaChevronUp className='mr-1 w-3 h-3' />
                <p className='text-sm font-medium'>0,01%</p>
              </div>
            </div>
          </div>
        </CardMarket>
      </div>
      <div className='col-span-4'>
        <CardMarket>
          <div className='flex items-center mb-8 w-full'>
            <BsBarChartFill className='text-neutral-60 mr-2 w-4 h-4 dark:text-neutral-50' />
            <p className='text-base font-bold'>Top Gainers</p>
            <div className='flex ml-auto'>
              <button className='flex justify-center items-center w-6 h-5'>
                <FaChevronLeft className='text-neutral-40 w-4 h-4' />
              </button>
              <button className='flex justify-center items-center w-6 h-5'>
                <FaChevronRight className='w-4 h-4 text-primary-500' />
              </button>
            </div>
          </div>
          <div className='flex flex-col space-y-6 w-full'>
            <div className='flex items-center w-full'>
              <p className='mr-4 text-sm font-medium'>1</p>
              <EnigmaIcon className='mr-2 w-7 h-7' />
              <span className='flex items-center'>
                <p className='mr-1 text-sm font-medium'>Enigma</p>
                <p className='text-neutral-50 text-xs capitalize'>ENG</p>
              </span>
              <div className='flex ml-auto'>
                <p className='text-neutral-60 text-sm font-medium'>Unknown</p>
              </div>
            </div>
            <div className='flex items-center w-full'>
              <p className='mr-4 text-sm font-medium'>2</p>
              <DashIcon className='mr-2 w-7 h-7' />
              <span className='flex items-center'>
                <p className='mr-1 text-sm font-medium'>QASH</p>
                <p className='text-neutral-50 text-xs capitalize'>QASH</p>
              </span>
              <div className='flex items-center ml-auto text-red-500 dark:text-red-semantic'>
                <FaChevronDown className='mr-1 w-3 h-3' />
                <p className='text-sm font-medium'>0,86%</p>
              </div>
            </div>
            <div className='flex items-center w-full'>
              <p className='mr-4 text-sm font-medium'>3</p>
              <TieronIcon className='mr-2 w-7 h-7' />
              <span className='flex items-center'>
                <p className='mr-1 text-sm font-medium'>Tieron</p>
                <p className='text-neutral-50 text-xs capitalize'>TNT</p>
              </span>
              <div className='flex items-center ml-auto text-green-500'>
                <FaChevronUp className='mr-1 w-3 h-3' />
                <p className='text-sm font-medium'>0,01%</p>
              </div>
            </div>
          </div>
        </CardMarket>
      </div>
    </>
  );
};

export default ListCardDekstop;
