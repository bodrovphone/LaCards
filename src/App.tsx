import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from 'react-native';
import {Header} from './components/Header';
import {globalStyle} from '../assets/styles/globalStyle';

function App(): React.JSX.Element {
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#fff'} />
        <View style={styles.header}>
          <Header text="LaCards" color={globalStyle.primaryColor.color} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    maxHeight: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    color: '#FFF',
  },
});

export default App;
