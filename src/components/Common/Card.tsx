import React, { FC } from 'react';

import clsxm from '@/lib/clsxm';

const Card: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsxm(
        'border border-neutral-30 dark:border-neutral-80 rounded-2xl p-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
