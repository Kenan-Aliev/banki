import React from 'react';
import ProfileContainer from '@/containers/ProfileContainer';
import MyApplications from '@/screens/ApplicationsProfile/components/MyApplications/MyApplications';
import data from '@/core/data/index';

const ApplicationsProfile = () => {
  return (
    <ProfileContainer>
      <MyApplications applications={data.ApplicationsProfile.applicationItems} />
    </ProfileContainer>
  );
};

export default ApplicationsProfile;
