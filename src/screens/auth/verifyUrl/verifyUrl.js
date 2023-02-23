//import liraries
import React, {useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import styles from './styles';
import * as IMGS from '../../../assets/images';
import {PrimaryButton} from '../../../components/atoms/buttons';
import PrimaryInput from '../../../components/atoms/inputs';
import {KeyboardAvoidScrollview} from '../../../components/atoms/keyboard-avoid-scrollview';
import Medium from '../../../typography/medium-text';
import {verifyUrlValidation} from '../../../validations';
import {useFormik} from 'formik';
import {onVerifyUserUrl} from '../../../services/api/api-actions';
import axios from 'axios';
const VerifyUrl = props => {
  const initialValues = {
    agencyUrl: '',
  };
  const [loading, setloading] = useState(false);
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: verifyUrlValidation,
      onSubmit: () => {},
    });

  const onSubmit = () => {
    if (isValid && Object.keys(touched).length > 0) {
      try {
        verifyUserUrl();
      } catch (error) {
        console.log(error);
      }
    } else {
      setFieldTouched('agencyUrl', true);
    }
  };

  const verifyUserUrl = async () => {
    setloading(true);
    var data = {
      agencyUrl: values.agencyUrl,
    };

    let res = await onVerifyUserUrl(
      '/services/UserManagement.asmx/VerifyURL',
      data,
    );

    if (res?.error) {
      Alert.alert('Please enter valid url ');
    } else {
      props.navigation.navigate('VerifyAgencyCode', {
        agencies: res?.d?.agencies,
      });
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
            label={`Smart Squad Agency URL:`}
            style={styles.rmsCredentails}
          />
          <PrimaryInput
            label={'Agency URL'}
            onChangeText={str => setFieldValue('agencyUrl', str)}
            onBlur={() => setFieldTouched('agencyUrl', true)}
            value={values.agencyUrl}
            placeholder={'Https: //'}
            error={
              touched.agencyUrl && errors?.agencyUrl
                ? errors.agencyUrl
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

export default VerifyUrl;
