import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import MainNavigator from './navigation/MainNavigator.js';
import store from './store';

export default function App() {
  const [loaded] = useFonts({
    RalewayThin: require('../assets/fonts/Raleway-Thin.ttf'),
    RalewayExtraLight: require('../assets/fonts/Raleway-ExtraLight.ttf'),
    RalewayLight: require('../assets/fonts/Raleway-Light.ttf'),
    RalewayRegular: require('../assets/fonts/Raleway-Regular.ttf'),
    RalewayMedium: require('../assets/fonts/Raleway-Medium.ttf'),
    RalewaySemiBold: require('../assets/fonts/Raleway-SemiBold.ttf'),
    RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
    RalewayExtraBold: require('../assets/fonts/Raleway-ExtraBold.ttf'),
  });
  if (!loaded) return <AppLoading />;
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
