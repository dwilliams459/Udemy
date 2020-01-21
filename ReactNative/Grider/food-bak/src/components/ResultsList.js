import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail'

console.log('ResultsList');

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Result Count:{results.length}</Text>
      <Text>{JSON.stringify(results)}</Text>
      <FlatList
        horizontal
        keyExtractor={(results) => results.id}
        data={results}
        renderItem={({ name }) => {
          <Text>value is </Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default ResultsList;

