import React from 'react';
import s from './CustomSelectItemInp.module.scss';
import CustomCheckboxAround from '@/UI/CustomCheckboxAround/CustomCheckboxAround';

const CustomSelectItemInp = ({ title, selected }: { title: string; selected: boolean }) => {
  return (
    <div
      className={s.wrap}
      style={{ borderColor: selected ? '#4DA7FF' : '', background: selected ? 'white' : '' }}
    >
      <CustomCheckboxAround type={'radio'} checked={selected} />
      {title}
    </div>
  );
};

export default CustomSelectItemInp;
