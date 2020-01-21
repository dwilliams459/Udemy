import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  
  return (
    <View>
      <SearchBar term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : <Text></Text> }
      <Text>Showing {results.length}</Text>
      <Text>Result Count:{results.length}</Text>
      {/* <Text>First: {JSON.stringify(results[0])}}</Text> */}
      {/* <Text>{JSON.stringify(results)}</Text> */}
      <FlatList
        horizontal
        keyExtractor={(results) => results.id}
        data={results}
        renderItem={({ item }) => {
          <Text>value is </Text>
        }}
      />


      {/* <ResultsList results={filterResultsByPrice('$$')} title="Cost Effective"   /> */}
      {/* <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Expensive" />
      <ResultsList results={filterResultsByPrice('$$$$')} title="Big Spender" /> */}
    </View>
  )
}

const styles = StyleSheet.create({});

export default SearchScreen;
