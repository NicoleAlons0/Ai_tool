import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';

import BackgroundMusic from '@/components/BackgroundMusic';
import Footer from '@/components/Footer';
import HowlsBackground from '@/components/HowlsBackground';
import HowlIntro from '@/components/HowlIntro';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '../context/AuthContext';
import ToasterContext from '../context/ToastContext';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={plusJakarta.className}>
      <head>
        <link rel="stylesheet" href="/style.css" />
        <Script src="/ar-motion.js" strategy="afterInteractive" />
      </head>
      <body>
        <div className='isolate'>
          <NextTopLoader
            color='#FF4D00'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <AuthProvider>
            <HowlsBackground />
            <Header />
            {children}
            <Footer />

            <ToasterContext />
          </AuthProvider>
          <BackgroundMusic />
          <HowlIntro />
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
