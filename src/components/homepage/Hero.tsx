import React, { FC } from 'react';

import Container from '../Common/Container';
import NextImage from '../Common/NextImage';

const Hero: FC = () => {
  return (
    <section id='hero' className='w-full bg-white'>
      <Container>
        <div className='grid grid-cols-12 gap-6 mt-24'>
          <div className='flex flex-col col-span-6'>
            <h1 className='text-neutral-100 mb-8 w-11/12'>
              Lorem Ipsum Dolor Sit Amet Adipscing
            </h1>
            <p className='max-w-[470px] w-10/12 text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              pulvinar sem ante feugiat suscipit aenean gravida quis tincidunt.{' '}
            </p>
          </div>
          <div className='col-span-6'>
            <NextImage
              alt='Illustration'
              src={'/images/hero-illustration.png'}
              className='max-h-[537px] max-w-[532px] ml-auto w-full h-full'
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
