import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>Child 1</Text>
      <Text style={styles.textStyle2}>Child 2</Text>
      <Text style={styles.textStyle3}>Child 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: 'blue',
    borderWidth: 1,
    margin: 10,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  textStyle1: {
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 5,
    backgroundColor: '#add',
    height: 100,
    width: 100
  },
  textStyle2: {
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 5,
    color: 'red',
    backgroundColor: '#dad',
    height: 100,
    width: 100,
  },
  textStyle3: {
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 5,
    backgroundColor: '#dda',
    height: 100,
    width: 100,
    alignSelf: 'center'
  }
});

export default BoxScreen
