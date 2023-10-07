import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

import {useTheme} from '@shared/theme/useTheme';
import {CustomText} from '@shared/ui/atoms/CustomText';
import {CustomTextInput} from '@shared/ui/atoms/CustomTextInput';
import {Icon} from '@shared/ui/atoms/Icon';
import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';

import {useStyles} from './styles';

export const SearchScreen: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const {t} = useTranslation();
  const styles = useStyles();
  const {theme} = useTheme();

  return (
    <ScreenTemplate>
      <CustomText>Search Screen</CustomText>
      <CustomTextInput
        inputStyle={styles.toDoInputStyle}
        textInputStyle={styles.toDoTextInputStyle}
        title={t('SearchScreen.title')}
        placeholder={t('SearchScreen.placeholder')}
        value={inputValue}
        onChange={setInputValue}
        rightContent={
          <View style={styles.toDoActionButton}>
            <Icon color={theme.icon.active} name={'search'} />
          </View>
        }
      />
    </ScreenTemplate>
  );
};
