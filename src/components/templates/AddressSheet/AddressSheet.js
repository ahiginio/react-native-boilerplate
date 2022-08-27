import React from 'react';
import { View } from 'react-native';
/* --------------------------------- Styles --------------------------------- */
import { useDispatch, useSelector } from 'react-redux';

import colors from '../../../constants/colors';
import { GeneralStyles } from '../../../styles';
/* ------------------------------- Components ------------------------------- */
import { CustomTitle, Separator } from '../../atoms';
import { SingleItem } from '../../molecules';
import { CustomBottomSheet, ListItems } from '../../organisms';
/* --------------------------------- Stores --------------------------------- */

const AddressSheet = ({ addressBottomSheet }) => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses.addresses);
  const { fs24, textBlack } = GeneralStyles;
  const addressSnapPoints = React.useMemo(() => ['70%', '85 %'], []);

  React.useEffect(() => {}, []);

  const renderItem = ({ item }) => (
    <SingleItem text={item.name} itemStyle="primary" itemImage="primary" />
  );
  return (
    <CustomBottomSheet bottomSheetRef={addressBottomSheet} snapPoints={addressSnapPoints}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <CustomTitle
          text="Agrega o selecciona una dirección"
          titleStyle={[fs24, textBlack, { maxWidth: '70%' }]}
        />
        <Separator separatorStyle={{ backgroundColor: colors.lightGray, marginVertical: 16 }} />
        <ListItems
          emptyStateText="No se encontraron productos en la categoria"
          items={addresses}
          containerStyle={{ flex: 1 }}
          renderItem={renderItem}
        />
      </View>
    </CustomBottomSheet>
  );
};

export default AddressSheet;
