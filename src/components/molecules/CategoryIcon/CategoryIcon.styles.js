import { StyleSheet } from 'react-native';

import colors from '../../../constants/colors';
import { viewportWidth } from '../../../utils/getDeviceInfo';
export const styles = StyleSheet.create({
  container: {
    width: '32%',
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 16,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5.22,
    elevation: 3,
  },
});
