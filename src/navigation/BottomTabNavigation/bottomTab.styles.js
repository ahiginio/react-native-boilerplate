import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';
import { isIphoneX } from '../../utils/getDeviceInfo';
const styles = StyleSheet.create({
  unauthenticatedContainer: {
    flex: 1,
    backgroundColor: colors.darkGray,
    zIndex: -1,
  },
});

export const tabBarStyles = {
  tabBarStyle: {
    backgroundColor: colors.background,
    borderTopWidth: 0,
    shadowOpacity: 0.1,
    shadowColor: 'trasparent',
    height: isIphoneX() ? 90 : 70,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  tabBarItemStyle: {
    backgroundColor: colors.background,
    padding: 8,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
};

export default styles;
