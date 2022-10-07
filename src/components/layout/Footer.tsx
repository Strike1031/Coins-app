import { useTheme } from 'next-themes';
import React, { FC } from 'react';

import Container from '../Common/Container';
import Grid from '../Common/Grid';
import LogoFooter from '../../../public/logo/logo-footer.svg';
import LogoFooterDark from '../../../public/logo/logo-footer-white.svg';

const Footer: FC = () => {
  const { theme } = useTheme();

  return (
    <footer className='max-h-[389px] pt-12 w-full bg-white lg:pt-16 dark:bg-dark-100'>
      <Container>
        <Grid>
          <div className='flex flex-col col-span-full lg:col-span-4'>
            {theme === 'dark' ? (
              <LogoFooterDark className='h-[50px] w-[154px] mb-4' />
            ) : (
              <LogoFooter className='h-[50px] w-[154px] mb-4' />
            )}
            <p className='text-neutral-60 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              pulvinar sem ante feugiat suscipit aenean gravida quis tincidunt.{' '}
            </p>
          </div>
          <div className='flex flex-col col-span-full justify-between lg:flex-row lg:col-span-5 lg:col-end-13'>
            <div className='grid grid-cols-4 gap-x-4 mt-8 w-full lg:space-x-[72px] lg:flex lg:mt-0 lg:w-auto'>
              <div className='flex flex-col col-span-2 lg:ml-4'>
                <p className='mb-7 text-sm font-bold'>Feature</p>
                <div className='flex flex-col space-y-4 text-sm'>
                  <p>About Us</p>
                  <p>Pricing</p>
                  <p>Account Information</p>
                </div>
              </div>
              <div className='ml-[10%] flex flex-col col-span-2'>
                <p className='mb-7 text-sm font-bold'>Support</p>
                <div className='flex flex-col space-y-4 text-sm'>
                  <p>Help Center</p>
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-8 lg:mt-0'>
              <p className='mb-7 text-sm font-bold'>Follow us</p>
              <div className='flex flex-col space-y-4 text-sm'>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>
          <div className='col-span-full'>
            <hr className='border-neutral-200 mt-10 mb-8 lg:my-12 dark:border-neutral-80' />
          </div>
          <div className='col-span-full mb-4 lg:col-span-3 lg:mb-16'>
            <p className='text-sm font-medium lg:font-normal'>
              © 2021 DexMarketCap. All rights reserved
            </p>
          </div>
          <div className='col-span-full lg:col-span-3 lg:col-end-13'>
            <div className='flex justify-start mb-8 space-x-7 lg:justify-end lg:mb-0'>
              <p className='text-sm font-medium lg:font-normal'>
                Privacy Policy
              </p>
              <p className='text-sm font-medium lg:font-normal'>
                Terms & Condition
              </p>
            </div>
          </div>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
