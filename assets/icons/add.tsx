import React from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

const Icon_Add = (props: SvgProps) => {
  return (
    <Svg viewBox="0 -960 960 960" {...props}>
      <Path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240z" />
    </Svg>
  );
};

export default Icon_Add;
