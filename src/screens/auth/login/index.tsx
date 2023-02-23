import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import React from 'react';
import { Image, ImageBackground, Platform, View } from 'react-native';
import * as IMGS from '../../../assets/images';
import { PrimaryButton } from '../../../components/atoms/buttons';
import PrimaryInput from '../../../components/atoms/inputs';
import { KeyboardAvoidScrollview } from '../../../components/atoms/keyboard-avoid-scrollview';
import { useAppDispatch } from '../../../hooks/use-store';
import { onLogin } from '../../../services/api/api-actions';
import i18n from '../../../translation';
import RootStackParamList from '../../../types/navigation-types/root-stack';
import Medium from '../../../typography/medium-text';
import { loginValidationSchema } from '../../../validations';
import { colors } from '../../../config/colors';
import styles from './styles';
import {
  getDeviceId,
  getUniqueId,
  getManufacturer,
  getDeviceType,
} from 'react-native-device-info';
type props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = (props: props) => {
  const { navigation } = props;
  const data = props?.route?.params?.data;
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(false);
  const { t } = i18n;
  const initialValues = {
    username: '',
    password: '',
    reason: '',
  };
  const { values, errors, touched, setFieldValue, setFieldTouched, isValid } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: loginValidationSchema,
      onSubmit: () => { },
    });
  console.log('errors,', errors);

  const onSubmit = () => {
    console.log(isValid);
    console.log(Object.keys(touched).length > 0);

    if (isValid && Object.keys(touched).length > 0) {
      try {
        var obj = {
          userInfo: {
            LoginID: values.username,
            password: values.password,
            reasonForLogin: values.reason,
            //  "AgencyID": user.verifyCode.AgencyID[0],
            AgencyID: data?.code,
            deviceID: getDeviceId(),
            deviceType: Platform.OS,
          },
        };
        console.log('====================================::::::');
        console.log(obj);
        console.log('====================================');
        dispatch(onLogin(obj, setLoading, navigation));

      } catch (error) {
        console.log(error);
      }
    } else {
      setFieldTouched('email', true);
      setFieldTouched('password', true);
    }
    // } else {
    //   setFieldTouched('email', true)
    //   setFieldTouched('password', true)
    // }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={IMGS.login_BG} style={styles.img}>
        <KeyboardAvoidScrollview
          contentContainerStyle={styles.contentContainerStyle}>
          <Image source={IMGS.logofull_small} style={styles.imgLogo} />
          <View style={styles.middle}>
            <Medium
              label={`Please provide your RMS \ncredentails`}
              style={styles.rmsCredentails}
            />
            <PrimaryInput
              label={'Username'}
              onChangeText={str => setFieldValue('username', str)}
              onBlur={() => setFieldTouched('username', true)}
              value={values.username}
              placeholder={'Username'}
              error={
                touched.username && errors?.username
                  ? errors.username
                  : undefined
              }
            />
            <PrimaryInput
              placeholder={'label_pass'}
              label={'label_pass'}
              onChangeText={str => setFieldValue('password', str)}
              onBlur={() => setFieldTouched('password', true)}
              value={values.password}
              isPassword
              error={
                touched.password && errors?.password
                  ? errors.password
                  : undefined
              }
            />
            <PrimaryInput
              placeholder={'Reason for access'}
              label={'Reason for access'}
              onChangeText={str => setFieldValue('reason', str)}
              onBlur={() => setFieldTouched('reason', true)}
              value={values.reason}
              error={
                touched.reason && errors?.reason ? errors.reason : undefined
              }
            />
            <PrimaryButton
              title={t('login')}
              onPress={() => onSubmit()}
              containerStyle={styles.button}
              loading={loading}
            />
            <Medium
              style={styles.accountText}
              color={colors.white}
              label={`${'Version 2.1'}`}
            />
          </View>
        </KeyboardAvoidScrollview>
      </ImageBackground>
    </View>
  );
};
export default Login;
