//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mvs} from '../../../config/metrices';
import {colors} from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: mvs(0.7),
    height: mvs(48),
    borderRadius: mvs(10),
    backgroundColor: colors.white,
    paddingRight: mvs(10),
  },

  labelStyle: {
    alignSelf: 'flex-start',
    color: colors.white,
    marginBottom: mvs(3),
    paddingHorizontal: mvs(5),
  },

  valueText: {
    color: colors.black,
    paddingLeft: mvs(10),
  },
});

//make this component available to the app
export default styles;
