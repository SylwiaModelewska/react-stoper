import { useState, useEffect } from 'react';
import Button from '../Button/Button.js';
import FormatedTime from '../FormatedTime/FormatedTime.js';
import styles from './Timer.module.scss';

const Timer = () => {

  const [time, setTime] = useState(0);
  
  const [timer , setTimer] = useState();

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, []);

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
  };

  const stop = () => {
    clearInterval(timer);
  }

  const reset = () => {
    setTime(0);
    clearInterval(timer);
  }

  return (
    <div className={styles.timer}>
      <FormatedTime time = {time} />
      <div>
        <Button action={start}>Start</Button>
        <Button action={stop}>Stop</Button>
        <Button action={reset}>Reset</Button>
      </div>
    </div>
  );
};

export default Timer;