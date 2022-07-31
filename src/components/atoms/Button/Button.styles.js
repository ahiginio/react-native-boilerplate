import { StyleSheet } from 'react-native';

import colors from '../../../constants/colors.js';
import { GeneralStyles } from '../../../styles.js';
const { fs16, textBold, textCenter } = GeneralStyles;
export const styles = StyleSheet.create({
  primary: {
    ...fs16,
    ...textBold,
    ...textCenter,
    backgroundColor: colors.primary,
    color: colors.white,
    paddingVertical: 16,
    borderRadius: 8,
  },
  primaryDisabled: {
    ...fs16,
    ...textBold,
    ...textCenter,
    backgroundColor: colors.gray,
    color: colors.dark,
    paddingVertical: 16,
    borderRadius: 8,
  },
});
