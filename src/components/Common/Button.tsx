import * as React from 'react';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
  'gray',
  'icon',
}

type ButtonProps = {
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  className,
  disabled: buttonDisabled,
  variant = 'primary',
  isDarkBg = false,
  ...rest
}: ButtonProps) {
  const disabled = buttonDisabled;

  return (
    <button
      type='button'
      disabled={disabled}
      className={clsxm(
        'inline-flex items-center py-[18px] px-9 font-bold rounded-[40px] transition-all',

        'transition-all ',
        [
          variant === 'primary' && [
            'bg-primary-500 text-white',
            'border-none',
            'hover:bg-primary-500 hover:text-white',
            'active:bg-primary-600',
            'disabled:bg-primary-600 disabled:hover:bg-primary-600',
          ],
          variant === 'outline' && [
            'text-primary-500',
            'border border-primary-500',
            'dark:border-primary-200 dark:text-primary-200',
            isDarkBg
              ? 'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800'
              : 'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
          ],
          variant === 'gray' && [
            'text-neutral-100 bg-neutral-20 hover:bg-transparent hover:text-primary-500',
            'border border-transparent hover:border-primary-500',
            'dark:bg-dark-200 dark:text-white dark:hover:border-primary-200',
            isDarkBg
              ? 'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800'
              : 'hover:bg-white active:bg-primary-100 disabled:bg-primary-100',
          ],
          variant === 'ghost' && [
            'text-primary-500',
            'shadow-none',
            isDarkBg
              ? 'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800'
              : 'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
          ],
          variant === 'light' && [
            'bg-white text-dark dark:bg-dark-100 dark:text-neutral-50',
            'border border-transparent',
            'hover:text-dark hover:bg-gray-100 dark:hover:bg-dark-200 ',
            'active:bg-white/80 disabled:bg-gray-200',
          ],
          variant === 'dark' && [
            'bg-gray-900 text-white',
            'border border-gray-600',
            'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
          ],
          variant === 'icon' && [
            'bg-transparant ',
            'border border-transparant',
          ],
        ],
        'disabled:cursor-not-allowed',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}