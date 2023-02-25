import React, {Component} from 'react';
import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import styles from './styles';
import {colors} from '../../../config/colors';
import BackGroundContainer from '../../../components/general/backgroundContainer';
import HomeActionBar from '../../../components/general/homeActionBar';
import DrawerButton from '../../../components/general/DrawerButton';
import AppHeader from '../../../components/general/appHeader';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
      <AppHeader
        onPressLeftIcon={() => {}}
        onPressRightIcon={() => {}}
        title={'Smart Squad'}
        showLeftIcon={true}
      />
      <BackGroundContainer
        onPressMessage={() => {}}
        onPressNotification={() => {}}
      />
      <HomeActionBar />
      <View style={styles.scrollList}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <DrawerButton
            iconType="entypo"
            iconName="pencil"
            label="My Notebook"
            countText={'100'}
            marginTop={3}
          />
          <DrawerButton
            iconType="feather"
            iconName="search"
            onPress={() => navigation.navigate('SearchRecord')}
            label="Search Records"
            marginTop={3}
          />
          <DrawerButton
            iconType="entypo"
            iconName="globe"
            label="Location Awareness"
            marginTop={3}
          />
          <DrawerButton
            iconType="font-awesome"
            iconName="bolt"
            label="My Recent Occ"
            marginTop={3}
          />
          <DrawerButton
            iconType="font-awesome"
            iconName="users"
            label="My Squad"
            marginTop={3}
          />
          <DrawerButton
            iconType="entypo"
            iconName="heart"
            label="My Favourites"
            marginTop={3}
          />
          <DrawerButton
            iconType="font-awesome"
            iconName="tasks"
            label="My Tasks"
            marginTop={3}
          />
          <DrawerButton
            iconType="entypo"
            iconName="ticket"
            label="New Citation"
            marginTop={3}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
