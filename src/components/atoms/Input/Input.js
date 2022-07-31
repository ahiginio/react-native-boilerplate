import { View, TextInput, Button } from 'react-native';

import colors from '../../../constants/colors';
import CustomButton from '../Button/Button';
import { styles } from './Input.styles';

const CustomInput = ({
  item,
  onChangeText,
  placeholder,
  onPressButton,
  inputValue,
  buttonText,
  hasButton = false,
  keyboardType = 'default',
  blurOnSubmit = true,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={hasButton ? styles.inputWithButton : styles.input}
        placeholderTextColor={colors.gray}
        placeholder={placeholder}
        value={item}
        onChangeText={onChangeText}
        selectionColor={colors.thertiary}
        keyboardType={keyboardType}
        blurOnSubmit={blurOnSubmit}
      />
      {hasButton && (
        <CustomButton
          buttonText={buttonText}
          color={colors.thertiary}
          onPress={onPressButton}
          disabled={inputValue === ''}
        />
      )}
    </View>
  );
};

export default CustomInput;
