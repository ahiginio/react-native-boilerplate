import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as MainNavigation from '../../../navigation/MainNavigator';
import { selectCategory } from '../../../store/actions/category.actions';
import { GeneralStyles } from '../../../styles';
import { CustomTitle } from '../../atoms';
import { CategoryIcon } from '../../molecules';
import { GridItems } from '../../organisms';
const { fs20, textBold } = GeneralStyles;
const CategoryGrid = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const category = useSelector((state) => state.categories.selected);

  // On category Press
  const onCategoryPress = (item) => {
    dispatch(selectCategory(item.id));

    MainNavigation.navigate('CategoryScreen', { name: item.name });
  };
  // Render individual item
  const renderItem = ({ item }) => (
    <CategoryIcon category={item} onPress={() => onCategoryPress(item)} />
  );

  // Component return
  return (
    <View>
      <CustomTitle
        text="¿Qué estas buscando?"
        titleStyle={[fs20, textBold, { marginVertical: 8 }]}
      />
      <GridItems items={categories} renderItem={renderItem} />
    </View>
  );
};

export default CategoryGrid;
