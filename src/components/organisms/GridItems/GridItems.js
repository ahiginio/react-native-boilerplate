import { FlatList } from 'react-native';

import { styles } from './GridItems.styles';

const GridItems = ({ items, renderItem }) => {
  return (
    <FlatList
      data={items}
      scrollEnabled={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      numColumns={3}
      columnWrapperStyle={{
        marginVertical: '2%',
        justifyContent: 'space-between',
      }}
    />
  );
};

export default GridItems;
