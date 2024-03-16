import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Utils/Colors'
import SectionHeading from './SectionHeading';

export default function CategoryList({categories,setSelectedCategory}) {
    

    const [activeIndex,setActiveIndex]=useState();
  return (
    <View style={{marginTop:20}}>
    <SectionHeading heading={'Category'}/>
     <FlatList
      data={categories}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <TouchableOpacity style={[styles.container,activeIndex==index&&{borderWidth:1,borderColor:Colors.PRIMARY}]}
        onPress={()=>{
            setActiveIndex(index);
            setSelectedCategory(item.slug)
        }}
        >
          <Image source={{uri:item?.icon?.url}} 
                    style={{width:40,height:40,borderRadius:99,objectFit:'contain'}}/>
          <Text style={{textAlign:'center',marginTop:4}}>{item?.name}</Text>          
        </TouchableOpacity>
      )}
     />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
     backgroundColor:Colors.WHITE,
     padding:15,
     marginRight:10,
     alignItems:'center',
     justifyContent:'center',
     borderRadius:15,
     width:90

  }
})
