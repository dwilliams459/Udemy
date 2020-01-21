import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  console.log(state);
  switch (action.colorToChange) {
    case 'red':
      return inBounds(state.red, action.amount)
        ? state : { ...state, red: state.red + action.amount };
    case 'green':
      return inBounds(state.green, action.amount)
        ? state : { ...state, green: state.green + action.amount };
    case 'blue':
      return inBounds(state.blue, action.amount)
        ? state : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
}

const inBounds = (value, amount) => {
  return (value + amount > 255 || value + amount < 0)
}

const SquareScreen = () => {

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
        color="Red" />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
        color="Blue" />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
        color="Green" />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SquareScreen;
