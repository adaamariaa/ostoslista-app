import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput, Text,  FlatList } from 'react-native';

export default function App() {
  const [data, setData] = React.useState([]);
  const [text, setText] = React.useState('');

  const addToList = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const clearList = () => {
    setData('');
    setText('');
  }

  return (
    <View style={styles.container}>
      <View>
      
      </View>

      <View>
      <TextInput
          style={{width: 200, borderColor: 'black', borderWidth: 1,  }}
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>
      <View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button color='violet' onPress={addToList} title="Add"/>
              </View>
              <View>
              <Button color='violet' onPress={clearList} title="Clear"/>
              </View>
          <StatusBar style="auto" />
          </View>
        </View>
        <View>
            <Text style={styles.titleText}>
            {'Shoppinglist'}
          </Text>

          <FlatList style={styles.list}
            data={data}
            renderItem={({ item }) =>
            <Text>{item.key}</Text>
        }
          keyExtractor={(item, index) => index.toString()}
      />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    justifyContent: 'center', 
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    margin: 10,
  },

  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  button: {
    marginRight: 10,
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }

});
