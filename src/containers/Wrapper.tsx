import React from 'react';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className='container'>{children}</main>;
};

export default Wrapper;
