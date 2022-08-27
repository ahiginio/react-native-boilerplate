import { View } from 'react-native';

import { styles } from './Separator.styles';

const Separator = ({ separatorStyle }) => <View style={[styles.separator, separatorStyle]} />;

export default Separator;
