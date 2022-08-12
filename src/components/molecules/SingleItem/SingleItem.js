import { TouchableOpacity, Text, Image } from 'react-native';

import { styles } from './SingleItem.styles.js';
const SingleItem = ({ text, image, itemStyle, imageStyle, onPress }) => {
  return (
    <TouchableOpacity style={styles[itemStyle]} onPress={onPress}>
      {image && <Image source={{ uri: image }} style={styles[imageStyle]} />}
      <Text style={styles[`${itemStyle}Text`]}>{text}</Text>
    </TouchableOpacity>
  );
};
export default SingleItem;
