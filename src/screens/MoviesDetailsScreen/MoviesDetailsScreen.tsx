import {useTranslation} from 'react-i18next';
import {Image, Pressable, View} from 'react-native';

import image from '@shared/assets/svg/png/batman.png';
import {goBack} from '@shared/lib/rootNavigation';
import {useTheme} from '@shared/theme/useTheme';
import {CustomText} from '@shared/ui/atoms/CustomText';
import {Icon} from '@shared/ui/atoms/Icon';
import CustomStarRating from '@shared/ui/molecules/CustomStarRating';
import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';

import CustomCasts from './Casts';
import {useStyles} from './styles';

export const MoviesDetailsScreen: React.FC = () => {
  const styles = useStyles();
  const {t} = useTranslation();
  const {theme} = useTheme();

  return (
    <ScreenTemplate style={{padding: 0}}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
        <Pressable
          style={styles.navigation(theme.BG.fifthly, theme.BG.sixthly)}
          onPress={goBack}>
          <Icon name={'leftArrow'} />
        </Pressable>
        <View style={styles.header}>
          <CustomText style={styles.textHeader(theme.text.primary)}>
            Batman
          </CustomText>
          <View style={styles.play(theme.BG.fifthly, theme.BG.sixthly)}>
            <Icon name={'play'} />
          </View>
        </View>
      </View>
      <View style={styles.container(theme.BG.fourthly)}>
        <View style={styles.genre}>
          <CustomText style={styles.text(theme.text.tertiary)}>2022</CustomText>
          <Icon name={'ellipse'} width={5} height={5} />
          <CustomText style={styles.text(theme.text.tertiary)}>
            Detective-Crime-Action
          </CustomText>
          <Icon name={'ellipse'} width={5} height={5} />
          <CustomText style={styles.text(theme.text.tertiary)}>
            2h36m
          </CustomText>
        </View>
        <CustomStarRating style={styles.customStarRating} />
        <CustomText style={styles.text(theme.text.tertiary)}>
          The story is about Batman, who seeks justice on the streets of Gotham,
          and becomes the personification of merciless retribution for the
          citizens.
        </CustomText>
        <View style={styles.hrLine(theme.input.secondary)}></View>
        <CustomText style={styles.textCasts(theme.text.tertiary)}>
          {t('MoviesDetailsScreen.casts')}
        </CustomText>
        <CustomCasts />
      </View>
    </ScreenTemplate>
  );
};

export default MoviesDetailsScreen;
