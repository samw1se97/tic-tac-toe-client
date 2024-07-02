import React from 'react';
import styles from './styles.module.css';

function Title({ children, styles }) {
  return <div className={styles && `${styles}`}>{children}</div>;
}

export default Title;
