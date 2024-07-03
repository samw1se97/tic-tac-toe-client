import React from 'react';
import styles from './styles.module.css';


function Title({ children, styles }) {
  return <p className={styles && `${styles}`}>{children}</p>;
}

export default Title;
