import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/* ------------------------------- Components ------------------------------- */
import { AddressPicker } from '../../components/molecules';
import { CategoryGrid } from '../../components/templates';
import { GeneralStyles } from '../../styles';
const Home = () => {
  const { container } = GeneralStyles;

  return (
    <SafeAreaView style={container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          {/* -------------------------- Selector de direccion ------------------------- */}
          <AddressPicker address="Av. santa fe 2235" />
          {/* -------------------------- Banner de publicidad -------------------------- */}
          <View style={{ height: 160 }} />
          {/* --------------------------- Grid de categorias --------------------------- */}
          <CategoryGrid />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
export default Home;
