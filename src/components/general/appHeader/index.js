//import liraries
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

const AppHeader = ({
  backgroundColor = colors.black,
  title,
  textColor = colors.white,
  showRightIcon,
  showLeftIcon,
  onPressLeftIcon,
  onPressRightIcon,
  leftIconName = 'menu',
  leftIconType = 'feather',
}) => {
  return (
    <View style={styles.container(backgroundColor)}>
      {showLeftIcon ? (
        <TouchableOpacity onPress={onPressLeftIcon} style={styles.emptyBox}>
          <Icon
            type={leftIconType}
            name={leftIconName}
            color={textColor}
            size={mvs(25)}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyBox}></View>
      )}
      <Text style={styles.titleText(textColor)}>{title}</Text>
      {showRightIcon ? (
        <TouchableOpacity onPress={onPressRightIcon}>
          <Icon
            type="materialicon"
            name="notifications"
            color={textColor}
            size={mvs(25)}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyBox}></View>
      )}
    </View>
  );
};
export default AppHeader;
