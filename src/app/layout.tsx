import './globals.scss';
import Header from '@/components/Header/Header';
import React from 'react';
import MobileHeader from '@/components/MobileHeader/MobileHeader';
import { StoreProvider } from '@/core/store/provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css'
import Footer from '@/components/Footer/Footer';

// export const metadata: Metadata = {
//     title: "Главная",
//     description: "Главная страница банков",
// };

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body>
        <StoreProvider>
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
