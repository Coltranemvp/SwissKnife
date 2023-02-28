import React, {useRef} from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {useTheme} from '@shared/theme/useTheme';

import {useMonth} from '../../lib/useMonth';
import {MonthPickerItem} from './MonthPickerItem';
import {
  FONT_SIZE_RANGE,
  INDENT_COUNT,
  ITEM_SIZE,
  OPACITY_Range,
  getInputRange,
} from './config';
import {useStyles} from './styles';

interface MonthPickerProps {
  selectedMonth: number;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
}

export const MonthPicker: React.FC<MonthPickerProps> = ({
  selectedMonth,
  setSelectedMonth,
}) => {
  const styles = useStyles();
  const {theme} = useTheme();
  const {monthData, maxMonthIndex} = useMonth(INDENT_COUNT);

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const visibleItemsChanged = useRef(({viewableItems}: any) => {
    const currentIndex = viewableItems[INDENT_COUNT]?.index - INDENT_COUNT;
    const currentMonth = maxMonthIndex - currentIndex;
    setSelectedMonth(currentMonth);
  }).current;

  return (
    <View style={styles.container}>
      <View
        style={[styles.divider(theme.calendar.divider), styles.dividerTop]}
      />
      <View
        style={[styles.divider(theme.calendar.divider), styles.dividerBottom]}
      />
      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={monthData}
        initialScrollIndex={maxMonthIndex - selectedMonth}
        keyExtractor={(item, index) => `${item}_${index}`}
        scrollEventThrottle={32}
        initialNumToRender={7}
        onScrollToIndexFailed={() => {}}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        getItemLayout={(data, index) => ({
          length: ITEM_SIZE,
          offset: ITEM_SIZE * index,
          index,
        })}
        onViewableItemsChanged={visibleItemsChanged}
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 70,
        }}
        renderItem={({item, index}) => {
          const indexWithIndent = index - INDENT_COUNT;
          const inputRange = getInputRange(indexWithIndent);

          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: OPACITY_Range,
          });

          const fontSize = scrollY.interpolate({
            inputRange,
            outputRange: FONT_SIZE_RANGE,
          });

          const isSelected = selectedMonth === maxMonthIndex - indexWithIndent;

          const textStyle = {
            opacity,
            fontSize,
            color: isSelected
              ? theme.calendar.active
              : theme.calendar.primaryText,
          } as StyleProp<Animated.AnimateStyle<StyleProp<TextStyle>>>;

          return (
            <MonthPickerItem
              itemSize={ITEM_SIZE}
              title={item}
              style={textStyle}
            />
          );
        }}
      />
    </View>
  );
};
