import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const StopwatchButton = ({ isActive, isStopped, onStart, onStop, onResume, onReset }) => {
  const handlePress = () => {
    if (isActive) {
      onStop();
    } else if (isStopped) {
      onResume();
    } else {
      onStart();
    }
  };

  const handleReset = () => {
    onReset();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>
          {isActive ? "Dừng lại" : isStopped ? "Tiếp tục" : "Bắt đầu"}
        </Text>
      </TouchableOpacity>
      {isStopped && (
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={handleReset}>
          <Text style={styles.buttonText}>Khởi động lại</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    margin: 10,
  },
  resetButton: {
    backgroundColor: '#FF6347',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default StopwatchButton;
