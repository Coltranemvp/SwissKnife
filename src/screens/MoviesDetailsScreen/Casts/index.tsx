import React from 'react';
import {View} from 'react-native';

import {useTheme} from '@shared/theme/useTheme';
import {CustomText} from '@shared/ui/atoms/CustomText';
import {Icon} from '@shared/ui/atoms/Icon';

import {movieCastData} from './config';
import {useStyles} from './styles';

export const CustomCasts = () => {
  const styles = useStyles();
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      {movieCastData.map((item, index) => (
        <View style={styles.castersGap} key={index}>
          {item.map((item, index) => (
            <View style={styles.box} key={index}>
              <View
                style={styles.textContainer(
                  theme.BG.seventhly,
                  theme.BG.eighthly,
                )}>
                <CustomText style={styles.textCaster(theme.text.tertiary)}>
                  {item.name}
                </CustomText>
              </View>
              <View style={styles.iconBorder(theme.BG.fourthly)}>
                <View style={styles.icon(theme.BG.seventhly)}>
                  <Icon width={50} height={50} name={item.iconName} />
                </View>
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default CustomCasts;
