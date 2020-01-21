import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const INCREMENT_AMOUNT = 1;
const reducer = (state, action) => {
  return { ...state, counter: state.counter + action.amount };
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  
  return (
    <View>
      <Button title="Increase" onPress={() => {
        dispatch({ amount: INCREMENT_AMOUNT });
      }} />
      <Text></Text>
      <Button title="Decrease" onPress={() => {
        dispatch({ amount: -1 * INCREMENT_AMOUNT });
      }} />
      <Text></Text>
      <Text>Current count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen