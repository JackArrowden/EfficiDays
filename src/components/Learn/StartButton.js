import React from 'react';
import { Button } from 'react-native';

const StartButton = ({ mode, isActive, onStart, onStop, onReset }) => {
  const [isStopped, setIsStopped] = React.useState(false);

  const handlePress = () => {
    if (isActive) {
      onStop();
      setIsStopped(true);
    } else {
      onStart();
      setIsStopped(false);
    }
  };

  const handleReset = () => {
    onReset();
    onStart();
    setIsStopped(false);
  };

  return (
    <>
      <Button
        onPress={handlePress}
        title={isActive ? "Dừng" : "Tiếp tục"}
      />
      {isStopped && (
        <Button
          onPress={handleReset}
          title="Khởi động lại"
        />
      )}
    </>
  );
};

export default StartButton;