import {IconName, iconsList} from '../../../config/iconList';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
interface IconProps {
  name: IconName;
  style?: StyleProp<ViewStyle>;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  style,
  width,
  height,
  color,
}) => {
  const IconComponent = iconsList[name] || iconsList.star;

  return (
    <IconComponent
      style={style}
      width={width || 24}
      height={height || 24}
      color={color}
    />
  );
};
