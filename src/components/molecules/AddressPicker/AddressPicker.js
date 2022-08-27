import { TouchableOpacity } from 'react-native';

import { ChevronDownMediumIcon } from '../../../../assets/icons';
import locationIcon from '../../../../assets/images/location.png';
import colors from '../../../constants/colors';
import { GeneralStyles } from '../../../styles';
import { CustomIcon, CustomImage, CustomText } from '../../atoms/index';
import { styles } from './AddressPicker.styles';
const { fs16, textBold } = GeneralStyles;
const AddressPicker = ({ address, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CustomImage icon={locationIcon} imageStyle={styles.iconStyle} />
      <CustomText text={address} textStyle={[fs16, textBold]} />
      <CustomIcon icon={<ChevronDownMediumIcon color={colors.dark} />} />
    </TouchableOpacity>
  );
};
export default AddressPicker;
