import React from 'react'
import { View, Text, Dimensions, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import serviceData from './Data';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 const Home =  ({navigation}) => {
 return(
 <SafeAreaView>
<FlatList
data={serviceData}
contentInset={{padding: 12,}}
renderItem={({item}) =>{
  return(
    <TouchableOpacity onPress={() => navigation.navigate('Details')} style={{margin: 10, height:windowHeight *0.2,backgroundColor:item.BKGColor, borderRadius:20,top:10,}}>
      <View style={{backgroundColor:item.BKGColor}}>
      <Text style={styles.Name}>
        {item.Name}
      </Text>
      <Text styles={styles.Category}>
        {item.Category}
      </Text>
      <Text>
        {item.numberCompany}
      </Text>
  
      </View>
      <Image style={{
height:60,
width:60,
position: 'absolute',
right: 10,
margin: 50,
bottom:0,
      }} source={item.image}/>
    </TouchableOpacity>
  )
}}
>

</FlatList>
 </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   //backgroundColor: '#2c3e50',
  },

  Name:{
fontSize:25,
color:"white",
  },
  Category:{
fontSize:20,

  }
});

export default Home;