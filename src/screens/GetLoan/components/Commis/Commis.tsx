import React from 'react';
import s from './Commis.module.scss';

const Commis = () => {
  return (
    <div className={s.coomis}>
      <div className={s.info}>
        <div className={s.title}>Без скрытых комиссий</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Commis;
