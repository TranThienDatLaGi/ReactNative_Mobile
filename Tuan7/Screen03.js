import { useNavigation,useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native';
export default function App() {
  let navigation = useNavigation();
  let route = useRoute();
  let todolist = route.params.todolist;
  const [title, setTitle] = useState("");
  // let todolist = JSON.parse(user);
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
        <TouchableOpacity style={{ paddingHorizontal: 10 }}
        onPress={()=>{navigation.navigate("Screen02",{todolist:todolist})}}
        >
          <Text style={{color:'black',fontSize:16}}>Back</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image
            source={{uri:todolist.image}}
            style={{height:40,width:40,borderRadius:20,marginRight:10}}
          />
          <View style={{flexDirection:'column'}}>
            <Text style={{ color: 'black', fontSize: 20,fontWeight:'bold' }}>{todolist.name}</Text>
            <Text style={{ color: 'gray', fontSize: 16, fontWeight: '500' }}>{todolist.description}</Text>
          </View>
        </View>
      </View>
    <Text style={{textAlign:'center',fontSize:40,fontWeight:'bold',marginTop:40,marginBottom:30}}>ADD YOUR JOB</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/Frame.png')} style={{ height: 20, width: 20, resizeMode: 'contain', left: 28 }}></Image>
        <TextInput style={{ borderWidth: 1, height: 45, flex: 1, paddingLeft: 40, marginRight: 20, borderRadius: 5 }} placeholder='Input your job'
        onChangeText={setTitle}
        ></TextInput>
      </View>
      <View style={{ marginTop: 50 }}></View>    
      
      <TouchableOpacity style={{ alignItems: 'center',backgroundColor:'#00BDD6',height:50,borderRadius:20,justifyContent:'center',marginLeft:70,marginRight:70}}
        onPress={() => { navigation.navigate("Screen02",{todolist:todolist  })}}
      >
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 17 }}
         onPress={() => {
          if (title === "") return alert("Please input your job");
          else {
            fetch(
              "https://65435c0201b5e279de2039f4.mockapi.io/api/v1/todolist/todo",
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  state: false,
                  desc: title,
                }),
              }
            )
              .then((response) => response.json())
              .then((json) => {
                if (json != null)
                  setTimeout(() => {
                    navigation.goBack();
                  }, 800);
              })
              .catch((error) => console.error(error));
          }
        }}
        >FINISH</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: '2%',
    paddingRight:'2%'
  },
});