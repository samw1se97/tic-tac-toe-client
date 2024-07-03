import React from 'react';
import styles from './styles.module.css';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { RotatingLines } from 'react-loader-spinner';

function LoadingPage() {
  return (
    <div className={styles.page}>
      <Button styles={'return_btn'}>
        <img src={'return.png'} alt='' />
      </Button>
      <div className={styles.main}>
        <RotatingLines
          visible={true}
          height='96'
          width='96'
          strokeColor='#fcd015'
          strokeWidth='5'
          animationDuration='0.65'
          ariaLabel='rotating-lines-loading'
        />
        <Title>waiting...</Title>
        <Title>join the game</Title>
      </div>
    </div>
  );
}

export default LoadingPage;
