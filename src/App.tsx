import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Header} from './components/Header/Header';
import {globalStyle} from '../assets/styles/globalStyle';
import {ScreenLayout} from './components/ScreenLayout/ScreenLayout';

function App(): React.JSX.Element {
  return (
    <ScreenLayout>
      <View style={styles.header}>
        <Header text="LaCards" color={globalStyle.primaryColor.color} />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    color: '#FFF',
  },
});

export default App;
