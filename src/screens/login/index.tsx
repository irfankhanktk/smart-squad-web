import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import React from 'react';
import { I18nManager, Image, ImageBackground, Platform, TouchableOpacity, View } from 'react-native';
import { PrimaryButton } from '../../components/atoms/buttons';
import PrimaryInput from '../../components/atoms/inputs';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { Row } from '../../components/atoms/row';
import { mvs } from '../../config/metrices';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import i18n from '../../translation';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import { loginValidationSchema } from '../../validations';
import { colors } from './../../config/colors';
import Bold from './../../typography/bold-text';
import Regular from './../../typography/regular-text';
import styles from './styles';
import * as IMGS from '../../assets/images'

type props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const loginLoading = useAppSelector(s => s?.user.loginLoading);
  const [rememberMe, setRememberMe] = React.useState(false);
  const { t } = i18n;
  const initialValues = {
    username: '',
    password: '',
  };
  const { values, errors, touched, setFieldValue, setFieldTouched, isValid } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: loginValidationSchema,
      onSubmit: () => { },
    });
  const onSubmit = () => {
    if (isValid && Object.keys(touched).length > 0) {
      try {

      } catch (error) {
        console.log(error);
      }
    } else {
      setFieldTouched('email', true)
      setFieldTouched('password', true)
    }
  };
  React.useEffect(() => {

  }, [])
  return (
    <View style={styles.container}>
      <ImageBackground source={IMGS.login_BG} style={styles.img}>
        <KeyboardAvoidScrollview
          contentContainerStyle={styles.contentContainerStyle}>
          <Image source={IMGS.logofull_small} style={{ alignSelf: 'center', marginBottom: mvs(15), height: mvs(90), width: mvs(250) }} />
          <View style={styles.middle}>
            <Medium
              label={`Please provide your RMS \ncredentails`}
              style={{ alignSelf: 'center', textAlign: 'center', lineHeight: mvs(28), fontSize: mvs(20) }} />
            <PrimaryInput
              label={'Username'}
              onChangeText={str => setFieldValue('username', str)}
              onBlur={() => setFieldTouched('username', true)}
              value={values.username}
              placeholder={'Username'}
              error={touched.username && errors?.username ? errors.username : undefined}
            />
            <PrimaryInput
              secureTextEntry
              placeholder={'label_pass'}
              label={'label_pass'}
              onChangeText={str => setFieldValue('password', str)}
              onBlur={() => setFieldTouched('password', true)}
              value={values.password}
              isPassword
              error={
                touched.password && errors?.password ? errors.password : undefined
              }
            />
            <PrimaryInput
              secureTextEntry
              placeholder={'Reason for access'}
              label={'Reason for access'}
              onChangeText={str => setFieldValue('password', str)}
              onBlur={() => setFieldTouched('password', true)}
              value={values.password}
              isPassword
              error={
                touched.password && errors?.password ? errors.password : undefined
              }
            />
            <PrimaryButton
              title={t('login')}
              onPress={() => onSubmit()}
              containerStyle={styles.button}
              loading={loginLoading}
            />
            <Medium style={styles.accountText} color={colors.white} label={`${'Version 2.1'}`} />
          </View>
        </KeyboardAvoidScrollview>
      </ImageBackground>

    </View>
  );
};
export default Login;
