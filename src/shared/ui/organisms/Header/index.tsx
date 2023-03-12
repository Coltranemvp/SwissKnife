import React from 'react';
import {useStyles} from './styles';
import {FlexAlignType, View} from 'react-native';
import {BackButton} from '@shared/ui/atoms/BackButton';
import {useStore} from 'effector-react';
import {$currentSafeAreaColor} from '@shared/model/currentSafeAreaColor';
import {useTheme} from '@shared/theme/useTheme';
import {CustomText} from '@shared/ui/atoms/CustomText';

interface HeaderProps {
  withBackButton?: boolean;
  headerTitle?: string;
  children?: React.ReactNode;
  rightContent?: React.ReactNode;
  titleFontSize?: number;
  onPressByBack?: () => void;
  alignItems?: FlexAlignType;
  height?: number;
  isBackDisabled?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  withBackButton,
  headerTitle,
  children,
  rightContent,
  titleFontSize = 21,
  onPressByBack,
  alignItems = 'flex-start',
  height,
  isBackDisabled,
}) => {
  const styles = useStyles();
  const {theme} = useTheme();
  const backgroundColor = useStore($currentSafeAreaColor);
  return (
    <View style={styles.container(backgroundColor || theme.BG.white, height)}>
      {withBackButton && (
        <BackButton
          style={styles.backButton}
          onPress={onPressByBack}
          isBackDisabled={isBackDisabled}
        />
      )}
      <View style={styles.content(alignItems)}>
        {headerTitle ? (
          <CustomText
            style={styles.title(alignItems === 'center')}
            fontSize={titleFontSize}>
            {headerTitle}
          </CustomText>
        ) : (
          children
        )}
      </View>
      {rightContent && <View style={styles.rightContent}>{rightContent}</View>}
    </View>
  );
};
