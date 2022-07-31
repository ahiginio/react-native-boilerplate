import { View, Text } from 'react-native';

import { styles } from './SingleItem.styles.js';
const SingleItem = ({ text, itemStyle }) => {
  return (
    <View style={styles[itemStyle]}>
      <Text style={styles[`${itemStyle}Text`]}>{text}</Text>
    </View>
  );
};
export default SingleItem;
