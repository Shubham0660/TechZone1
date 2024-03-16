import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CourseListVertical from './CourseListVertical'
import Colors from '../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CourseItemVertical({course}) {
  const navigation=useNavigation();

  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('course-detail',{
      course:course
    })
    
    }
    style={{backgroundColor:Colors.WHITE,padding:10,marginBottom:15,
      borderRadius:10,gap:10,display:'flex',flexDirection:'row'}}>
       <Image source={{uri:course?.banner?.url}}
            style={{width:100,height:100,borderRadius:15}}
        />
        <View style={{display:'flex',gap:9,flex:1}}>
            <Text style={{fontSize:16,fontFamily:'outfit-bold'}}
            numberOfLines={2}>{course.name}</Text>
            <Text style={{fontSize:14,fontFamily:'outfit',
        color:Colors.GRAY}}>{course.author}</Text>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
           {course?.chapter?.length? 
           <View style={{display:'flex',flexDirection:'row',
           gap:4,alignItems:'center'}}>
                <Ionicons name="book" size={20} color={Colors.PRIMARY} />
                <Text style={{color:Colors.GRAY,fontFamily:'outfit'}}>{course?.chapter?.length} Chapters</Text>
            </View>:
             <View style={{display:'flex',flexDirection:'row',
             gap:4,alignItems:'center'}}>
                  <Ionicons name="logo-youtube" size={20} color={'red'} />
                  <Text style={{color:Colors.GRAY,fontFamily:'outfit'}}>
                     Watch On Youtube</Text>
              </View>
            }
            <Text style={{fontFamily:'outfit-bold',color:Colors.PRIMARY}}>{course.free?'Free':'Paid'}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}