import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Icon(props) {
  return (
    <Svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M5 7.5l5 5 5-5"
        stroke={props.color}
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Icon;
