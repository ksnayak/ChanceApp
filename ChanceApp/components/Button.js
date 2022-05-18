import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {color} from '../constant/color';

const Button = ({title, onPress, color, textColor}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    borderColor: color.lightBlue,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
