import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Roundedbutton } from '../../components/Roundedbutton';

export const Timing = ({onChangeTime}) => {
  return (
    <>
      <View style={styles.timingButton}>
        <Roundedbutton title="10" size={75} onPress={()=>onChangeTime(10)}/>
      </View>
      <View style={styles.timingButton}>
        <Roundedbutton title="15" size={75} onPress={()=>onChangeTime(15)}/>
      </View>
      <View style={styles.timingButton}>
        <Roundedbutton title="20" size={75} onPress={()=>onChangeTime(20)}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
