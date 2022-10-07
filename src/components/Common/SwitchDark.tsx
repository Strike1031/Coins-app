import { Switch } from '@headlessui/react';
import React, { FC } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';

import clsxm from '@/lib/clsxm';

type SwitchDarkProps = {
  className?: string;
  theme?: string;
  handleDarkTheme: () => void;
};

const SwitchDark: FC<SwitchDarkProps> = ({ theme, handleDarkTheme }) => {
  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={handleDarkTheme}
        className={`${
          theme === 'dark' ? 'bg-neutral-20 dark:bg-dark-200' : 'bg-neutral-20'
        } relative inline-flex items-center h-10 rounded-full w-[72px] transition-all `}
      >
        <span className='hidden sr-only'>Enable Dark Mode</span>
        <span
          className={clsxm(
            'absolute flex h-8 items-center justify-center left-1 rounded-full top-1 transition-all w-8',
            theme === 'dark' ? 'bg-transparent' : 'bg-white'
          )}
        >
          <BsSunFill className='w-4 h-4 dark:text-neutral-60' />
        </span>
        <span
          className={clsxm(
            'absolute flex h-8 items-center justify-center right-1 rounded-full top-1 transition-all w-8',
            theme === 'dark' ? 'bg-white dark:bg-dark-100' : 'bg-transparent'
          )}
        >
          <FaMoon className='text-neutral-50 w-4 h-4 dark:text-white' />
        </span>
      </Switch>
    </>
  );
};

export default SwitchDark;
