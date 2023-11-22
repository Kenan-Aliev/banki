import React from 'react';
import styles from './loading.module.scss';
// import classNames from 'classnames';

export default function Loading() {
  return (
    <span className={styles.loader}></span>
    // <div className={styles.loader}>
    //   <div className={classNames(styles.inner, styles.one)}></div>
    //   <div className={classNames(styles.inner, styles.two)}></div>
    //   <div className={classNames(styles.inner, styles.three)}></div>
    // </div>
  );
}
