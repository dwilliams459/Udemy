import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
    {
      Alert.alert(
        "Invalid Number", 
        "Number has to be..", 
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
      return;
    }
    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(parseInt(enteredValue));
    Keyboard.dismiss();
  }

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = 
      <Card style={styles.summaryContainer}>
        <Text style={styles.selectedTitle}>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="Start Game!" onPress={() => {}}/>
      </Card>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }} >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input style={styles.input} 
            blurOnSubmit maxLength={2}  
            keyboardType="numeric"
            onChangeText={numberInputHandler}
            value={enteredValue}></Input>
          <View style={styles.buttonContainer}>
            <View style={styles.button} ><Button title="Reset" onPress={resetInputHandler} color={Colors.accent} /></View>
            <View style={styles.button} ><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/></View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  button: {
    width:90
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black'
  },
  input: {
    width: 75
  },
  summaryContainer: {
    marginTop: 20,
  },
  selectedTitle: {
    fontSize: 20,
    textAlign: 'center'
  }

});

export default StartGameScreen;