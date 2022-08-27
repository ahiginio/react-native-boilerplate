import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* --------------------------------- Screens -------------------------------- */
import CategoryScreen from '../../screens/CategoryScreen/CategoryScreen';
import BottomTab from '../BottomTabNavigation/bottomTab';
const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }} />
    <Stack.Screen
      name="CategoryScreen"
      component={CategoryScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default ShopNavigator;
