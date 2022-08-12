import { View, TouchableOpacity } from 'react-native';

import colors from '../../../constants/colors';
import { GeneralStyles } from '../../../styles';
import { CustomImage, CustomText } from '../../atoms';
import { styles } from './CategoryIcon.styles';
const { fs14, textMedium } = GeneralStyles;
const CategoryIcon = ({ category, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CustomImage icon={category.icon} imageStyle={{ width: 40, height: 40 }} />
      <CustomText
        text={category.name}
        textStyle={[fs14, textMedium, { color: colors.darkGray, marginTop: 8 }]}
      />
    </TouchableOpacity>
  );
};

export default CategoryIcon;
