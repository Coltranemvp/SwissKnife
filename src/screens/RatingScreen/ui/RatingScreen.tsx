import React from 'react';
import {Pressable, Text, View} from 'react-native';
import WebView from 'react-native-webview';

import {CustomText} from '@shared/ui/atoms/CustomText';
import {Icon} from '@shared/ui/atoms/Icon';
import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';

import {useRatings} from '../lib/useRatings';
import {styles} from './styles';

export const RatingScreen: React.FC = () => {
  const ratings = useRatings();

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text>RatingScreen</Text>

        {ratings.map(item => (
          <Pressable key={`${item.iconName}`} onPress={item.onPress}>
            <Icon
              style={styles.icon}
              height={40}
              width={40}
              name={item.iconName}
              color={'red'}
            />
            <CustomText>{item.title}</CustomText>
          </Pressable>
        ))}
      </View>
      <View style={{marginTop: 20, height: 500}}>
        <WebView source={{uri: 'https://www.google.ru/?hl=ru'}} />
      </View>
    </ScreenTemplate>
  );
};
