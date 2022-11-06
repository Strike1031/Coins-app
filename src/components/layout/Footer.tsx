import { useTheme } from 'next-themes';
import React, { FC } from 'react';

import Container from '../Common/Container';
import Grid from '../Common/Grid';
import LogoFooter from '../../../public/logo/logo-footer.svg';
import LogoFooterDark from '../../../public/logo/logo-footer-white.svg';

const Footer: FC = () => {
  const { theme } = useTheme();

  return (
    <footer className='bg-white max-h-[389px] pt-12 w-full lg:pt-16 dark:bg-dark-100'>
      <Container>
        <Grid>
          <div className='col-span-full flex flex-col lg:col-span-4'>
            {theme === 'dark' ? (
              <LogoFooterDark className='h-[50px] mb-4 w-[154px]' />
            ) : (
              <LogoFooter className='h-[50px] mb-4 w-[154px]' />
            )}
            <p className='text-neutral-60 text-sm'>
              Contact me: Biru bin Jebat (strike10310522@gmail.com,
              https://linkedin.com/in/biru-bin-jebat981031).{' '}
            </p>
          </div>
          <div className='col-span-full flex flex-col justify-between lg:col-end-13 lg:col-span-5 lg:flex-row'>
            <div className='gap-x-4 grid grid-cols-4 mt-8 w-full lg:flex lg:mt-0 lg:space-x-[72px] lg:w-auto'>
              <div className='col-span-2 flex flex-col lg:ml-4'>
                <p className='font-bold mb-7 text-sm'>Feature</p>
                <div className='flex flex-col space-y-4 text-sm'>
                  <p>About Us</p>
                  <p>Pricing</p>
                  <p>Account Information</p>
                </div>
              </div>
              <div className='col-span-2 flex flex-col ml-[10%]'>
                <p className='font-bold mb-7 text-sm'>Support</p>
                <div className='flex flex-col space-y-4 text-sm'>
                  <p>Help Center</p>
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-8 lg:mt-0'>
              <p className='font-bold mb-7 text-sm'>Follow us</p>
              <div className='flex flex-col space-y-4 text-sm'>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>
          <div className='col-span-full'>
            <hr className='border-neutral-200 mb-8 mt-10 lg:my-12 dark:border-neutral-80' />
          </div>
          <div className='col-span-full mb-4 lg:col-span-3 lg:mb-16'>
            <p className='font-medium text-sm lg:font-normal'>
              © 2022 DexMarketCap. All rights reserved
            </p>
          </div>
          <div className='col-span-full lg:col-end-13 lg:col-span-3'>
            <div className='flex justify-start mb-8 space-x-7 lg:justify-end lg:mb-0'>
              <p className='font-medium text-sm lg:font-normal'>
                Privacy Policy
              </p>
              <p className='font-medium text-sm lg:font-normal'>
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
