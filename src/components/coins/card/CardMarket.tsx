import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
const CardMarket: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        'border-neutral-30 flex flex-col p-4 rounded-2xl border dark:border-neutral-80',
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardMarket;
