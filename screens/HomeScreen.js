import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Image,  Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import Image from 'react-native-scalable-image';
import { MonoText } from '../components/StyledText';
const { width } = Dimensions.get('window');
export default function HomeScreen() {
  return (
    <View>
        <View  style={styles.viewbanner}>
          <Image source={require('../assets/images/ad1.jpg')} style={styles.banner} resizeMode='contain'/>
        </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  banner: {
    width: width, 
  },
  viewbanner: {
    paddingTop:100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  }
});
