import React from 'react';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';

const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/Logo.png')} />
        </View>
     
    )
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#495E57'
    }
});