import {CustomButton} from '@shared/ui/atoms/CustomButton';
import React from 'react';
import {Text, View} from 'react-native';

export const FeedNewScreen: React.FC = () => {
  return (
    <View>
      <CustomButton
        styleCBView={{}}
        styleCBText={{color: 'white'}}
        title={'prosto button'}
        onPress={() => {
          console.log(1);
        }}
      />
    </View>
  );
};
