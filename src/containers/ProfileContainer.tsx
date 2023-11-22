import React from 'react';
import ProfileNav from '@/components/ProfileNav/ProfileNav';

type Props = {
  children: React.ReactNode;
};

const ProfileContainer = ({ children }: Props) => {
  return (
    <main className={'container'} style={{ paddingTop: '20px', overflowX: 'hidden', paddingBottom: '2rem' }}>
      <div className='profileCont'>
        <ProfileNav />
        {children}
      </div>
    </main>
  );
};

export default ProfileContainer;
