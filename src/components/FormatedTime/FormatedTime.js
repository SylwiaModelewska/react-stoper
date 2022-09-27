import styles from './FormatedTime.module.scss';

const FormatedTime = props => {

  const msToTime = duration => {
    var milliseconds = parseInt((duration%1000))
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  return (
    <p className={styles.formatedTime}>{msToTime(props.time)}</p>
  );

};

export default FormatedTime;