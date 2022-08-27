import * as Device from 'expo-device';
import { Dimensions, Platform } from 'react-native';

const viewportWidth = Dimensions.get('window').width;
const viewportHeight = Dimensions.get('window').height;
const isTablet = () => {
  return viewportWidth > 600;
};
const isAndroid = () => {
  return Platform.OS === 'android';
};
const isIphoneX = () => {
  if (
    (Platform.OS == 'ios' && Device.modelName.toLowerCase().includes('iphone x')) ||
    Device.modelName.toLowerCase().includes('iphone 1')
  ) {
    return true;
  } else {
    return false;
  }
};
export { isTablet, isAndroid, isIphoneX, viewportHeight, viewportWidth };
