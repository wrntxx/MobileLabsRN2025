import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  TapGestureHandler,
  LongPressGestureHandler,
  PanGestureHandler,
  FlingGestureHandler,
  PinchGestureHandler,
  State,
  Directions,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

import ClickableObject from '../components/ClickableObject';

const imageUrl = '';

const GestureButtons = ({ gestureMode, setGestureMode }) => {
  const buttons = [
    { mode: 'tap', label: 'Tap' },
    { mode: 'longPress', label: 'Hold' },
    { mode: 'pan', label: 'Drag' },
    { mode: 'pinch', label: 'Pinch' },
    { mode: 'flingRight', label: 'Swipe R' },
    { mode: 'flingLeft', label: 'Swipe L' },
  ];

  return (
    <View>
      {buttons.map(btn => (
        <TouchableOpacity
          key={btn.mode}
          onPress={() => setGestureMode(btn.mode)}
        >
          <Text>{btn.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const GestureHandlerSwitcher = ({ gestureMode, animatedStyle, refs, handlers }) => {
  const {
    singleTapRef,
    doubleTapRef,
    longPressRef,
    panGestureEvent,
    pinchGestureEvent,
  } = refs;

  const {
    onSingleTap,
    onDoubleTap,
    onLongPress,
    onFlingRight,
    onFlingLeft,
  } = handlers;

  const renderGestureWrapper = (Wrapper, props, children) => (
    <Wrapper {...props}>
      <Animated.View>
        {children}
      </Animated.View>
    </Wrapper>
  );

  const gestures = {
    tap: (
      <TapGestureHandler
        ref={singleTapRef}
        waitFor={doubleTapRef}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) onSingleTap();
        }}
      >
        <Animated.View>
          <TapGestureHandler
            ref={doubleTapRef}
            numberOfTaps={2}
            onHandlerStateChange={({ nativeEvent }) => {
              if (nativeEvent.state === State.ACTIVE) onDoubleTap();
            }}
          >
            <Animated.View>
              <ClickableObject imageUrl={imageUrl} text="Tap me!" />
            </Animated.View>
          </TapGestureHandler>
        </Animated.View>
      </TapGestureHandler>
    ),
    longPress: renderGestureWrapper(
      LongPressGestureHandler,
      {
        ref: longPressRef,
        minDurationMs: 3000,
        onHandlerStateChange: ({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) onLongPress();
        },
      },
      <ClickableObject imageUrl={imageUrl} text="Hold me for 3s!" />
    ),
    pan: renderGestureWrapper(
      PanGestureHandler,
      { onGestureEvent: panGestureEvent },
      <ClickableObject imageUrl={imageUrl} text="Drag me!" />
    ),
    pinch: renderGestureWrapper(
      PinchGestureHandler,
      { onGestureEvent: pinchGestureEvent },
      <ClickableObject imageUrl={imageUrl} text="Pinch me!" />
    ),
    flingRight: renderGestureWrapper(
      FlingGestureHandler,
      {
        direction: Directions.RIGHT,
        onHandlerStateChange: ({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) onFlingRight();
        },
      },
      <ClickableObject imageUrl={imageUrl} text="Swipe Right!" />
    ),
    flingLeft: renderGestureWrapper(
      FlingGestureHandler,
      {
        direction: Directions.LEFT,
        onHandlerStateChange: ({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) onFlingLeft();
        },
      },
      <ClickableObject imageUrl={imageUrl} text="Swipe Left!" />
    ),
  };

  return gestures[gestureMode] || (
    <Animated.View>
      <ClickableObject imageUrl={imageUrl} text="Select gesture!" />
    </Animated.View>
  );
};

const HomeScreen = ({ navigation }) => {
  const [score, setScore] = useState(0);
  const [lastGesture, setLastGesture] = useState('None');
  const [gestureMode, setGestureMode] = useState('tap');

  const [clicks, setClicks] = useState(0);
  const [doubleTaps, setDoubleTaps] = useState(0);
  const [longPress, setLongPress] = useState(0);
  const [panned, setPanned] = useState(false);
  const [flingRight, setFlingRight] = useState(false);
  const [flingLeft, setFlingLeft] = useState(false);
  const [pinched, setPinched] = useState(false);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const doubleTapRef = useRef(null);
  const singleTapRef = useRef(null);
  const longPressRef = useRef(null);

  const onSingleTap = () => {
    setScore(prev => prev + 1);
    setClicks(prev => prev + 1);
    setLastGesture('Single Tap (+1)');
  };

  const onDoubleTap = () => {
    setScore(prev => prev + 2);
    setDoubleTaps(prev => prev + 1);
    setLastGesture('Double Tap (+2)');
  };

  const onLongPress = () => {
    setScore(prev => prev + 5);
    setLongPress(prev => prev + 1);
    setLastGesture('Long Press (+5)');
  };

  const onFlingRight = () => {
    const points = Math.floor(Math.random() * 10) + 1;
    setScore(prev => prev + points);
    setFlingRight(true);
    setLastGesture(`Fling Right (+${points})`);
  };

  const onFlingLeft = () => {
    const points = Math.floor(Math.random() * 10) + 1;
    setScore(prev => prev + points);
    setFlingLeft(true);
    setLastGesture(`Fling Left (+${points})`);
  };

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: () => {
      runOnJS(setLastGesture)('Pan Gesture');
      runOnJS(setPanned)(true);
    },
  });

  const pinchGestureEvent = useAnimatedGestureHandler({
    onActive: event => {
      scale.value = event.scale;
    },
    onEnd: () => {
      scale.value = withSpring(1);
      runOnJS(setLastGesture)('Pinch Gesture (+3)');
      runOnJS(setScore)(prev => prev + 3);
      runOnJS(setPinched)(true);
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <GestureHandlerRootView>
      <Text >Score: {score}</Text>
      <Text >Last Gesture: {lastGesture}</Text>

      <GestureHandlerSwitcher
        gestureMode={gestureMode}
        animatedStyle={animatedStyle}
        refs={{
          singleTapRef,
          doubleTapRef,
          longPressRef,
          panGestureEvent,
          pinchGestureEvent,
        }}
        handlers={{
          onSingleTap,
          onDoubleTap,
          onLongPress,
          onFlingRight,
          onFlingLeft,
        }}
      />

      <GestureButtons gestureMode={gestureMode} setGestureMode={setGestureMode} />

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Tasks', {
            score,
            clicks,
            doubleTaps,
            longPress,
            panned,
            flingRight,
            flingLeft,
            pinched,
          })
        }
      >
        <Text>View Tasks</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;
