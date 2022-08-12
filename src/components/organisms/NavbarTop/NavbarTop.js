import { View } from 'react-native';

import { BackArrowIcon } from '../../../../assets/icons';
import colors from '../../../constants/colors';
import { goBack } from '../../../navigation/MainNavigator';
import { GeneralStyles } from '../../../styles';
import { CustomIcon, CustomText } from '../../atoms';
export default function NavbarTop({ title }) {
  const { fs16, textBold } = GeneralStyles;
  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CustomIcon icon={<BackArrowIcon color={colors.dark} />} onPress={goBack} />
        <CustomText text={title} textStyle={[fs16, textBold, { paddingLeft: 8 }]} />
      </View>
    </View>
  );
}
