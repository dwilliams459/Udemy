import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail.js';

const ImageScreen = () => {
    

    return (
        <View style={styles.stylePage}>
            <Text style={styles.styleHeader}>Images</Text>
            <ImageDetail title="Forest" score={9}
                imageSource={require('../../assets/forest.jpg')} />
            <ImageDetail title="Beach" score={3}
                imageSource={require('../../assets/beach.jpg')} />
            <ImageDetail title="Mountain" score={5}
                imageSource={require('../../assets/mountain.jpg')} />
        </View>
    )
};

const styles = StyleSheet.create({
    styleHeader: {
        fontSize: 35
    },
    stylePage: {
        padding: 10
    }
});

export default ImageScreen;
