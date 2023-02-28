import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type AnimationType = {offsetValue: number; duration: number};

export const useOffsetWithTiming = (
  isFocused: boolean,
  animationOn?: AnimationType,
  animationOff?: AnimationType,
  initialOffset?: number,
) => {
  const offset = useSharedValue(initialOffset || 0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offset.value}],
    };
  });

  if (isFocused) {
    offset.value = withTiming(animationOn?.offsetValue || 300, {
      duration: animationOn?.duration || 500,
    });

    return animatedStyles;
  }

  offset.value = withTiming(animationOff?.offsetValue || 0, {
    duration: animationOff?.duration || 500,
  });

  return animatedStyles;
};
