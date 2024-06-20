import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export const ScreenLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/bg.png')}
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#fff'} />
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

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
});
