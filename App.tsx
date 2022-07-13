import React from "react";
import { NativeBaseProvider, Box, Button, Text, Center, HStack, VStack } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeArea style={{ paddingHorizontal: 7, minHeight: 500 }} alignSelf='center' >
        <VStack space={2} marginBottom={5} marginTop={5}>
          <HStack space={2}>
            <Center bg="primary.400" _text={{
              color: 'white',
              fontWeight: 'bold'
            }} height="40" alignSelf='center' width="40" shadow={2}>
              1
            </Center>
            <Center bg="primary.400" _text={{
              color: 'white',
              fontWeight: 'bold'
            }} height="40" alignSelf='center' width="40" shadow={2}>
              2
            </Center>
          </HStack>
          <HStack space={2}>
            <Center bg="primary.400" _text={{
              color: 'white',
              fontWeight: 'bold'
            }} height="40" width="40" shadow={2}>
              3
            </Center>
            <Center bg="primary.400" _text={{
              color: 'white',
              fontWeight: 'bold'
            }} height="40" width="40" shadow={2}>
              4
            </Center>
          </HStack>
          <HStack space={2}>
            <Center bg="primary.400" _text={{
              color: 'white',
              fontWeight: 'bold'
            }} height="40" width="40" shadow={2}>
              5
            </Center>
            <Center bg="primary.400" _text={{
              color: 'white',
              fontWeight: 'bold'
            }} height="40" width="40" shadow={2}>
              6
            </Center>
          </HStack>
        </VStack>
        <Text textAlign='center'>Memory Game 99</Text>
        <Button style={{ width: 150, marginTop: 20 }} alignSelf='center'>Start</Button>
      </Box>
    </NativeBaseProvider >
  );
}
