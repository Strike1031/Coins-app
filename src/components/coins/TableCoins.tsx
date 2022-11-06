import DataGrid, {
  Column,
  FilterRow,
  Grouping,
  GroupPanel,
  LoadPanel,
  Pager,
  Paging,
  Selection,
} from 'devextreme-react/data-grid';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import io from 'socket.io-client';

import clsxm from '@/lib/clsxm';

// import { coinsDummy } from '@/data/coinsDummy';
import CoinDetails from '@/pages/coins/coinDetails';

import NextImage from '../Common/NextImage';
import GraphDown from '../../../public/images/graph-down.svg';
import GraphUp from '../../../public/images/graph-up.svg';
// const TableCoins = () => {
//   const [paginationPage, setPaginationPage] = useState(0);
//   const pageNumbers = [];
//   for (let i = 0; i <= Coins?.length / 10; i++) {
//     pageNumbers.push(i);
//   }
//   const renderPageNumbers = pageNumbers.map((number) => {
//     return (
//       <button
//         className={clsxm(
//           ' border border-neutral-30 px-3 py-2 rounded-lg  text-xs dark:border-neutral-80',
//           number === paginationPage
//             ? 'bg-primary-500 text-white'
//             : 'bg-white dark:bg-dark-100 dark:text-white hover:bg-neutral-20'
//         )}
//         key={number}
//         onClick={() => {
//           if (number < Coins.length / 10) {
//             setPaginationPage(number);
//             window.scrollTo(0, 0);
//           }
//         }}
//       >
//         {number + 1}
//       </button>
//     );
//   });

//   return (
//     <>
//       <div className='overflow-x-auto'>
//         <table className='overflow-y-hidden text-xs table-auto'>
//           <thead>
//             <tr>
//               <td className='border-neutral-30 text-black-500 flex-1 px-4 py-6 font-bold text-center border-t border-b lg:w-1/12 dark:border-neutral-80'>
//                 #
//               </td>
//               <td className='border-neutral-30 text-black-500 flex-1 py-6 pr-6 pl-2 font-bold border-t border-b lg:w-4/12 dark:border-neutral-80'>
//                 Name
//               </td>
//               <td className='border-neutral-30 text-black-500 flex-1 px-4 py-6 font-bold text-right border-t border-b dark:border-neutral-80'>
//                 Price
//               </td>
//               <td className='border-neutral-30 text-black-500 flex-1 px-4 py-6 font-bold whitespace-nowrap border-t border-b lg:w-2/12 dark:border-neutral-80'>
//                 5min %
//               </td>

//               <td className='border-neutral-30 text-black-500 flex-1 px-2 py-6 font-bold text-center border-t border-b dark:border-neutral-80'>
//                 1H %
//               </td>
//               <td className='border-neutral-30 text-black-500 flex-1 px-2 py-6 font-bold text-center whitespace-nowrap border-t border-b dark:border-neutral-80'>
//                 6H %
//               </td>
//               <td className='border-neutral-30 text-black-500 flex-1 px-2 py-6 font-bold text-center border-t border-b dark:border-neutral-80'>
//                 24H %
//               </td>
//               <td className='border-neutral-30 text-black-500 flex-1 flex-grow items-center px-4 py-6 min-w-min font-bold border-t border-b lg:w-2/12 dark:border-neutral-80'>
//                 <div className='flex items-center whitespace-nowrap'>
//                   Market Cap
//                   <BsFillExclamationCircleFill className='text-neutral-40 ml-1 w-4 h-4' />
//                 </div>
//               </td>
//               <td className='border-neutral-30 text-black-500 flex-1 flex-grow items-center px-4 py-6 min-w-min font-bold border-t border-b lg:w-2/12 dark:border-neutral-80'>
//                 <div className='flex items-center whitespace-nowrap'>
//                   Volume
//                   <BsFillExclamationCircleFill className='text-neutral-40 ml-1 w-4 h-4' />
//                 </div>
//               </td>
//               <td className='border-neutral-30 text-black-500 flex-1 flex-grow items-center px-4 py-6 min-w-min font-bold border-t border-b lg:w-2/12 dark:border-neutral-80'>
//                 <div className='flex items-center whitespace-nowrap'>
//                   Txns
//                   <BsFillExclamationCircleFill className='text-neutral-40 ml-1 w-4 h-4' />
//                 </div>
//               </td>
//               <td className='border-neutral-30 text-black-500 flex-1 flex-grow px-4 py-6 min-w-min font-bold border-t border-b lg:w-2/12 dark:border-neutral-80'>
//                 Liquidity
//               </td>
//               <td className='border-neutral-30 text-black-500 flex-1 px-3 py-6 font-bold text-right border-t border-b lg:w-2/12 dark:border-neutral-80'>
//                 Graph
//               </td>
//             </tr>
//           </thead>
//           <tbody>
//             {Coins?.slice(
//               0 + paginationPage * 10,
//               10 + paginationPage * 10
//             ).map((coin, index) => (
//               <tr
//                 key={index}
//                 className='border-neutral-30 border-b dark:border-neutral-80'
//               >
//                 <td className='px-4 py-7 align-middle whitespace-nowrap lg:px-0'>
//                   <div className='flex items-center space-x-2 w-full'>
//                     <AiOutlineStar className='text-neutral-60 mr-2 w-4 h-4' />
//                     {/* write coins number base on paginationPage  */}
//                     {index + 1 + paginationPage * 10}
//                   </div>
//                 </td>
//                 <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
//                   <button
//                     type='button'
//                     className='flex items-center w-full'
//                     data-hs-overlay='#coinDetails-overlay'
//                   >
//                     <div className='mr-2 w-8 h-8'>
//                       <NextImage
//                         alt='Bitcoin'
//                         src={coin.logo}
//                         width={32}
//                         height={32}
//                       />
//                     </div>
//                     <p className='mr-1 text-sm font-medium'>{coin.name}</p>
//                     <p className='text-neutral-50 text-sm font-medium capitalize'>
//                       {coin.code}
//                     </p>
//                   </button>
//                 </td>
//                 <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
//                   <div className='flex items-center w-full'>
//                     <p className='text-sm font-medium'>{coin.price}</p>
//                   </div>
//                 </td>
//                 <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
//                   <div className='flex justify-center items-center w-full'>
//                     <p className='text-sm font-medium'>{coin.priceChange}</p>
//                   </div>
//                 </td>
//                 <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
//                   <div className='flex items-center space-x-1 w-full'>
//                     {coin['1h']?.change === 'down' ? (
//                       <FaChevronDown className='w-3 h-3 text-red-500 dark:text-red-semantic' />
//                     ) : (
//                       <FaChevronUp className='w-3 h-3 text-green-500' />
//                     )}
//                     <p
//                       className={clsxm(
//                         'font-medium text-sm',
//                         coin['1h']?.change === 'down'
//                           ? 'text-red-500 dark:text-red-semantic '
//                           : 'text-green-500 '
//                       )}
//                     >
//                       {coin['1h'].changePercent}
//                     </p>
//                   </div>
//                 </td>
//                 <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
//                   <div className='flex items-center space-x-1 w-full'>
//                     {coin['24h']?.change === 'down' ? (
//                       <FaChevronDown className='w-3 h-3 text-red-500 dark:text-red-semantic' />
//                     ) : (
//                       <FaChevronUp className='w-3 h-3 text-green-500' />
//                     )}
//                     <p
//                       className={clsxm(
//                         'font-medium text-sm',
//                         coin['24h']?.change === 'down'
//                           ? 'text-red-500 dark:text-red-semantic '
//                           : 'text-green-500 '
//                       )}
//                     >
//                       {coin['1h'].changePercent}
//                     </p>
//                   </div>
//                 </td>
//                 <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
//                   <div className='flex items-center space-x-1 w-full'>
//                     {coin['7d']?.change === 'down' ? (
//                       <FaChevronDown className='w-3 h-3 text-red-500 dark:text-red-semantic' />
//                     ) : (
//                       <FaChevronUp className='w-3 h-3 text-green-500' />
//                     )}
//                     <p
//                       className={clsxm(
//                         'font-medium text-sm',
//                         coin['7d']?.change === 'down'
//                           ? 'text-red-500 dark:text-red-semantic '
//                           : 'text-green-500 '
//                       )}
//                     >
//                       {coin['1h'].changePercent}
//                     </p>
//                   </div>
//                 </td>
//                 <td className='px-4 py-2 text-right align-middle whitespace-nowrap lg:px-4'>
//                   <div className='flex justify-end items-center space-x-1 w-full'>
//                     <p className='text-sm font-medium'>{coin.marketCap}</p>
//                   </div>
//                 </td>
//                 <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
//                   <div className='flex justify-end items-center space-x-1 w-full'>
//                     <p className='text-sm font-medium'>{coin.volume}</p>
//                   </div>
//                 </td>
//                 <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
//                   <div className='flex justify-end items-center space-x-1 w-full'>
//                     <p className='text-sm font-medium'>{coin.supply}</p>
//                   </div>
//                 </td>
//                 <td className='px-4 py-2 align-middle whitespace-nowrap lg:px-4'>
//                   <div className='flex justify-end items-center space-x-1 w-full'>
//                     <p className='text-sm font-medium'>{coin.liquidity}</p>
//                   </div>
//                 </td>
//                 <td className='px-4 py-2 align-middle whitespace-nowrap lg:pl-4'>
//                   <div className='flex justify-end items-center w-full'>
//                     {coin.graph === 'down' ? (
//                       <GraphDown className='w-auto h-8' />
//                     ) : (
//                       <GraphUp className='w-auto h-8' />
//                     )}
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className='flex flex-col mt-2 sm:flex-row lg:mb-[88px] lg:justify-between lg:items-center lg:mt-8'>
//         <p className='order-2 mt-4 text-sm font-medium lg:order-1 lg:mt-0'>
//           {' '}
//           Showing {paginationPage + 1} to 10 of {Coins?.length} entries
//         </p>
//         <div className='flex overflow-x-auto flex-nowrap order-1 justify-end self-start mt-4 space-x-3 w-full min-w-min text-sm font-medium sm:mt-0 lg:overflow-hidden lg:order-2 lg:self-auto'>
//           <button
//             className='border-neutral-30 px-3 py-2 text-xs rounded-lg border dark:border-neutral-80'
//             onClick={() => {
//               if (paginationPage) {
//                 setPaginationPage(paginationPage - 1);
//                 window.scrollTo(0, 0);
//               }
//             }}
//           >
//             Previous
//           </button>
//           {renderPageNumbers}

//           <button
//             className='border-neutral-30 px-3 py-2 text-xs rounded-lg border dark:border-neutral-80'
//             onClick={() => {
//               if (paginationPage < Coins.length / 10 - 1) {
//                 setPaginationPage(paginationPage + 1);
//                 window.scrollTo(0, 0);
//               }
//             }}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//       <CoinDetails />
//       <Script src='/js/preline.js' />
//     </>
//   );
// };
let socket;
let coinsDummy;
const TableCoins = () => {
  const [coinsDummy, setcoinsDummy] = useState();
  useEffect(() => {
    socketInitializer();
    return () => {
      console.log('unmount');
    };
  }, []);

  const socketInitializer = () => {
    socket = io('ws://localhost:5000/', {});
    socket.on('connect', () => {
      console.log('socket is connected');
    });

    socket.on('disconnect', () => {
      console.log('socket is disconnected');
    });

    setInterval(() => {
      console.log('sending socket--priceChange------');
      socket.emit('priceChange');
    }, 1000);

    socket.on('priceChange', (data) => {
      const data1 = JSON.parse(data);
      setcoinsDummy(data1);
    });
  };

  return (
    <DataGrid
      dataSource={coinsDummy}
      keyExpr={'token1Symbol'}
      // allowColumnReordering={true}
      columnAutoWidth={true}
    >
      <GroupPanel visible={true} />
      <Grouping autoExpandAll={true} />
      <FilterRow visible={true} />
      <Selection mode={'single'} />
      <LoadPanel enabled={false} />
      <Column
        dataField={'token1Symbol'}
        caption={'Token'}
        allowSorting={false}
        allowFiltering={false}
        allowGrouping={false}
        allowReordering={false}
        sortOrder={'asc'}
      />
      <Column dataField={'price1'} format={'currency'} />
      <Column dataField={'txns'} />
      <Column dataField={'volume'} />
      <Column dataField={'priceChange_5m'} />
      <Column dataField={'priceChange_1h'} />
      <Column dataField={'priceChange_6h'} />
      <Column dataField={'priceChange_24h'} />
      <Column dataField={'liquidity'} />
      <Column dataField={'marketCap'} />

      <Pager allowedPageSizes={[20, 100, 500]} showPageSizeSelector={true} />
      <Paging defaultPageSize={100} />
    </DataGrid>
  );
};
export default TableCoins;
