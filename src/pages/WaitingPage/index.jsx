import React from 'react';
import styles from './styles.module.css';
import { RotatingLines } from 'react-loader-spinner';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Title from '../../components/Title';

function WaitingPage() {
  return (
    <div className={styles.page}>
      <Button styles={'return_btn'}>
        <img src={'return.png'} alt='' />
      </Button>
      <div className={styles.main}>
        <Input></Input>
        <RotatingLines
          visible={true}
          height='96'
          width='96'
          strokeColor='#fcd015'
          strokeWidth='5'
          animationDuration='0.65'
          ariaLabel='rotating-lines-loading'
        />
        <Title>waiting for opponent</Title>
      </div>
    </div>
  );
}

export default WaitingPage;
