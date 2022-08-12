import { View, Text } from 'react-native';

import colors from '../../../constants/colors';
import { GeneralStyles } from '../../../styles';
import { styles } from './EmptyState.styles';
const EmptyState = ({ text, icon }) => {
  const { fs14, textCenter, container } = GeneralStyles;
  return (
    <View style={styles.container}>
      {icon}
      <Text style={[fs14, textCenter, { color: colors.darkGray, paddingTop: 8 }]}>{text}</Text>
    </View>
  );
};

export default EmptyState;
