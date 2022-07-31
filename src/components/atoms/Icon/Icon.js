import { TouchableOpacity, Text, View } from 'react-native';

const CustomIcon = ({ icon, onPress }) => {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
};

export default CustomIcon;
