import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/* ------------------------------ Stack Styles ------------------------------ */
import BottomTabs from './BottomTabNavigation/bottomTab';
import ShopNavigator from './ShopNavigation/shop';
/* ------------------------------- Navigators ------------------------------- */
import { styles } from './index.styles';

const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

const MainNavigator = () => (
  <SafeAreaProvider>
    <NavigationContainer theme={styles} ref={navigationRef}>
      <ShopNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default MainNavigator;
