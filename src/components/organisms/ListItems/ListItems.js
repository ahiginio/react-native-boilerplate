import { FlatList, View, Text } from 'react-native';

import { GeneralStyles } from '../../../styles';
import { CustomTitle } from '../../atoms';
import { SingleItem, EmptyState } from '../../molecules';
const { fs24, textBold, textCenter } = GeneralStyles;

const renderItem = ({ item }) => <SingleItem text={item.text} itemStyle="primary" />;

const ListItems = ({ items }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <CustomTitle text="Lista de tareas" titleStyle={[fs24, textBold, textCenter]} />
      {items.length !== 0 ? (
        <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} />
      ) : (
        <EmptyState text="Todavia no agregaste ninguna tarea" />
      )}
    </View>
  );
};

export default ListItems;
