import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {UserActionButton} from '@shared/ui/molecules/UserActionButton';

import {useStyles} from './styles';
import {RoundButton} from '@shared/ui/molecules/RoundButton';
import {RoundButtonType} from '@shared/types/RoundButtonType';

interface BottomTabsHeader {
  userName: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  actionData?: RoundButtonType[];
}

export const BottomTabsHeader: React.FC<BottomTabsHeader> = ({
  style,
  userName,
  onPress,
  actionData,
}) => {
  const styles = useStyles();
  return (
    <View style={[styles.container, style]}>
      <UserActionButton
        avatarTitle={userName.length > 0 ? userName[0] : ''}
        userName={userName}
        onPress={onPress}
      />
      {actionData && (
        <>
          <View style={styles.divider} />
          <View style={styles.container}>
            {actionData.map(item => (
              <RoundButton
                key={item.iconName}
                iconName={item.iconName}
                isGetNotification={item.isGetNotification}
                style={styles.roundButton}
                onPress={item.onPress}
              />
            ))}
          </View>
        </>
      )}
    </View>
  );
};
