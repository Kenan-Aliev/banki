import React from 'react';
import ProfileContainer from '@/containers/ProfileContainer';
import Personal from '@/screens/SettingsProfile/components/Personal/Personal';
import Contacts from '@/screens/SettingsProfile/components/Contacts/Contacts';
import PasswordChange from '@/screens/SettingsProfile/components/PasswordChange/PasswordChange';
import s from './SettingsProfile.module.scss';
import Authentication from '@/screens/SettingsProfile/components/Authentication/Authentication';

const SettingsProfile = () => {
  return (
    <ProfileContainer>
      <section className={s.cont}>
        <Personal />
        <Contacts />
        <PasswordChange />
        <Authentication />
      </section>
    </ProfileContainer>
  );
};

export default SettingsProfile;
