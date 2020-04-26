import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {SortingAxisNameType} from 'models/ModelManager';

interface Props {
  defaultValue: SortingAxisNameType;
  onValueChange: (itemValue: SortingAxisNameType) => void;
}

function SortingAxisNamePicker(props: Props) {
  const [axisName, setAxisName] = useState<SortingAxisNameType>(
    props.defaultValue,
  );

  return (
    <SafeAreaView style={styles.container}>
      <Picker
        selectedValue={axisName}
        style={styles.picker}
        onValueChange={(value) => {
          const changedAxisName = value as SortingAxisNameType;
          setAxisName(changedAxisName);
          props.onValueChange(changedAxisName);
        }}>
        <Picker.Item label="Word" value="word" />
        <Picker.Item label="Count" value="count" />
        <Picker.Item label="Recognition" value="recognition" />
        <Picker.Item label="Unrecognition" value="unrecognition" />
        <Picker.Item label="Evaluation" value="evaluation" />
      </Picker>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    height: 40,
    width: 170,
  },
});

export default SortingAxisNamePicker;
