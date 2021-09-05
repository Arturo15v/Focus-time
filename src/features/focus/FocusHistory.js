import * as React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Roundedbutton } from '../../components/Roundedbutton';
import { useState } from 'react';
import { fontSizes, paddingSizes } from '../../utils/sizes';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Historial focus</Text>

            <FlatList
              style={{ width: '100%', height: '100%' }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <Roundedbutton
                size={75}
                title="Borrar"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSizes: fontSizes.md,
  }),
  title: {
    color: 'white',
    fontSizes: fontSizes.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: paddingSizes.md,
  },
});
