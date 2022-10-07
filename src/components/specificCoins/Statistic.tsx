import React, { FC, ReactNode } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import Card from '../Common/Card';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

type CardStatisticProps = {
  titleCard: string;

  children: ReactNode;
};
const CardStatisctic: FC<CardStatisticProps> = ({ titleCard, children }) => {
  return (
    <Card>
      <div className='flex flex-col w-full'>
        <p className='text-md mb-8 font-bold'>{titleCard}</p>
        <div className='flex flex-col justify-between space-y-8'>
          {children}
        </div>
      </div>
    </Card>
  );
};

const Statistic: FC = () => {
  return (
    <section id='statistic-coins' className='pt-20 w-full'>
      <Container>
        <Grid className='gap-6'>
          <div className='flex col-span-4 justify-start'>
            <h4 className='font-bold'> Cardano Statistics</h4>
          </div>
          <div className='col-span-6 row-start-2'>
            <CardStatisctic titleCard='Cardino Price Today '>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>
                  Cardano Price (24)
                </h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>$1,659 B</h6>
                  <BiChevronDown className='mr-1 ml-2 w-6 h-6 text-red-500 dark:text-red-semantic' />
                  <p className='text-md font-medium text-red-500 dark:text-red-semantic'>
                    2,96%
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>
                  24h Low / 24h High
                </h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>$1.24 / $1.33</h6>
                </div>
              </div>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>Market Cap</h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>$43,715 B</h6>
                  <BiChevronDown className='mr-1 ml-2 w-6 h-6 text-red-500 dark:text-red-semantic' />
                  <p className='text-md font-medium text-red-500 dark:text-red-semantic'>
                    3,00%
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>
                  Trading Volume (24h)
                </h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>$1,288 M</h6>
                  <BiChevronDown className='mr-1 ml-2 w-6 h-6 text-red-500 dark:text-red-semantic' />
                  <p className='text-md font-medium text-red-500 dark:text-red-semantic'>
                    20,66%
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>
                  Market Dominance
                </h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>1,89%</h6>
                </div>
              </div>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>Market Rank</h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>#6</h6>
                </div>
              </div>
            </CardStatisctic>
          </div>
          <div className='col-span-6 row-start-2'>
            <CardStatisctic titleCard='Cardano Price History '>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>
                  7d Low / 7d High
                </h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>$1.20 / $1.41</h6>
                  <BiChevronDown className='mr-1 ml-2 w-6 h-6 text-red-500 dark:text-red-semantic' />
                  <p className='text-md font-medium text-red-500 dark:text-red-semantic'>
                    2,96%
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>
                  30d Low / 30 High
                </h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>$1.20 / $1.96</h6>
                </div>
              </div>

              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>
                  52 Week Low / 90 Week High
                </h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>$1.20 / $2.46</h6>
                </div>
              </div>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>All Time High</h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>$3.10</h6>
                  <BiChevronDown className='mr-1 ml-2 w-6 h-6 text-red-500 dark:text-red-semantic' />
                  <p className='text-md font-medium text-red-500 dark:text-red-semantic'>
                    59,57%
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>All Time Low</h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>$0.01735</h6>
                  <BiChevronUp className='mr-1 ml-2 w-6 h-6 text-green-500' />
                  <p className='text-md font-medium text-green-500'>7119.68%</p>
                </div>
              </div>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>Cardano ROI</h6>
                <div className='flex items-center ml-auto'>
                  <BiChevronUp className='mr-1 ml-2 w-6 h-6 text-green-500' />
                  <p className='text-md font-medium text-green-500'>5678.95%</p>
                </div>
              </div>
            </CardStatisctic>
          </div>
          <div className='col-span-6 row-start-3'>
            <CardStatisctic titleCard='Cardano Price Yesterday'>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>
                  {`Yesterday's Low / High`}
                </h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>$1.24 / $1.33</h6>
                </div>
              </div>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>
                  {`Yesterday's Open / Close`}
                </h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>$1.32 / $1.24</h6>
                </div>
              </div>

              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>
                  {`Yesterday's Change`}
                </h6>
                <div className='flex items-center ml-auto'>
                  <BiChevronDown className='mr-1 ml-2 w-6 h-6 text-red-500 dark:text-red-semantic' />
                  <p className='text-md font-medium text-red-500 dark:text-red-semantic'>
                    5,43%
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>
                  {`Yesterday's Volume`}
                </h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>$1,293 M</h6>
                </div>
              </div>
            </CardStatisctic>
          </div>
          <div className='col-span-6 row-start-3'>
            <CardStatisctic titleCard='Cardano Supply'>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>
                  Circulating Supply
                </h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>33.443.215.362 ADA</h6>
                </div>
              </div>
              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>Total Supply</h6>
                <div className='flex items-center ml-auto'>
                  <h6 className='font-bold'>33.865.878.494 ADA</h6>
                </div>
              </div>

              <div className='flex items-center'>
                <h6 className='text-neutral-60 font-medium'>Max Supply</h6>
                <div className='flex items-center ml-auto'>
                  <BiChevronDown className='mr-1 ml-2 w-6 h-6 text-red-500 dark:text-red-semantic' />
                  <p className='text-md font-medium text-red-500 dark:text-red-semantic'>
                    45.000.000.000 ADA
                  </p>
                </div>
              </div>
            </CardStatisctic>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default Statistic;
