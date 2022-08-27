import React from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/* ------------------------------- Components ------------------------------- */
import { AddressPicker } from '../../components/molecules';
import { CustomBottomSheet } from '../../components/organisms';
import { AddressSheet, CategoryGrid } from '../../components/templates';
import { GeneralStyles } from '../../styles';
const Home = () => {
  const addressBottomSheet = React.useRef();
  const onAddressPress = () => {
    addressBottomSheet.current?.present();
  };
  const { container } = GeneralStyles;

  return (
    <>
      <SafeAreaView style={container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            {/* -------------------------- Selector de direccion ------------------------- */}
            <AddressPicker address="Av. santa fe 2235" onPress={onAddressPress} />
            {/* -------------------------- Banner de publicidad -------------------------- */}
            <View style={{ height: 160 }} />
            {/* --------------------------- Grid de categorias --------------------------- */}
            <CategoryGrid />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
      <AddressSheet addressBottomSheet={addressBottomSheet} />
    </>
  );
};
export default Home;
