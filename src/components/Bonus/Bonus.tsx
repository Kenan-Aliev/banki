'use client'

import React, { useState } from 'react';
import s from './Bonus.module.scss';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import Image, { StaticImageData } from 'next/image';
import Application from '../Application/Application';
import { Box } from '@mui/material';
import SendApplicationSuccesModal from '../SendApplicationSuccesModal';

interface BonusProps {
  title?: string;
  img?: StaticImageData | string;
  text?: string;
  height?: number;
}

const Bonus = (props: BonusProps) => {
  const {
    title = 'Бонус до 2000 рублей за открытие вклада!',
    img,
    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    height,
  } = props;

  const [openApplicationForm, setOpenApplicationForm] = useState(false)
  const [succesModal, setSuccessModal] = useState(false)

  const handleChangeApplicationForm = () => {
    setOpenApplicationForm(!openApplicationForm)
  }

  const handleChangeSuccessModal = () => {
    setSuccessModal(!succesModal)
  }

  const onSuccessSendApplication = () => {
    handleChangeApplicationForm()
    handleChangeSuccessModal()
  }
  return (
    <Box className={s.bonus}
      sx={{
        height: `${height}px`,
        "& img:hover": {
          cursor: 'pointer'
        }
      }}
    >
      <Application
        open={openApplicationForm}
        handleClose={handleChangeApplicationForm}
        onSuccessSendApplication={onSuccessSendApplication}
      />
      <SendApplicationSuccesModal
        open={succesModal}
        handleClose={handleChangeSuccessModal}
      />
      {img ? <Image src={img} alt={'logo bank'} width={200} height={200} /> : <div className={s.logo}>Логотип</div>}
      <div className={s.info}
      >
        <div className={s.title}>{title}</div>
        <p>{text}</p>
      </div>
      <Image src={arr_r} alt={'иконка стрелки вправо'} onClick={handleChangeApplicationForm} />
    </Box >
  );
};

export default Bonus;
