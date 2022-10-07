import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

import CardNews from './News/CardNews';
import Button from '../Common/Button';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

const News = () => {
  const FakeNews = [
    {
      title:
        'Will Hydra’s second pre-release boost Cardano enough to make it to $3',
      description:
        'After the monumental ‘Uptober,’ the last two months haven’t been all that bullish for the larger market. Nonetheless, some assets like AVAX, LUNA and MATIC managed to carve their own trajectories reach...',
      image: '/images/news/coins-1.png',
      source: 'AMBCrypto',
      time: '10 hours ago',
    },
    {
      title:
        'Will Hydra’s second pre-release boost Cardano enough to make it to $3',
      description:
        'After the monumental ‘Uptober,’ the last two months haven’t been all that bullish for the larger market. Nonetheless, some assets like AVAX, LUNA and MATIC managed to carve their own trajectories reach...',
      image: '/images/news/coins-2.png',
      source: 'AMBCrypto',
      time: '10 hours ago',
    },
    {
      title:
        'Will Hydra’s second pre-release boost Cardano enough to make it to $3',
      description:
        'After the monumental ‘Uptober,’ the last two months haven’t been all that bullish for the larger market. Nonetheless, some assets like AVAX, LUNA and MATIC managed to carve their own trajectories reach...',
      image: '/images/news/coins-3.png',
      source: 'AMBCrypto',
      time: '10 hours ago',
    },
  ];
  return (
    <section id='news-coins' className='py-14 w-full'>
      <Container>
        <Grid className='gap-y-10'>
          <div className='flex col-span-3 items-center'>
            <h4>Cardano News</h4>
          </div>
          <div className='flex col-span-2 col-end-13 justify-end items-center'>
            <Button variant='outline' className='px-4 py-3'>
              Read more
              <BiChevronRight className='ml-1 w-5 h-5' />
            </Button>
          </div>

          {FakeNews.map((news, index) => (
            <div className='col-span-full' key={index}>
              <CardNews
                title={news.title}
                description={news.description}
                image={news.image}
                source={news.source}
                time={news.time}
              />
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default News;
