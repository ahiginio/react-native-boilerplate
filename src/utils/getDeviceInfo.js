import { Dimensions, Platform } from 'react-native';

const viewportWidth = Dimensions.get('window').width;
const viewportHeight = Dimensions.get('window').height;
const isTablet = () => {
  return viewportWidth > 600;
};
const isAndroid = () => {
  return Platform.OS === 'android';
};

export { isTablet, isAndroid, viewportHeight, viewportWidth };
