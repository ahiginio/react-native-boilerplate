import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../../constants/colors';
import CategoryScreen from '../../screens/CategoryScreen/CategoryScreen';
import Home from '../../screens/Home/Home';
import Menu from '../../screens/MenuScreen/Menu';
import { GeneralStyles } from '../../styles';
import { tabBarStyles } from './bottomTab.styles';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  const { fs12 } = GeneralStyles;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: tabBarStyles.tabBarStyle,
          tabBarItemStyle: tabBarStyles.tabBarItemStyle,
          tabBarLabelStyle: { ...fs12 },
          shifting: true,
        }}>
        <Tab.Screen
          name="Inicio"
          children={() => <Home />}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <AntDesign name="home" size={24} color={focused ? colors.primary : colors.darkGray} />
            ),
          }}
        />

        <Tab.Screen
          name="Categoria"
          component={CategoryScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <AntDesign name="home" size={24} color={focused ? colors.primary : colors.darkGray} />
            ),
          }}
        />
        <Tab.Screen
          name="Menú"
          component={Menu}
          options={{
            headerShown: false,
            tabBarVisible: false,
            tabBarIcon: ({ focused }) => (
              <AntDesign name="home" size={24} color={focused ? colors.primary : colors.darkGray} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;
