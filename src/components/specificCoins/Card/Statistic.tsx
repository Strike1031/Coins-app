import React, { FC } from 'react';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Statistic: FC<{
  title: string;
  price: string;
  change: string;
  percent: string;
  progress?: boolean;
}> = ({ title, price, change, percent, progress = false }) => {
  return (
    <div className='max-w-[234px] flex flex-col w-full'>
      <div className='flex items-center mb-8'>
        <p className='text-neutral-60 mr-2 text-base font-medium capitalize'>
          {title}
        </p>
        <BsExclamationCircleFill className='text-neutral-40 w-4 h-4' />
      </div>
      {progress ? (
        <div className='flex flex-col'>
          <div className='flex items-center mb-4'>
            <h6 className='font-bold'>{price}</h6>
            <h6 className='text-neutral-60 ml-auto font-normal'>{percent}%</h6>
          </div>
          <div className='bg-neutral-20 w-full h-2 rounded-full dark:bg-dark-200'>
            <div
              className='h-2 bg-primary-500 rounded-full'
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <>
          <h6 className='mb-2 font-bold'>${price}</h6>
          <span className='flex items-center'>
            {change === 'down' ? (
              <FaChevronDown className='mr-1 w-3 h-3 text-red-500 dark:text-red-semantic' />
            ) : (
              <FaChevronUp className='mr-1 w-3 h-3 text-green-500' />
            )}
            <p className='text-sm font-medium text-red-500 dark:text-red-semantic'>
              {percent}%
            </p>
          </span>
        </>
      )}
    </div>
  );
};

export default Statistic;
