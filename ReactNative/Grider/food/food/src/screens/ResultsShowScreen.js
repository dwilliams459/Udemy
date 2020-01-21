import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam('id');
  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, [])

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>{result.name}</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Address: </Text><Text style={styles.formDetail}>{result.location.display_address}</Text>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Status: </Text><Text style={styles.formDetail}>Now {(result.is_closed === 'true') ? 'Closed' : 'Open'}</Text>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Price: </Text><Text style={styles.formDetail}>{result.price}</Text>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Rating: </Text><Text style={styles.formDetail}>{result.rating}</Text>
      </View>
      <View style={styles.formGroup}>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Phone: </Text><Text style={styles.formDetail}>{result.phone}</Text>
      </View>
      <View style={styles.formGroupImages} >
        <Text style={styles.label}>Photos</Text>
        <FlatList
          style={styles.photoList}
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return (
              <View>
                <Image style={styles.image} source={{ uri: item }} />
              </View>
            )
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    height: 150,
    width: 300,
    marginLeft: 8,
    marginBottom: 5,
    borderRadius: 6
  },
  header1: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5
  },
  header2: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 5
  },
  detail: {
    marginLeft: 5,
    fontWeight: 'normal'
  },
  label: {
    fontWeight: 'bold',
  },
  formDetail: {

  },
  formGroup: {
    flexDirection: 'row',
    marginLeft: 5
  },
  formGroupImages: {
    marginLeft: 5
  },
  photoList: {
    marginTop: 5
  }

})

export default ResultsShowScreen;
