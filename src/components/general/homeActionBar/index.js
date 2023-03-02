//import liraries
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
// import Icon from 'react-native-vector-icons/AntDesign';
// import EIcon from 'react-native-vector-icons/Entypo';
// import { mvs } from '../../../config/metrices';
const HomeActionBar = ({
  onPressUpload,
  onPressDataBase,
  onPressEdit,
  onPressOption,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={onPressUpload}>
          {/* <Icon
            name="cloudupload"
            type="antdesign"
            color={colors.white}
            size={mvs(30)}
          /> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressDataBase}>
          {/* <EIcon
            name="database"
            type="entypo"
            color={colors.white}
            size={mvs(30)}
          /> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressEdit}>
          {/* <Icon name="edit" type="edit" color={colors.white} size={mvs(30)} /> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressOption}>
          {/* <EIcon
            name="dots-three-vertical"
            type="entypo"
            color={colors.white}
            size={mvs(30)}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeActionBar;
