import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type HeaderProps = {
  text: string;
  color?: string;
};

export const Header = ({text, color}: HeaderProps) => {
  return (
    <View>
      <Text style={[styles.text, {color}]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 20},
});
