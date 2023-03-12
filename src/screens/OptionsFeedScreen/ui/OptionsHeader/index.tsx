import React from 'react';

import {BottomTabsHeader} from '@shared/ui/organisms/BottomTabsHeader';
import {BottomTabsHeaderTemplate} from '@shared/ui/templates/BottomTabsHeader';

import {useActionButtonsData} from './config';
import {useStyles} from './styles';

export const OptionsHeader: React.FC = () => {
  const actionData = useActionButtonsData(true);
  const styles = useStyles();
  return (
    <BottomTabsHeaderTemplate>
      <BottomTabsHeader
        style={styles.header}
        userName={'Valentin'}
        onPress={() => {}}
        actionData={actionData}
      />
    </BottomTabsHeaderTemplate>
  );
};
