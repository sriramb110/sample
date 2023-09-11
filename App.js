import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View,FlatList, TouchableOpacity,TouchableHighlight} from 'react-native';

export default function App() {

  const [months,setMonths] = useState([
    {name:'January',id:1},
    {name: 'February', id:2},
    {name: 'March', id:3},
    {name: 'April', id:4},
    {name: 'May', id:5},
    {name: 'jun', id:6},
    {name: 'july', id:7},
    {name: 'August', id:8},
    {name: 'September', id:9},
    {name: 'October', id:10},
    {name: 'Novembr', id:11},
    {name: 'December', id:12},
    
  ])
  const handlePress = (item) => {
    console.log('handlePress')
    setMonths((prevMonths) => {
      return prevMonths.filter((month)=>{
        return month.id !== item.id
      })
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data = {months}
        numColumns={2}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (
            <TouchableHighlight onPress={() =>handlePress(item)} underlayColor={'transparent'}>
            

          <Text style={styles.text}>{item.name}</Text>
          </TouchableHighlight>
        )}
      
      
      />
      {/*<ScrollView>
      {
        months.map((month) => {
          return(
            <Text key={month.id} style={styles.text}>{month.name}</Text>
          )
        })
      }
    </ScrollView>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:15,
  },
  text : {
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    width:100,
    padding:15,
    margin:15,

  },
  
});
