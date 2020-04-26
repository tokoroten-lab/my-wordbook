import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import SortingAxisNamePicker from './SortingAxisNamePicker';
import SortingIsDescendSwitch from './SortingIsDescendSwitch';
import {SortingAxisNameType} from 'models/ModelManager';

type SortingAxisLevelType = 'Primary' | 'Secondary';

interface Props {
  axisLevel: SortingAxisLevelType;
  defaultAxisName: SortingAxisNameType;
  defaultIsDescend: boolean;
  onAxisNameValueChange: (value: SortingAxisNameType) => void;
  onIsDescendValueChange: (value: boolean) => void;
}

function SotringAxis(props: Props) {
  const [, setAxisName] = useState<SortingAxisNameType>(props.defaultAxisName);
  const [, setIsDescend] = useState(props.defaultIsDescend);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.leftContainer}>
        <Text>{props.axisLevel}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.rightContainer}>
        <SortingAxisNamePicker
          defaultValue={props.defaultAxisName}
          onValueChange={(value: SortingAxisNameType) => {
            setAxisName(value);
            props.onAxisNameValueChange(value);
          }}
        />
        <SortingIsDescendSwitch
          defaultValue={props.defaultIsDescend}
          onValueChange={(value: boolean) => {
            setIsDescend(value);
            props.onIsDescendValueChange(value);
          }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flexDirection: 'row',
  },
});

export default SotringAxis;
