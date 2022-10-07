import { useTheme } from 'next-themes';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import Container from '../Common/Container';
import SwitchDark from '../Common/SwitchDark';
const links = [
  { href: '/', label: 'Home', dropdown: true }
];

export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default function Header() {
  const { theme, setTheme } = useTheme();

  const handleDarkTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className='sticky top-0 z-50 w-full bg-white dark:bg-dark-100'>
      <Container>
        <nav className='flex justify-between items-center py-5 mx-auto max-w-screen-xl'>
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
                  className='leading-[21px] text-neutral-100 flex items-center px-4 py-2 text-sm font-medium dark:text-white hover:text-gray-900'
                  href={href}
                >
                  {label}
                </UnstyledLink>
              ))}
            </div>
            <div className='flex items-center space-x-4'>
              
              <hr className='border-neutral-30 h-[32px] my-auto ml-4 border-r dark:border-neutral-80' />
              <div className='flex justify-center items-center'>
                <SwitchDark handleDarkTheme={handleDarkTheme} theme={theme} />
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
