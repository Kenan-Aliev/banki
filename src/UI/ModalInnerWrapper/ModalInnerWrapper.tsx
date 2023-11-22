import React, { ReactNode } from 'react';
import styles from './modalInnerWrapper.module.scss';
import classNames from 'classnames';

interface IModalInnerWrapper {
  children?: ReactNode;
  className?: string;
}

export function ModalInnerWrapper({ children, className }: IModalInnerWrapper) {
  return <div className={classNames(styles.backDrop, className)}>{children}</div>;
}
