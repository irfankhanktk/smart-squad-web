import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleProp, StyleSheet, TextStyle, TouchableOpacity, View } from 'react-native';
import { splashBg } from '../../../assets/images';
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import { navigate } from '../../../navigation/navigation-ref';
import Medium from '../../../typography/medium-text';
import { Row } from '../row';
type props = {
  style?: StyleProp<TextStyle>
  title?: string
  name?: string
  bellicon?: boolean
  back?: boolean

}
const HomeHeader = ({
  style,
  name,
  title,
  back,
  bellicon,
  ...props
}: props) => {
  const navigation = useNavigation();
  return (
    <Row style={[styles.container, style]}>
      <Row style={{ flex: 1, justifyContent: 'flex-start', }}>
        <Image source={splashBg} style={styles.img} />
        <Medium style={[styles.name]} label={name} />
      </Row>
      <Medium style={[styles.title]} label={title} />
      <View style={{ flex: 1, alignItems: 'flex-end' }} >

      </View>
    </Row>
  )
}
export default React.memo(HomeHeader);

const styles = StyleSheet.create({
  container: {
    height: mvs(36),
    flexDirection: 'row',
    // backgroundColor: colors.secondary,
    paddingHorizontal: mvs(22),
    alignItems: 'center',
  },
  name: {
    fontSize: mvs(12),
    color: colors.white,
    marginHorizontal: mvs(5)
  },
  title: {
    fontSize: mvs(24),
    textAlign: 'center',
    flex: 1,
    color: colors.white,
    marginHorizontal: mvs(5)
  },
  back: {
    marginRight: mvs(20),
  },
  img: {
    height: mvs(20),
    width: mvs(20),
    borderRadius: mvs(10),
  }
});