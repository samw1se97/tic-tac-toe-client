import React from 'react';
import styles from './styles.module.css';
function Input({ children, placeHolder }) {
  return <input type='text' placeHolder={placeHolder && placeHolder} />;
}

export default Input;
