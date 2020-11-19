import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import parseText from './src/TextProcessing/parser/parser';

interface AppState {
  text: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <TextInput
            style={styles.code}
            multiline
            onChangeText={(text) => {
              this.setState({text: parseText(text)});
            }}
          />
          <View style={styles.renderedCode}>
            {this.state.text}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  code: {
    color: 'black',
    width: '50%',
    height: '100%',
    backgroundColor: 'white',
    borderRightWidth: 2,
    borderColor: 'darkgray',
  },
  renderedCode: {
    width: '50%',
    height: '100%',
  },
});

export default App;
