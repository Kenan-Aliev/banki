'use client';

import React, { useState } from 'react';
import s from './IntroBanks.module.scss';
import Search from '@/UI/Search/Search';
import CustomCheckboxAround from '@/UI/CustomCheckboxAround/CustomCheckboxAround';
import CustomSelect from '@/UI/CustomSelect/CustomSelect';
import arr_l from '@/assets/icons/blue Arrow Left.svg';
import arr_r from '@/assets/icons/blue Arrow right.svg';
import Image, { StaticImageData } from 'next/image';

type banksT = {
  title: string;
  sub: string;
  img: StaticImageData;
  m1: number;
  m2: number;
  chars: charsT[];
};
type charsT = {
  name: string;
  count: number;
};
type Props = {
  banksItems: banksT[];
};

const IntroBanks = ({ banksItems }: Props) => {
  const letters = [
    'А',
    'Б',
    'В',
    'Г',
    'Д',
    'E',
    'Ж',
    'З',
    'И',
    'К',
    'Л',
    'М',
    'Н',
    'О',
    'П',
    'Р',
    'С',
    'Т',
    'У',
    'Ф',
    'Х',
    'Ц',
    'Ч',
    'Э',
    'Ю',
    'Я',
  ];
  const [searchWords, setSearchWords] = useState<string>('');
  const [currentCheckbox, setCurrentCheckbox] = useState<string>('name');
  const filterFunc = (items: banksT[]) => {
    return items.filter((i) => i.title.toLowerCase().includes(searchWords.toLowerCase()));
  };
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / Банки Кыргызстана / <mark>Список банков Кыргызстана</mark>
        </div>
        <div className={s.title}>
          Список всех банков <mark>Кыргызстана</mark>
        </div>
        <div className={s.sub}>Найдите ваш банк с помощью поиска</div>
        <div className={s.find}>
          <Search
            value={searchWords}
            filterArr={filterFunc}
            setValue={setSearchWords}
            itemsSearch={banksItems}
            placeholder={'Введите название или номер лицензии банка..'}
            margin={0}
          />
          <div className={s.inps}>
            <div className={s.con}>
              <CustomCheckboxAround
                type={'radio'}
                value={'name'}
                current={currentCheckbox}
                setValue={setCurrentCheckbox}
              />
              По названию
            </div>
            <div className={s.con}>
              <CustomCheckboxAround
                type={'radio'}
                value={'license'}
                current={currentCheckbox}
                setValue={setCurrentCheckbox}
              />
              По лицензии
            </div>
            <CustomSelect fz={16} options={['выбрать']} />
          </div>
          <div className={s.letters}>
            <div className={s.alph}>
              <Image src={arr_l} alt={'arr left'} />
              <div className={s.let_cont}>
                {letters.map((el, index) => (
                  <div onClick={() => setSearchWords(el)} className={s.letter} key={index}>
                    {el}
                  </div>
                ))}
              </div>
              <Image src={arr_r} alt={'arr right'} />
            </div>
            <span>Все банки</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBanks;
