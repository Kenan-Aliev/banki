import React from 'react';
import ProfileContainer from '@/containers/ProfileContainer';
import s from './HelpProfile.module.scss';
import Search from '@/UI/Search/Search';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import file from '@/assets/icons/appeals_file.svg';
import Image from 'next/image';
import Link from 'next/link';

const HelpProfile = () => {
  return (
    <ProfileContainer>
      <div className={s.wrapper}>
        <div className={s.freq_quests}>
          <h1 className={s.title}>Популярные вопросы</h1>
          <div className={s.inp_cont}>
            <Search margin={0} height={60} btnHidden={true} placeholder={'Поиск по частым вопросам'} />
            <div className={s.write_our}>
              <span>Не нашли ответ на свой вопрос?</span>
              <Link href={'/profile/help/new-appeal'}>
                <BlueBtn text={'Написать нам'} width={126} height={40} fSize={14} />
              </Link>
            </div>
          </div>
        </div>
        <h1 className={s.title}>Мои заявки</h1>
        <div className={s.appeals}>
          <div className={s.none_appeals}>
            <Image src={file} alt={''} />
            <span>Нет открытых обращений</span>
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default HelpProfile;
