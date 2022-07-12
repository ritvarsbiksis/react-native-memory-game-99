import React from "react";
import { NativeBaseProvider, Box, Button, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeArea style={{ paddingHorizontal: 7, justifyContent: 'center', minHeight: 500 }} >
        <Text textAlign='center'>Memory Game 99</Text>
        <Button style={{ width: 150, marginTop: 20 }} alignSelf='center'>Start</Button>
      </Box>
    </NativeBaseProvider >
  );
}
