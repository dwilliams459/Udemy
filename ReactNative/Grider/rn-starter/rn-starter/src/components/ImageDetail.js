import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {
    return (
        <View style={styles.Header}>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Score {score}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageDetail;
