import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp'
import { AxiosResponse } from 'axios';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = (searchTerm) => {
    new Promise(() => {
      console.log('promise');
      return yelp.get('/search', {
        params: {
          limit: 20,
          term: searchTerm,
          location: '28277'
        }
      });
    })
    .then((response) => {
      console.log(`returned ${response.data.businesses.length} results` )
      setResults(response.data.businesses);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
      setErrorMessage('Something went wrong');
    })
    .finally(() => {
      console.log('finally');
    })
  }

  useEffect(() => {
    console.log('useEffect');
    searchApi('pizza'); //searchApi('pizza');
  }, []);

  return [searchApi, results, errorMessage];
}