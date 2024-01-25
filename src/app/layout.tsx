import './globals.scss';
import Header from '@/components/Header/Header';
import React from 'react';
import MobileHeader from '@/components/MobileHeader/MobileHeader';
import { StoreProvider } from '@/core/store/provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css'
import Footer from '@/components/Footer/Footer';
import { Metadata } from 'next';
import YandexMetrika from '@/components/YandexMetrics';
import { Google } from '@mui/icons-material';
import GoogleAnalytics from '@/components/GoogleAnalitics';

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body>
        <StoreProvider>
          <YandexMetrika
            yid={96230933}
            accurateTrackBounce={true}
            clickmap={true}
            trackLinks={true}
            webvisor={true}
          />
          <GoogleAnalytics
            gaTrackingId='G-1QQKWLLLX9'
          />
          <Header />
          <MobileHeader />
          {children}
          <Footer />
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
}

export default RootLayout;
