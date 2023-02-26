//import liraries
import React, {useState} from 'react';
import {View, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {KeyboardAvoidScrollview} from '../../../components/atoms/keyboard-avoid-scrollview';
import AppHeader from '../../../components/general/appHeader';
import {colors} from '../../../config/colors';
import {PrimaryButton} from '../../../components/atoms/buttons';
import {useFormik} from 'formik';
import {Menu, Divider} from 'react-native-paper';
import {searchPersomValidationSchema} from '../../../validations';
import PrimaryInput from '../../../components/atoms/inputs';
import DropDown from '../../../components/atoms/dropDown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
const SearchPerson = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setFieldValue('dob', moment(date).format('MMM  DD,YYYY'));
    setFieldTouched('dob', true);
    hideDatePicker();
  };

  const openMenu = () => {
    setVisible(true);
  };
  const closeMenu = gender => {
    setFieldValue('gender', gender);
    setFieldTouched('gender', true);
    setVisible(false);
  };

  const initialValues = {
    fName: '',
    lName: '',
    dob: '',
    license: '',
    fps: '',
    gender: 'Male',
    phone: '',
  };
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: searchPersomValidationSchema,
      onSubmit: () => {},
    });

  const onSubmit = () => {
    if (isValid && Object.keys(touched).length > 0) {
      try {
        let obj = {
          sessionID: '5b816bea-d2d1-4b87-a7d2-221c221878e3',
          Criteria: {
            givenName: values.fName,
            middleName: '',
            surName: values.lName,
            DOB: values.dob,
            DOBRange: false,
            gender: values.gender,
            licenseNo: values.license,
            FPSNo: values.fps,
            phoneNumber: '',
            searchIdentifier: '',
            returnStartRecord: 0,
            returnRange: 20,
            currentDomain: false,
          },
        };
        // dispatch(onLogin(obj, setLoading, navigation));
      } catch (error) {
        console.log(error);
      }
    } else {
      setFieldTouched('email', true);
      setFieldTouched('password', true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
      <AppHeader
        onPressLeftIcon={() => navigation.goBack()}
        onPressRightIcon={() => {}}
        title={'Search Person'}
        showLeftIcon={true}
        leftIconName="arrow-left"
      />

      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.middle}>
          <PrimaryInput
            label={'First Name'}
            onChangeText={str => setFieldValue('fName', str)}
            onBlur={() => setFieldTouched('fName', true)}
            value={values.fName}
            placeholder={'First Name'}
            error={touched.fName && errors?.fName ? errors?.fName : undefined}
          />
          <PrimaryInput
            label={'Last Name'}
            onChangeText={str => setFieldValue('lName', str)}
            onBlur={() => setFieldTouched('lName', true)}
            value={values.lName}
            placeholder={'Last Name'}
            error={touched.lName && errors?.lName ? errors?.lName : undefined}
          />
          <TouchableOpacity onPress={() => showDatePicker()}>
            <PrimaryInput
              label={'Date Of Birth'}
              onChangeText={str => setFieldValue('dob', str)}
              onBlur={() => setFieldTouched('dob', true)}
              value={values.dob}
              editable={false}
              placeholder={'Date of birth'}
              error={touched.dob && errors?.dob ? errors?.dob : undefined}
            />
          </TouchableOpacity>

          <PrimaryInput
            label={'FPS'}
            onChangeText={str => setFieldValue('fps', str)}
            onBlur={() => setFieldTouched('fps', true)}
            value={values.fps}
            placeholder={'FPS '}
            error={touched.fps && errors?.fps ? errors?.fps : undefined}
          />

          <PrimaryInput
            label={'Phone Number'}
            onChangeText={str => setFieldValue('phone', str)}
            onBlur={() => setFieldTouched('phone', true)}
            value={values.phone}
            placeholder={'Phone number'}
            error={touched.phone && errors?.phone ? errors?.phone : undefined}
            keyboardType="phone-pad"
          />

          <Menu
            visible={visible}
            onDismiss={() => closeMenu('')}
            anchor={
              <DropDown
                label={'Gender'}
                value={values.gender}
                onPress={() => setVisible(true)}
              />
            }>
            <Menu.Item onPress={() => closeMenu('Male')} title="Male" />
            <Divider />
            <Menu.Item onPress={() => closeMenu('Female')} title="Female" />
            <Divider />
            <Menu.Item onPress={() => closeMenu('Other')} title="Other" />
          </Menu>

          <PrimaryButton
            title={'Search'}
            onPress={() => navigation.navigate('PersonSearchResult')}
            containerStyle={styles.button}
            loading={loading}
          />
        </View>
      </KeyboardAvoidScrollview>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </SafeAreaView>
  );
};

export default SearchPerson;
