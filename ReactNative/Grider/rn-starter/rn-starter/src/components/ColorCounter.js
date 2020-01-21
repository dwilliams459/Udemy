import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Text></Text>
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export default ColorCounter;
