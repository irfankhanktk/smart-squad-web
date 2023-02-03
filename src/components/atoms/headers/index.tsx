import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { I18nManager, StyleProp, StyleSheet, TextStyle, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import Medium from '../../../typography/medium-text';
import { Row } from '../row';
type props = {
  style?: StyleProp<TextStyle>;
  title?: string;
  back?: boolean;
  bellicon?: boolean;
};
const AppHeader = ({ style, title, back, bellicon, ...props }: props) => {
  const navigation = useNavigation();
  return (
    <Row style={[styles.container, style]}>
      <>
        {back ? (
          <TouchableOpacity onPress={() => navigation?.goBack()}>
          </TouchableOpacity>
        ) : <View style={{ width: mvs(20) }} />}
      </>

      <Medium style={[styles.title]} label={title} />
    </Row>
  );
};
export default React.memo(AppHeader);

const styles = StyleSheet.create({
  container: {
    height: mvs(40),
    alignItems: 'center',
    paddingHorizontal: mvs(20),
  },
  title: {
    fontSize: mvs(20),
    color: colors.white,
  },
});
