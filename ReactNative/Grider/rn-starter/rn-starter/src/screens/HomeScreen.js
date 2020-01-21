import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.page}>
        <Text style={styles.text}>React Native Course</Text>
        <Button 
          title="Go to Components Demo" 
          onPress={() => navigation.navigate('Components')} 
        />
        <Text></Text>
        <Button 
          title="Go to List Demo" 
          onPress={() => navigation.navigate('List')} 
        />
        <Text></Text>
        <Button 
          title="Go to Image Screen" 
          onPress={() => navigation.navigate('Image')} 
        />
        <Text></Text>
        <Button 
          title="Go to Counter Screen" 
          onPress={() => navigation.navigate('Counter')} 
        />
        <Text></Text>
        <Button 
          title="Go to Color Demo" 
          onPress={() => navigation.navigate('Color')}
        />
        <Text></Text>
        <Button 
          title="Go to Square Screen Demo" 
          onPress={() => navigation.navigate('Square')}
        />
        <Text></Text>
        <Button 
          title="Go to Text Screen Demo" 
          onPress={() => navigation.navigate('Text')}
        />
        <Text></Text>
        <Button 
          title="Go to Text BoxScreen Demo" 
          onPress={() => navigation.navigate('Box')}
        />
    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#2296F3',
    fontWeight: 'bold'
  },
  page: {
    padding: 10
  }

});

export default HomeScreen;
