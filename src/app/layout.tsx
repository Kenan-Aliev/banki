import './globals.scss';
import Header from '@/components/Header/Header';
import React from 'react';
import MobileHeader from '@/components/MobileHeader/MobileHeader';
import { StoreProvider } from '@/core/store/provider';

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
        </StoreProvider>
      </body>
    </html>
  );
}

export default RootLayout;
