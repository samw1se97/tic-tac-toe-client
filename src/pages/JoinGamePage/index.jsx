import React from 'react';
import styles from './styles.module.css';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Devider from '../../components/Devider';

function JoinGamePage() {
  return (
    <div className={styles.page}>
      <Button styles={'return_btn'}>
        <img src={'return.png'} alt='' />
      </Button>
      <div className={styles.main}>
        <Title styles={'pg_title'}> join to a game </Title>
        <Input placeHolder={'enter a code game'} />
        <Button styles={'btn'}>join</Button>
        <div className={styles.devider_line}></div>
        <Title styles={'devider'}>or</Title>
        <Button styles={'btn'}> create a game </Button>
      </div>
    </div>
  );
}

export default JoinGamePage;
