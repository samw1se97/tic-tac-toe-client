import React from 'react';
import styles from './styles.module.css';

function Button({ children, styles }) {
  return (
    <>
      {/* <span className='span_btn'> */}
      <button className={styles && `${styles}`}>{children}</button>
      {/* </span> */}
    </>
  );
}

export default Button;
