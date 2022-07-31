import { StyleSheet } from 'react-native';

import colors from '../../../constants/colors.js';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  inputWithButton: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: colors.thertiary,
    paddingVertical: 16,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.thertiary,
    paddingVertical: 16,
  },
});
