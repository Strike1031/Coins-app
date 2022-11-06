import React, { FC } from 'react';

import Container from '../Common/Container';
import NextImage from '../Common/NextImage';

const Hero: FC = () => {
  return (
    <section id='hero' className='bg-white w-full'>
      <Container>
        <div className='gap-6 grid grid-cols-12 mt-24'>
          <div className='col-span-6 flex flex-col'>
            <h1 className='mb-8 text-neutral-100 w-11/12'>
              All Token Price Change by 5M, 1H, 6H, 1D
            </h1>
            <p className='max-w-[470px] text-lg text-neutral-100 w-10/12'>
              Realtime price charts and trading history on DEXes across
              Ethereum, BSC, Polygon, Avalanche, Fantom, Harmony, Cronos,
              Arbitrum, Optimism and more.{' '}
            </p>
          </div>
          <div className='col-span-6'>
            <NextImage
              alt='Illustration'
              src={'/images/hero-illustration.png'}
              className='h-full max-h-[537px] max-w-[532px] ml-auto w-full'
              width={'532px'}
              height={'537px'}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
