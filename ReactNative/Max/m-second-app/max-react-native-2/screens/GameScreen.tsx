import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import Number from '../components/NumberContainer';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generteRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum: number = Math.floor(Math.random() * (max - min)) + min
  if (rndNum === exclude) {
    return generteRandomBetween(min, max, exclude)
  } else {
    return rndNum;
  }
}

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(generteRandomBetween(1, 100, props.userChoice))

  return (
    <View style={styles.screen}>
      <Text>Oponents Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={() => { }} />
        <Button title="Greater" onPress={() => { }} />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
});

export default GameScreen;