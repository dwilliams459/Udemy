import React, { useState } from 'react';
import { StyleSheet, Text, View, Touchable, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.ListItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ListItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'white',
    borderWidth: 2,
    marginTop:10
  }
});
export default GoalItem;