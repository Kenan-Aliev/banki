import React from 'react';

const HomePageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ marginTop: '20px' }} className='container'>
      {children}
    </main>
  );
};

export default HomePageWrapper;
