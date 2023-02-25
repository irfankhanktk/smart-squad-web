//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollList: {
    flex: 1,
  },
});

//make this component available to the app
export default styles;
