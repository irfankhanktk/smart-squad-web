import React from 'react';
import moment from 'moment';
import {Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import {Icon} from 'react-native-elements';
import styles from './styles';
const PersonSearchCard = ({
  surName,
  middleName,
  givenName,
  desc,
  score,
  isWarn,
  DOB,
  currentAge,
  gender,
  cautionCount,
  onItemPress,
  item,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(colors.gray)}
      onPress={() => onItemPress(item)}>
      <View>
        <Text style={styles.title(colors)}>
          {givenName + ' ' + middleName + ' ' + surName}
        </Text>
        <View height={mvs(5)} />
        <Text style={styles.subTitleText}>{`${moment(
          parseInt(DOB.slice(6, -2)),
        ).format('YYYY-MMM-DD')} (${currentAge}) ${gender}`}</Text>
      </View>

      <View style={styles.rowView}>
        {cautionCount > 0 && (
          <Icon
            name="alert-circle"
            color={colors.red}
            style={styles.alertStyle}
            size={mvs(25)}
            type="materialicon"
          />
        )}
        <View style={styles.rightTextContainer}>
          <Text style={styles.rightText}>{score}</Text>
        </View>
        <View width={mvs(10)} />
        <Icon
          type="font-awesome"
          name="chevron-circle-right"
          color={colors.black}
          size={mvs(20)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PersonSearchCard;
