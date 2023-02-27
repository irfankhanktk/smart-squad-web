//import liraries
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import {Icon} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/FontAwesome'
import styles from './styles';
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
const DrawerButton = ({
  iconName = 'user',
  iconColor = colors.iconColor,
  iconType = 'feather',
  iconSize = 30,
  label = 'Label',
  onPress,
  marginTop = 0,
  buttonWidth = 100,
  countText,
}) => {
  return (
    <View style={styles.container(marginTop)}>
      <TouchableOpacity style={styles.btnStyels(buttonWidth)} onPress={onPress}>
        <AntDesign
          name={iconName}
          type={iconType}
          color={iconColor}
          size={mvs(iconSize)}
        />
        <Text style={styles.btnText}>{label}</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>{countText}</Text>
    </View>
  );
};

export default DrawerButton;
