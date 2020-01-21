import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'; 

const ResultsList = ({ title, results, navigation }) => {
  if ((results.length > 0)) {
    return (
      <View style={styles.container} >
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={results => results.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity 
                onPress={() => { navigation.navigate('ResultsShow', { id: item.id })}} 
              >
                <ResultsDetail result={item} />
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  }
})

export default withNavigation(ResultsList);

