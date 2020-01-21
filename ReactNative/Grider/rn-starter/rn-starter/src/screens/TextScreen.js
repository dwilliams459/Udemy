import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const validText = (condition, errorMessage) => {
    return ({condition}) 
      ? <Text style={styles.warning}>{errorMessage}</Text> 
      : <Text></Text> 
  }

  const a = (b) => { console.log(b)}

  return (
    <View style={styles.page}>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Enter Name</Text>
        <TextInput autoCapitalize="none"
          autoCorrect={false}
          style={styles.formInput}
          onChangeText={(newValue) => setName(newValue)}
          value={name}></TextInput>
        <Text>My Name is {name}</Text>
        { (name.length === 0)  
            ? <Text style={styles.warning}>Name is required</Text> : <Text></Text> }

      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Password</Text>
        <TextInput autoCapitalize="none"
          autoCorrect={false}
          style={styles.formInput}
          onChangeText={(newValue) => setPassword(newValue)}
          value={password}></TextInput>
        { (password.length < 6)  
            ?  <Text style={styles.warning}>Password must be at least 6 characters long</Text>
            : <Text></Text> }
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  page: {
    padding: 10
  },
  formInput: {
    marginTop: 2,
    paddingLeft: 7,
    paddingRight: 7,
    borderColor: 'grey',
    borderWidth: 1
  },
  formGroup: {
    marginBottom: 10
  },
  formLabel: {
    color: '#333'
  },
  warning: {
    color: '#a11'
  }

});

export default TextScreen;
