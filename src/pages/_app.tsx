import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import 'swiper/css';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/coinDetails.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='system'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
