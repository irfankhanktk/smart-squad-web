//import liraries
import React, { Component } from 'react';
import { View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import styles from './styles';
import { colors } from '../../../config/colors';
import DrawerButton from '../../../components/general/DrawerButton';
import AppHeader from '../../../components/general/appHeader';
const SearchRecord = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
      <AppHeader
        onPressLeftIcon={() => navigation.goBack()}
        onPressRightIcon={() => { }}
        title={'Search Record'}
        showLeftIcon={true}
        leftIconName="arrow-left"
      />
      <View style={styles.scrollList}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <DrawerButton
            iconType="entypo"
            iconName="user"
            label="Person"
            marginTop={3}
            onPress={() => navigation.navigate('SearchPerson')}
          />
          <DrawerButton
            iconType="entypo"
            iconName="map-marker"
            label="Location"
            marginTop={3}
          />
          <DrawerButton
            iconType="font-awesome"
            iconName="car"
            label="vehicle"
            marginTop={3}
          />
          <DrawerButton
            iconType="material-icon"
            iconName="building-o"
            label="Business"
            marginTop={3}
          />
          <DrawerButton
            iconType="font-awesome"
            iconName="bolt"
            label="Accurrence"
            marginTop={3}
          />
          <DrawerButton
            iconType="entypo"
            iconName="pencil"
            label="Note"
            marginTop={3}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchRecord;
