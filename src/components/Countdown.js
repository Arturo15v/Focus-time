import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const convertMinutestoMilis = (min) => min * 60 * 1000;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null);
  const [millis, setMillis] = useState(null);
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current)
        //onEnd()
        return time;
      }
      const timeLeft = time - 1000;
      //onProgress(timeLeft / convertMinutestoMilis(minutes));
      return timeLeft;
    });
  };

  

  useEffect(() => {
    setMillis(convertMinutestoMilis(minutes))
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / convertMinutestoMilis(minutes))
    if(millis===0){
      onEnd()
    }
  }, [millis]);


  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  //const [millis, setMillis] = useState(null);
  const minute = Math.floor(millis / 60 / 1000) % 60;
  const second = Math.floor(millis / 1000) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(second)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    padding: 32,
    backgroundColor: 'red',
  },
});
