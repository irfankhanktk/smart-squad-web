//import liraries
import React, {useState} from 'react';
import {View, Image, Alert} from 'react-native';
import styles from './styles';
import * as IMGS from '../../../assets/images';
import {PrimaryButton} from '../../../components/atoms/buttons';
import PrimaryInput from '../../../components/atoms/inputs';
import {KeyboardAvoidScrollview} from '../../../components/atoms/keyboard-avoid-scrollview';
import Medium from '../../../typography/medium-text';
import {
  verifyAgencyCodeValidation,
  verifyUrlValidation,
} from '../../../validations';
import {useFormik} from 'formik';
import {onVerifyUserUrl} from '../../../services/api/api-actions';
const VerifyAgencyCode = props => {
  const agencies = props.route?.params?.agencies;

  const [agenciesList, setagenciesList] = useState([...agencies]);
  console.log('agenciesList:', agenciesList);
  const initialValues = {
    agencyCode: '',
  };
  const [loading, setloading] = useState(false);
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: verifyAgencyCodeValidation,
      onSubmit: () => {},
    });

  const onSubmit = () => {
    if (isValid && Object.keys(touched).length > 0) {
      try {
        confirmUserAgencyCode();
      } catch (error) {}
    } else {
      setFieldTouched('agencyCode', true);
    }
  };

  const confirmUserAgencyCode = async () => {
    setloading(true);
    let list = [...agenciesList];
    let flag = false;
    let obj = {};
    list.map(e => {
      console.log('====================================');
      console.log(e?.code.toUpperCase());
      console.log(values?.agencyCode.toUpperCase());
      console.log('====================================');
      if (values?.agencyCode.toUpperCase() == e?.code.toUpperCase()) {
        obj = e;
        flag = true;
      }
    });

    if (flag) {
      props.navigation.navigate('Login', {data: obj});
    } else {
      Alert.alert('Code invalid.');
    }
    setloading(false);
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <Image source={IMGS.logofull_small} style={styles.imgLogo} />
        <View style={styles.middle}>
          <Medium
            label={`Smart Squad Agency Code`}
            style={styles.rmsCredentails}
          />
          <PrimaryInput
            label={'Agency Code'}
            onChangeText={str => setFieldValue('agencyCode', str)}
            onBlur={() => setFieldTouched('agencyCode', true)}
            value={values.agencyCode}
            placeholder={'0000-0000-000'}
            error={
              touched.agencyCode && errors?.agencyCode
                ? errors.agencyCode
                : undefined
            }
          />

          <PrimaryButton
            title={'Next'}
            onPress={() => onSubmit()}
            containerStyle={styles.button}
            loading={loading}
          />
        </View>
      </KeyboardAvoidScrollview>
    </View>
  );
};

export default VerifyAgencyCode;
