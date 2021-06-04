import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import { Text, ErynLogo } from '_components';
/**
 * Essa feature será um contador que incrementa de x em x
 * Irá ter um input para informar de quanto em quanto incrementar o contador
 * Terá um botão para zerar o contador
 * Ao clicar no botão, o número que aparece na tela irá aumentar em x
 */
function StartScreen({ name }) {
  return (
    <SafeAreaView>
      <ErynLogo style={styles.image} />

      <View style={styles.content}>
        <Text heading bold>
          1
        </Text>
      </View>
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

const mapStateToProps = (state) => ({
  name: state.user.name,
});

export default connect(mapStateToProps, null)(StartScreen);
