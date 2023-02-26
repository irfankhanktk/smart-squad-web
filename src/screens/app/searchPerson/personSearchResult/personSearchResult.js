//import liraries
import React, {useState} from 'react';
import {View, FlatList, SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';
import PersonSearchCard from '../../../../components/feed/personSearchCard';
import {colors} from '../../../../config/colors';
import AppHeader from '../../../../components/general/appHeader';
const PersonSearchResult = ({navigation}) => {
  const [personList, setpersonList] = useState([1, 1, 1, 1]);
  const renderItem = (item, index) => {
    return (
      <PersonSearchCard
        middleName={''}
        surName={'Rahil'}
        givenName={'Shawn'}
        DOB={'2022-22-02'}
        cautionCount={10}
        currentAge={35}
        desc={''}
        gender={'Male'}
        isWarn={false}
        item={item}
        onItemPress={() => {}}
        score={100}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
      <AppHeader
        onPressLeftIcon={() => navigation.goBack()}
        onPressRightIcon={() => {}}
        title={'Search Result'}
        showLeftIcon={true}
        leftIconName="arrow-left"
      />
      <FlatList
        data={personList}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default PersonSearchResult;
