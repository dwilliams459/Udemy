import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 
      'Bearer 2EOJ3mS2Wj73TJNCjwoe8fVKnKGUh8lOQh0k1NXAoOZccvTWlo5A8r2amku8hIOfXf_a1tXgDucYkBa1391g6DDAM0VZ-nLdoP-mgyc2AAWYCpIHABYqlL8GGNl7XXYx'  }
});


