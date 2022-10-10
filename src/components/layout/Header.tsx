import { useTheme } from 'next-themes';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import Container from '../Common/Container';
import SwitchDark from '../Common/SwitchDark';
const links = [{ href: '/', label: 'Home', dropdown: true }];

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Header() {
  const { theme, setTheme } = useTheme();

  const handleDarkTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className='bg-white sticky top-0 w-full z-50 dark:bg-dark-100'>
      <Container>
        <nav className='flex items-center justify-between max-w-screen-xl mx-auto py-5'>
          <UnstyledLink className='flex items-center' href='/'>
            {theme === 'dark' ? (
              <img
                src='/logo/logo-white.svg'
                className='h-[50px] w-auto'
                alt='Logo'
              />
            ) : (
              <img
                src='/logo/logo.svg'
                className='h-[50px] w-auto'
                alt='Logo'
              />
            )}
          </UnstyledLink>
          <div className='flex items-center'>
            <div className='flex items-center space-x-4'>
              {links.map(({ href, label, dropdown }) => (
                <UnstyledLink
                  key={href}
                  className='flex font-medium items-center leading-[21px] px-4 py-2 text-neutral-100 text-sm dark:text-white hover:text-gray-900'
                  href={href}
                >
                  {label}
                </UnstyledLink>
              ))}
            </div>
            <div className='flex items-center space-x-4'>
              <hr className='border-neutral-30 border-r h-[32px] ml-4 my-auto dark:border-neutral-80' />
              <div className='flex items-center justify-center'>
                <SwitchDark handleDarkTheme={handleDarkTheme} theme={theme} />
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
