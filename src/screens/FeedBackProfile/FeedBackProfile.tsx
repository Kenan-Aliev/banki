import React from 'react';
import ProfileContainer from '@/containers/ProfileContainer';
import s from './FeedBackProfile.module.scss';
import AllReviews from '@/screens/FeedBackProfile/components/AllReviews/AllReviews';
import AddReview from '@/screens/FeedBackProfile/components/AddReview/AddReview';

const FeedBackProfile = () => {
  return (
    <>
      <ProfileContainer>
        <div className={s.cont}>
          <AllReviews />
          <AddReview />
        </div>
      </ProfileContainer>
    </>
  );
};

export default FeedBackProfile;
