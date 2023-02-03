import React, { useState } from 'react';
import {
  I18nManager, KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

import { mvs } from '../../../config/metrices';
import i18n from '../../../translation';
import Regular from '../../../typography/regular-text';
import { colors } from './../../../config/colors';
type Item = { label: string, value: string }
type props = {
  onChangeText: (text: string, type?: boolean) => void;
  onPress?: () => void;
  value?: string;
  label?: string;
  items?: Item[];
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  errorStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean | undefined;
  isPassword?: boolean;
  editable?: boolean;
  error?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  onBlur?:
  | ((e?: NativeSyntheticEvent<TextInputFocusEventData>) => void)
};
const PrimaryInput = (props: props) => {
  const [secure, setSecure] = useState(true);
  const {
    onChangeText,
    value,
    style,
    label = '',
    placeholder = 'type here',
    labelStyle,
    containerStyle,
    secureTextEntry,
    isPassword,
    keyboardType,
    error,
    editable = true,
    onBlur = () => { },
    errorStyle,
  } = props;
  const { t } = i18n;
  return (
    <>
      <Regular label={`${t(label)}`} style={styles.labelStyle} />
      <View style={[styles.Container, containerStyle]}>
        <TextInput
          editable={editable}
          onBlur={onBlur}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && secure}
          value={value}
          placeholderTextColor={`${colors.black}50`}
          onChangeText={onChangeText}
          placeholder={t(placeholder)}
          style={[styles.textInput, style]}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.PasswordIcon}
            onPress={() => setSecure(!secure)}>

          </TouchableOpacity>
        )}
      </View>
      <Regular label={error ? `${t(error)}` : ''} style={[styles.errorLabel, errorStyle]} />

    </>
  );
};
export default React.memo(PrimaryInput);



export const SearchInput = (props: props) => {
  const [secure, setSecure] = useState(true);
  const {
    onChangeText,
    value,
    style,
    label,
    placeholder = 'Search',
    labelStyle,
    containerStyle,
    secureTextEntry,
    keyboardType,
    error,
    onBlur,
    editable
  } = props;
  return (
    <>
      <View
        style={[
          styles.searchContainer,
          { marginBottom: error ? mvs(3) : mvs(10) },
          containerStyle,
        ]}>
        <TextInput
          editable={editable}
          onBlur={onBlur}
          keyboardType={keyboardType}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={`${colors.primary}50`}
          onChangeText={onChangeText}
          style={[styles.searchTextInput, style]}
        />
        <TouchableOpacity
          style={styles.PasswordIcon}
          onPress={() => { }}>

        </TouchableOpacity>
      </View>
      {error && <Regular label={error} style={styles.secondaryErrorLabel} />}
    </>
  );
};




const styles = StyleSheet.create({
  Container: {
    alignItems: 'flex-start',
    borderWidth: mvs(0.7),
    height: mvs(48),
    borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: mvs(10),
    backgroundColor: colors.white,
  },


  textContainerStyle: { backgroundColor: colors.secondary },
  textInput: {
    color: colors.black,
    textAlignVertical: 'center',
    fontSize: mvs(18),
    height: '100%',
    width: '100%',
    paddingHorizontal: mvs(10),
  },
  textInputStyle: {
    color: colors.white,
    height: mvs(56),
    backgroundColor: colors.secondary,
    margin: 0,
    fontSize: mvs(17),

  },
  labelStyle: {
    alignSelf: 'flex-start',
    color: colors.white,
    marginBottom: mvs(3),
    paddingHorizontal: mvs(5),
  },
  PasswordIcon: {
    position: 'relative',
    alignSelf: 'center',
  },
  errorLabel: {
    alignSelf: 'flex-start',
    color: colors.red,
    fontSize: mvs(10),
    marginBottom: mvs(5),
    height: mvs(15),
    marginHorizontal: mvs(5),

  },
  searchContainer: {
    marginHorizontal: mvs(20),
    borderWidth: mvs(0.7),
    height: mvs(40),
    borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(12),
    marginVertical: mvs(20),
    backgroundColor: colors.gray,
  },
  secondaryTextInput: {
    // alignSelf: 'flex-start',
    color: colors.white,
    textAlignVertical: 'center',
    height: mvs(36),
    fontSize: mvs(14),
    flex: 1,
    // maxWidth: mvs(275),
    padding: mvs(0),
  },
  searchTextInput: {
    color: colors.white,
    textAlignVertical: 'center',
    height: mvs(36),
    fontSize: mvs(14),
    width: mvs(275),
    padding: mvs(0),
  },
  secondaryErrorLabel: {
    alignSelf: 'flex-start',
    color: colors.red,
    fontSize: mvs(10),
    marginBottom: mvs(10),
    marginHorizontal: mvs(5)
  },
});
