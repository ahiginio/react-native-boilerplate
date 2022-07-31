import { StyleSheet } from 'react-native';

import colors from '../../../constants/colors.js';
import { GeneralStyles } from '../../../styles.js';
const { fs16, textSemiBold, textCenter } = GeneralStyles;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  primary: {
    borderWidth: 1,
    borderColor: colors.gray,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginVertical: 4,
  },
  primaryText: {
    ...fs16,
    ...textSemiBold,
    ...textCenter,
    color: colors.dark,
  },
});
