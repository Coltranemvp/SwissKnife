import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, ScrollView, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {setSelectedMovie} from '@entities/Movies/model/movies';

import {IconName} from '@shared/config/iconList';
import {navigate} from '@shared/lib/rootNavigation';
import {useTheme} from '@shared/theme/useTheme';
import {MoviesStackParams} from '@shared/types/navigation/MoviesStack';
import {CustomText} from '@shared/ui/atoms/CustomText';
import {CustomTextInput} from '@shared/ui/atoms/CustomTextInput';
import {Icon} from '@shared/ui/atoms/Icon';
import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';

import {movies, upcomingMovies} from './config';
import {useStyles} from './styles';

export const MoviesScreens: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const {t} = useTranslation();
  const styles = useStyles();
  const {theme} = useTheme();
  const {navigate} = useNavigation<StackNavigationProp<MoviesStackParams>>();

  return (
    <ScreenTemplate style={{padding: 0}}>
      <View style={styles.container(theme.BG.fourthly)}>
        <View style={styles.headerView}>
          <CustomText style={styles.textHeader(theme.text.primary)}>
            {t('MoviesScreen.header')}
          </CustomText>
        </View>
        <View>
          <CustomTextInput
            leftContent={
              <View>
                <Icon color={theme.icon.active} name={'searchTwo'} />
              </View>
            }
            inputStyle={styles.moviesInputStyle(theme.input.secondary)}
            borderColor={theme.input.secondary}
            textInputStyle={styles.moviesTextInputStyle}
            placeholder={t('MoviesScreen.placeholder')}
            placeholderTextColor={theme.input.placeholder}
            value={inputValue}
            onChange={setInputValue}
            rightContent={
              <View>
                <Icon color={theme.icon.active} name={'microphone'} />
              </View>
            }
          />
        </View>
        <View>
          <CustomText style={styles.textBody(theme.text.tertiary)}>
            {t('MoviesScreen.newMovies')}
          </CustomText>
          <ScrollView horizontal={true} style={styles.scrollView}>
            {movies.map((item, index) => (
              <Pressable
                style={styles.card}
                key={index}
                onPress={() => {
                  //ToDo: setSelectedMovie(item); (Val9)
                  navigate('MoviesDetailScreen');
                }}>
                <Icon
                  color={theme.icon.active}
                  height={210}
                  width={140}
                  name={item.mainImage as IconName}
                />
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <View>
          <CustomText style={styles.textBody(theme.text.tertiary)}>
            {t('MoviesScreen.upcomingMovies')}
          </CustomText>
          <ScrollView horizontal={true} style={styles.scrollView}>
            {upcomingMovies.map((item, index) => (
              <View style={styles.card} key={index}>
                <Icon
                  color={theme.icon.active}
                  height={210}
                  width={140}
                  name={item}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScreenTemplate>
  );
};

export default MoviesScreens;
