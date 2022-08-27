import { FlatList, View, Text } from 'react-native';

import { GeneralStyles } from '../../../styles';
import { CustomTitle } from '../../atoms';
import { SingleItem, EmptyState } from '../../molecules';
const { fs24, textBold, textCenter } = GeneralStyles;

const ListItems = ({ items, title, containerStyle, emptyStateText, renderItem }) => {
  return (
    <View style={containerStyle}>
      <CustomTitle text={title} titleStyle={[fs24, textBold, textCenter, { marginBottom: 20 }]} />
      {items.length !== 0 ? (
        <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} />
      ) : (
        <EmptyState text={emptyStateText} />
      )}
    </View>
  );
};

export default ListItems;
