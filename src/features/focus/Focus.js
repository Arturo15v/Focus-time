import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {Roundedbutton} from '../../components/Roundedbutton';
import {useState} from 'react'
import {fontSizes,paddingSizes} from '../../utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject,setSubject] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Focus</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{ flex:1, marginRight:20 }} onSubmitEditing={
            ({nativeEvent}) => {
              setSubject(nativeEvent.text)
            }}/>
          <Roundedbutton title="+" size={50} onPress={()=>addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  titleContainer: {
    flex: 1,
    padding: paddingSizes.md,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer:{
    paddingTop: paddingSizes.md,
    flexDirection: 'row',
    alignItems:'center'
  },
});
