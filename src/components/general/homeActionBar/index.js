//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';
import {colors} from '../../../config/colors';
import {Icon} from 'react-native-elements';
import {mvs} from '../../../config/metrices';
const HomeActionBar = ({
  onPressUpload,
  onPressDataBase,
  onPressEdit,
  onPressOption,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={onPressUpload}>
          <Icon
            name="cloudupload"
            type="antdesign"
            color={colors.white}
            size={mvs(30)}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressDataBase}>
          <Icon
            name="database"
            type="entypo"
            color={colors.white}
            size={mvs(30)}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressEdit}>
          <Icon name="edit" type="edit" color={colors.white} size={mvs(30)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressOption}>
          <Icon
            name="dots-three-vertical"
            type="entypo"
            color={colors.white}
            size={mvs(30)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeActionBar;
