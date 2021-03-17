import React from 'react';
import { StyleSheet, View } from 'react-native';
import Landing from './Components/Landing';

const App = () => {
  return (
    <View style={styles.container}>
      <Landing />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default App; 
