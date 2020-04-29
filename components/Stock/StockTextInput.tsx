import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import themeManagaer from '../../theme/ThemeManager';

interface Props {
  maxLength: number;
  value: string;
  defaultValue?: string;
  onChangeText?: (text: string) => void;
}

function StockTextInput(props: Props) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(props.value);
  }, [props.value]);

  return (
    <TextInput
      style={getDynamicTextInputStyle(text).style}
      placeholder="Paste text here to stock!"
      value={text}
      defaultValue={props.defaultValue}
      multiline
      maxLength={props.maxLength}
      underlineColorAndroid={themeManagaer.currentTheme.separator}
      onChangeText={(changedText: string) => {
        setText(changedText);
        if (props.onChangeText) {
          props.onChangeText(changedText);
        }
      }}
    />
  );
}

function getDynamicTextInputStyle(text: string) {
  return StyleSheet.create({
    style: {
      height: 192,
      textAlign: text.length === 0 ? 'center' : 'left',
    },
  });
}

export default StockTextInput;
