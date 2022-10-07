import React, { FC } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import Statistic from './Card/Statistic';
import Button from '../Common/Button';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import NextImage from '../Common/NextImage';

const Hero: FC = () => {
  const Menu = ['Buy', 'Exchange', 'Gaming', 'Earn Crypto'];
  const Tags = ['Mineable', 'DPoS', 'PoS', 'Platform', 'View all'];
  const [active, setActive] = React.useState<number>();
  // function active button base on index
  const toggleActive = (index: number) => {
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <section id='hero-coins' className='pb-[56px] pt-[88px] w-full'>
      <Container>
        <Grid>
          <div className='flex col-span-4'>
            <div className='bg-neutral-20 grid relative justify-center items-center mr-4 w-14 h-14 rounded-full'>
              <NextImage
                src='https://www.cryptocompare.com/media/37746235/ada.png'
                alt='Cardano Coins'
                width={36}
                quality={100}
                height={36}
              />
            </div>
            <div className='flex flex-col'>
              <div className='flex items-start mb-4'>
                <h4 className='mr-2 font-normal'>Cardano</h4>
                <h5 className='text-neutral-60 font-normal'>ADA</h5>
              </div>
              <div className='flex justify-end items-center'>
                <h2 className='mr-4 font-bold'>$1,26</h2>
                <span className='flex items-center'>
                  <FaChevronUp className='mr-1 w-4 h-4 text-green-500' />
                  <h5 className='font-medium text-green-500'>3.16%</h5>
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col col-span-5 col-end-13 items-end'>
            <div className='flex items-center mb-7 space-x-2'>
              {Menu.map((item, index) => (
                <Button
                  variant='light'
                  className='px-3 py-1 text-base font-bold text-primary-500 dark:text-white'
                  key={index}
                >
                  {item}
                  <FaChevronDown className='ml-1 w-3 h-3 dark:text-white' />
                </Button>
              ))}
            </div>
            <div className='w-auto'>
              <div className='mr-auto mb-2'>
                <p className='text-neutral-60 text-sm font-medium'>Tags:</p>
              </div>
              <div className='flex items-center space-x-2'>
                {Tags.map((item, index) => (
                  <Button
                    variant={active === index ? 'outline' : 'gray'}
                    className='px-4 py-2 text-sm font-medium'
                    key={index}
                    onClick={() => toggleActive(index)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className='col-span-full pt-12'>
            <div className='border-neutral-10 flex items-center p-8 space-x-10 rounded-xl border dark:border-neutral-80'>
              <Statistic
                title='Market Cap'
                price='43,714,005,787'
                percent='3.00'
                change='down'
              />
              <hr className='border-neutral-30 h-[80px] border-r' />
              <Statistic
                title='Fully Diluted'
                price='56,546,192,748'
                percent='2,96'
                change='down'
              />
              <hr className='border-neutral-30 h-[80px] border-r' />
              <Statistic
                title='Volume (24)'
                price='1,659,250,497'
                percent='3.00'
                change='down'
              />
              <hr className='border-neutral-30 h-[80px] border-r' />
              <Statistic
                title='Circulating Supply'
                price='1,659,250,497'
                percent='80'
                change='down'
                progress={true}
              />
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
