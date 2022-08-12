import { Image } from 'react-native';

const CustomImage = ({ icon, imageStyle }) => {
  return <Image source={icon} style={imageStyle} />;
};

export default CustomImage;
