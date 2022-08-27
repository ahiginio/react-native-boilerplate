import { StyleSheet } from 'react-native';

import colors from './constants/colors.js';
export const GeneralStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    color: colors.dark,
    marginHorizontal: 16,
    fontFamily: 'RalewayRegular',
    fontVariant: ['lining-nums', 'proportional-nums'],
    paddingTop: 20,
  },
  fs12: {
    fontSize: 12,
    color: colors.dark,
    fontFamily: 'RalewayRegular',
    fontVariant: ['lining-nums', 'proportional-nums'],
  },
  fs14: {
    fontSize: 14,
    color: colors.dark,
    fontFamily: 'RalewayRegular',
    fontVariant: ['lining-nums', 'proportional-nums'],
  },
  fs16: {
    fontSize: 16,
    color: colors.dark,
    fontFamily: 'RalewayRegular',
    fontVariant: ['lining-nums', 'proportional-nums'],
  },
  fs20: {
    fontSize: 20,
    color: colors.dark,
    fontFamily: 'RalewayRegular',
    fontVariant: ['lining-nums', 'proportional-nums'],
  },
  fs24: {
    fontSize: 24,
    lineHeight: 32,
    color: colors.dark,
    fontFamily: 'RalewayRegular',
    fontVariant: ['lining-nums', 'proportional-nums'],
  },
  fs32: {
    fontSize: 32,
    color: colors.dark,
    fontFamily: 'RalewayRegular',
    fontVariant: ['lining-nums', 'proportional-nums'],
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
  textBlack: {
    fontFamily: 'RalewayExtraBold',
  },
  textCenter: {
    textAlign: 'center',
  },
});
