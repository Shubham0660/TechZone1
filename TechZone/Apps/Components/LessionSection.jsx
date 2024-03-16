import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

export default function LessionSection({course,userEnrollment,onChapterSelect,selectedChapter={},disable=false}) {

    // const[isEnrolled,setIsEnrolled]=useState(false)
    console.log("userEnrollment",userEnrollment);
    const checkIsChapterCompleted=(chapterId)=>{
      const result=userEnrollment&&userEnrollment[0]?.completedChapter.find(item=>item.chapterId==chapterId);
      
      return result;
    }
   
  return (
    <View>
    <SectionHeading heading={'Lessions'}/>
      <FlatList
        data={course?.chapter}
        showsVerticalScrollIndicator={false}
        renderItem={({item,index})=>(
          <TouchableOpacity 
          onPress={()=>!disable&&onChapterSelect(item)}
          style={[styles.container,selectedChapter==item&&{
            backgroundColor:Colors.PRIMARY_LIGHT
          },checkIsChapterCompleted(item.id)&&{backgroundColor:Colors.LIGHT_GREEN}]}>
            <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}>
            <Text style={[{
                fontSize:17,
                fontFamily:'outfit',
                padding:10,
                backgroundColor:Colors.PRIMARY_LIGHT,
                borderRadius:99,
                width:40,
                height:40,
                textAlign:'center',
                color:Colors.PRIMARY
            },checkIsChapterCompleted(item.id)&&{color:Colors.GREEN,backgroundColor:Colors.LIGHT_GREEN}]}>{index+1}</Text>
              <Text style={{
                fontFamily:'outfit-medium',
                fontSize:17
              }}>{item.name}</Text>
            </View>
             
              {
               checkIsChapterCompleted(item.id)? <Ionicons name="checkmark-circle" size={28} color={Colors.GREEN} />:
              userEnrollment?.length>0||index==0?<Ionicons name="play-circle" size={34} color={Colors.PRIMARY}/>
             
              :
              <Ionicons name="lock-closed" size={28} color={Colors.GRAY} />}

          </TouchableOpacity>
  )}
      />
      <View style={{height:50}}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:15,
    borderWidth:0.5,
    marginBottom:10,
    borderRadius:10,
    backgroundColor:Colors.WHITE
  }
})
