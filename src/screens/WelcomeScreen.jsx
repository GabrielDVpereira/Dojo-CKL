import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
/**
 * Essa feature será um contador que incrementa de x em x
 * Irá ter um input para informar de quanto em quanto incrementar o contador
 * Terá um botão para zerar o contador
 * Ao clicar no botão, o número que aparece na tela irá aumentar em x
 */
export default function WelcomeScreen({ name }) {
  const [count, setCount] = useState(1);

  const incrementValue = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <SafeAreaView style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
      <Text testID="counter" style={{marginBottom: 10}}>{count}</Text>
      <TouchableOpacity onPress={incrementValue} style={{ backgroundColor: 'red', padding: 10, borderRadius: 5}}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Increment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 60,
  },

  content: {
    flex: 1,
    alignItems: 'center',
  },

  projectLabel: {
    fontSize: 30,
    lineHeight: 48,
  },
});
