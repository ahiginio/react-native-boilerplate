import { StyleSheet } from 'react-native';

import colors from './constants/colors.js';
export const GeneralStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    color: colors.dark,
    marginHorizontal: 16,
    fontFamily: 'RalewayRegular',
  },
  fs14: {
    fontSize: 14,
    color: colors.dark,
    fontFamily: 'RalewayRegular',
  },
  fs16: {
    fontSize: 16,
    color: colors.dark,
    fontFamily: 'RalewayRegular',
  },
  fs24: {
    fontSize: 24,
    color: colors.dark,
    fontFamily: 'RalewayRegular',
  },
  fs32: {
    fontSize: 32,
    color: colors.dark,
    fontFamily: 'RalewayRegular',
  },
  textRegular: {
    fontWeight: '400',
    fontFamily: 'RalewayRegular',
  },
  textMedium: {
    fontWeight: '500',
    fontFamily: 'RalewayMedium',
  },
  textSemiBold: {
    fontWeight: '600',
    fontFamily: 'RalewaySemiBold',
  },
  textBold: {
    fontWeight: 'bold',
    fontFamily: 'RalewayBold',
  },
  textCenter: {
    textAlign: 'center',
  },
});
