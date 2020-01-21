import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>{navigation.getParam('id')}</Text>
    </View>
  );
}

ShowScreen.navigationOptons = () => {
  return {
    headerRight: <Feather name="plus" size={30} />
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
