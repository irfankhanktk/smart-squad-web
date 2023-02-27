//import liraries
import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import * as IMGS from '../../../assets/images';
import styles from './styles';
import Regular from '../../../typography/regular-text';
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import Icon from 'react-native-vector-icons/AntDesign'
import IconM from 'react-native-vector-icons/MaterialIcons'
const BackGroundContainer = ({
  firstName,
  lastName,
  marginTop = 0,
  marginBottom = 0,
  onPressMessage,
  onPressNotification,
}) => {
  return (
    <ImageBackground
      source={IMGS.policeLightBar}
      style={styles.container(marginTop, marginBottom)}
      imageStyle={styles.imgLogo}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={onPressMessage}>
          <Icon
            name="message1"
            type="antdesign"
            color={colors.white}
            size={mvs(40)}
          />
        </TouchableOpacity>

        <Image
          source={IMGS.logofull_small}
          style={styles.smallLogo}
          resizeMode="cover"
        />

        <TouchableOpacity onPress={onPressNotification}>
          <IconM
            name="notifications"
            type="material-icon"
            color={colors.white}
            size={mvs(40)}
          />
        </TouchableOpacity>
      </View>
      <Regular
        color={colors.white}
        fontSize={mvs(15)}
        label={'Waqas Ahmed'}
        numberOfLines={1}
      />
    </ImageBackground>
  );
};

export default BackGroundContainer;
