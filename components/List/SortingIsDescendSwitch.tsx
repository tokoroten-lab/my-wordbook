import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {Switch} from 'react-native-gesture-handler';

interface Props {
  defaultValue: boolean;
  onValueChange: (value: boolean) => void;
}

function SortingIsDescendSwitch(props: Props) {
  const [isEnabled, setIsEnabled] = useState(props.defaultValue);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Descend</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => {
          setIsEnabled(value);
          props.onValueChange(value);
        }}
        value={isEnabled}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SortingIsDescendSwitch;
