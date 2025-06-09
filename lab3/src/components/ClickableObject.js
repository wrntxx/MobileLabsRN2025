import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
const ClickableObject = ({children, imageUrl, text = "Interact with me!"}) => {
  return (
    <Animated.View >
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          resizeMode="cover"
        />
      )}
      <View />
      <View >
        {children ? children : <Text >{text}</Text>}
      </View>
    </Animated.View>
  );
};

export default ClickableObject;
