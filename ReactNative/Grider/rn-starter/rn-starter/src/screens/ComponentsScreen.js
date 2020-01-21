import React from 'react';
import { View,  Text, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
    const username = "David"

    return (
      <View>
          <Text style={styles.textStyle}>Getting started with React Native!</Text>
          <Text style={styles.subHeaderStyle}>My name is {username}</Text>
      </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen