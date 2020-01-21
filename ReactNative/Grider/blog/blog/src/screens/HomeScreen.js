import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 

const HomeScreen = () => {
  return (
    <View><Text>Hello World asdf</Text></View>
  )
}

HomeScreen.navigationOptions = () => {
  return {
    headerRight: <Text>Hello</Text>
    // headerRight: <Text>Hello</Text> <Feather name="plus" size={30} />
  };
};

export default HomeScreen