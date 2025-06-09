import React from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = ({ placeholder, value, onChangeText, multiline = false, style, ...props }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      {...props}
    />
  );
};

export default CustomTextInput;