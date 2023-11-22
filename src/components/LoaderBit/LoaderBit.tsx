import React, { FC, HTMLAttributes } from 'react';
import styles from './Loader-bit.module.scss';
import classNames from 'classnames';

export const LoaderBit: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={classNames(styles.loader, className)}>
      <div className={classNames(styles.inner, styles.one)}></div>
      <div className={classNames(styles.inner, styles.two)}></div>
      <div className={classNames(styles.inner, styles.three)}></div>
    </div>
    // <div className={classNames(styles.ldsSpinner, className)}>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    // </div>
  );
};
