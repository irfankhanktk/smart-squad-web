import React from 'react';
import { ActivityIndicator, ColorValue, StyleSheet, View } from 'react-native';
import { colors } from '../../../config/colors';
type props = {
  size?: number | 'small' | 'large' | undefined;
  color?: ColorValue | undefined;
  bgColor?: ColorValue | undefined;
};
export const Loader = (props: props) => {
  const { size = 'small', color = colors.white, bgColor = colors.transparent } = props;
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
