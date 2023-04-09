import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { styleGlobal } from '../styles-global';

const Splash2 = ({ navigation }) => {

    useEffect(() => {
      // Add any necessary logic for splash screen here, such as loading data or navigating to a different screen
      setTimeout(() => {
        navigation.replace('home'); // Navigate to Home screen after 3 seconds
      }, 3000);
    }, []);
  
    return (
      <View style={styleGlobal.splash}>
        <View style={{alignItems: 'center', justifyContent:'center', marginTop: 250}}>
        <Image
          source={require('../assets/logo.png')}
          style={{maxWidth:200, maxHeight:200}}
        />
        <Image
          source={require('../assets/belatiktext.png')}
          style={{maxWidth:200, maxHeight:50, marginTop:20}}
        />
        </View>
      </View>
    );
  };

export default Splash2;