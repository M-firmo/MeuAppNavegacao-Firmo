import React from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: screenWidth * 0.6,
    backgroundColor: '#DDDDDD',
  },
});
