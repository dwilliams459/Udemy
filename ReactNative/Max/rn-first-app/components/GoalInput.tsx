import React, { useState } from 'react'
import { View, Button, TextInput, StyleSheet, Modal, ShadowPropTypesIOS } from 'react-native'

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  const cancelHandler = () => {
    setEnteredGoal('');
    props.onCancel();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <View style={styles.addCancelButtons}>
          <View style={styles.button}><Button title="Cancel" onPress={cancelHandler} color="red" /></View>
          <View style={styles.button}><Button title="Add" onPress={addGoalHandler} /></View>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    borderBottomColor: '#aaa',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingLeft: 10
  },
  addCancelButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:'60%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput
