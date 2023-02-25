//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';
import Regular from '../../../typography/regular-text';
import {Icon} from 'react-native-elements';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
const DropDown = ({
  label,
  value,
  onPress,
  iconName = 'arrow-down-circle-sharp',
  iconType = 'ionicon',
  iconSize = 25,
  iconColor = colors.border,
}) => {
  return (
    <View>
      <Regular label={label} style={styles.labelStyle} />
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Regular label={value} style={styles.valueText} />
        <Icon
          name={iconName}
          type={iconType}
          color={iconColor}
          size={mvs(iconSize)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DropDown;
