import React, { FC } from 'react';

import Grid from '@/components/Common/Grid';
import NextImage from '@/components/Common/NextImage';

import Dots from '@/assets/dots.svg';

type CardNewsProps = {
  title: string;
  description: string;
  image: string;
  source: string;
  time: string;
};
const CardNews: FC<CardNewsProps> = ({
  title,
  description,
  image,
  source,
  time,
}) => {
  return (
    <Grid className='w-full'>
      <div className='flex flex-col col-span-7 justify-center space-y-6'>
        <h5>{title}</h5>
        <p className='text-md text-neutral-60'>{description}</p>
        <div className='flex items-center space-x-2'>
          <p className='text-md font-medium'>{source}</p>
          <Dots className='text-neutral-30 w-2 h-2' />
          <p className='text-md text-neutral-60'>{time}</p>
        </div>
      </div>
      <div className='flex col-span-4 col-end-13 justify-end'>
        <div>
          <NextImage
            src={image}
            width={371}
            height={250}
            quality={100}
            alt={title}
          />
        </div>
      </div>
    </Grid>
  );
};

export default CardNews;
