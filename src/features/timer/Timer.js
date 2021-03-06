import * as React from 'react';
import { Text, View, StyleSheet, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { fontSizes, paddingSizes } from '../../utils/sizes';
import { useState } from 'react';
import { Roundedbutton } from '../../components/Roundedbutton';

import { Countdown } from '../../components/Countdown';

import { Timing } from './Timing';

import { useKeepAwake } from 'expo-keep-awake';

const DEFAULT_TIME = 0.1;
export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();

  const interval = React.useRef(null);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const changeTime = (mins) => {
    setMinutes(mins);
    setProgress(1);
    setIsStarted(false);
  };
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: paddingSizes.xxl }}>
        <View style={styles.countdown}>
          <Countdown
            minutes={minutes}
            isPaused={!isStarted}
            onProgress={onProgress}
            onEnd={onEnd}
          />
        </View>
        <Text style={styles.title}>Focus on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{ paddingTop: 10 }}>
        <ProgressBar color="green" style={{ height: 10 }} progress={progress} />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <Roundedbutton title="pause" onPress={() => setIsStarted(false)} />
        ) : (
          <Roundedbutton title="start" onPress={() => setIsStarted(true)} />
        )}
      </View>
      <View style={styles.clearSubject}>
        <Roundedbutton title="-" size={50} onPress={() => clearSubject()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingTop: 60,
    color: 'white',
    textAlign: 'center',
  },
  task: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countdown: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearSubject: {
    paddingBottom: 25,
    paddingLeft: 25,
  },
});
