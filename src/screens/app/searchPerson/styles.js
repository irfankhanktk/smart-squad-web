//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  contentContainerStyle: {
    paddingHorizontal: mvs(20),
    flexGrow: 1,
  },
  button: {
    marginTop: mvs(50),
  },
});

//make this component available to the app
export default styles;
