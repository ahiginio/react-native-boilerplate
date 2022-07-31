import { TouchableOpacity, Text } from 'react-native';

import { styles } from './Button.styles';

const CustomButton = ({ buttonText, buttonStyle, buttonTextStyle, onPressButton, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      disabled={disabled}
      style={disabled ? styles[`${buttonStyle}Disabled`] : styles[buttonStyle]}>
      <Text style={buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
