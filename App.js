import { StatusBar } from 'expo-status-bar';
import react,{useState} from 'react';
import {Alert, StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  const[dot,setdot]=useState("");
  const[tod,settod]=useState('');

  const onChange=(show)=>{
    var faren ="";
    var kelvin ="";
    console.warn(show);
    if (show==""){
      setdot("");
      settod("");

    }else {
      try {
        faren =Number(show)*1.8+32
        kelvin =Number(show)+273.15;
      }catch (err){
        console.warn(err);
      }
      setdot(kelvin.toString());
      settod(faren.toString());

      }
    };  
    
    return (
    <View style={styles.container}>
      <Text>celcius</Text>
      <TextInput placeholder='value' onChangeText={onChange}/>
      <Text>kelvin</Text>
      <TextInput placeholder='value' value={dot} onChangeText={onChange}/>
      <Text>fahrenheit</Text>
      <TextInput placeholder='value' value={tod}/>

      <Button title='convert' onPress={()=>Alert.alert('text')}/>
      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
