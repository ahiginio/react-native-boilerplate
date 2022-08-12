import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import { NavbarTop, ListItems } from '../../components/organisms/index';
import { filteredProducts, selectProduct } from '../../store/actions/products.actions';
import { GeneralStyles } from '../../styles';
const CategoryScreen = ({ route }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);
  console.log(products);
  const category = useSelector((state) => state.categories.selected);
  console.log(category);
  const { container } = GeneralStyles;

  React.useEffect(() => {
    dispatch(filteredProducts(+category.id));
  }, []);
  return (
    <SafeAreaView style={container}>
      <NavbarTop title={route.params.name} />
      <ListItems
        title="Listado de productos"
        emptyStateText="No se encontraron productos en la categoria"
        items={products}
        containerStyle={{ paddingTop: 30 }}
      />
    </SafeAreaView>
  );
};
export default CategoryScreen;
