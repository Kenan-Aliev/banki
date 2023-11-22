'use client';

import React from 'react';
import s from './CustomCheckboxAround.module.scss';

type Props = {
  type?: string;
  checked?: boolean;
  handleChecked?: React.Dispatch<boolean>;
  value?: string;
  setValue?: React.Dispatch<string>;
  current?: string;
};
const CustomCheckboxAround = ({
  type = 'checkbox',
  checked,
  handleChecked,
  value,
  setValue,
  current,
}: Props) => {
  const hadleChange = () => handleChecked(!checked);
  const setVal = () => setValue(value);

  return (
    <>
      <input
        type={type || 'checkbox'}
        checked={type === 'checkbox' ? checked : value === current}
        onChange={type === 'checkbox' ? hadleChange : setVal}
        className={s.inp}
      />
    </>
  );
};

export default CustomCheckboxAround;
