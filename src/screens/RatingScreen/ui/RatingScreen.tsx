import {CustomButton} from '@shared/ui/atoms/CustomButton';
import {CustomText} from '@shared/ui/atoms/CustomText';
import {CustomTextInput} from '@shared/ui/atoms/CustomTextInput';
import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';
import React, {useState} from 'react';
import {View} from 'react-native';

export const RatingScreen: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <ScreenTemplate>
      <CustomText>ToDoList</CustomText>
      <CustomTextInput
        styleCustomInputView={{padding: 10}}
        styleCustomInputText={{color: 'black', padding: 10}}
        title={'Name of input'}
        placeholder={'Type here...'}
        value={inputValue}
        onChangeText={setInputValue}
        rightContent={
          <View
            style={{
              width: 40,
              backgroundColor: 'red',
              flex: 1,
              borderRadius: 20,
            }}></View>
        }
        onAdd={function (inputValue: string): void {
          throw new Error('Function not implemented.');
        }}
      />
      <CustomButton></CustomButton>
    </ScreenTemplate>
  );
};
