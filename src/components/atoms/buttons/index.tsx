import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {PlusIcon} from '../../../assets/icons';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import Medium from '../../../typography/medium-text';
import {Loader} from '../loader';
import {Row} from '../row';
type props = {
  onPress: () => void;
  title: string;
  borderRadius?: number;
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};
export const PlusButton = (props: props) => {
  const {onPress, title} = props;
  return (
    <TouchableOpacity style={styles.plusContainer} onPress={onPress}>
      <PlusIcon />
    </TouchableOpacity>
  );
};
export const PrimaryButton = (props: props) => {
  const {
    onPress,
    title,
    disabled,
    loading,
    textStyle,
    containerStyle,
    borderRadius = mvs(6),
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[
        styles.primaryContainer,
        containerStyle,
        {
          borderRadius,
          backgroundColor: `${colors.button}${disabled ? '50' : ''}`,
        },
      ]}
      onPress={onPress}>
      {loading ? (
        <Loader />
      ) : (
        <Medium style={[styles.primaryText, textStyle]} label={title} />
      )}
    </TouchableOpacity>
  );
};
export const RadioButton = (props: props) => {
  const {onPress, selected, title} = props;
  return (
    <Row style={styles.radioRow}>
      <TouchableOpacity onPress={onPress} style={styles.radioContainer}>
        <View
          style={{
            backgroundColor: selected ? colors.primary : colors.border,
            ...styles.radioCircle,
          }}
        />
      </TouchableOpacity>
      <Medium label={title} />
    </Row>
  );
};

const styles = StyleSheet.create({
  radioRow: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  radioCircle: {
    height: mvs(8),
    width: mvs(8),
    borderRadius: mvs(4),
  },
  radioContainer: {
    marginRight: mvs(15),
    backgroundColor: colors.white,
    height: mvs(12),
    width: mvs(12),
    borderRadius: mvs(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusContainer: {
    position: 'absolute',
    bottom: mvs(40),
    ...colors.shadow,
    right: mvs(20),
  },
  plusText: {
    color: colors.white,
    fontSize: mvs(25),
    alignSelf: 'center',
  },
  primaryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
    height: mvs(50),
  },
  primaryText: {
    color: colors.white,
  },
});
