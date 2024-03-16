import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import SectionHeading from './SectionHeading';

export default function CourseIntro({course}) {
  return course&&(
    <View style={{}}>
       {course?.chapter[0]?<Video
        shouldPlay={false}
        style={styles.video}
        source={{
          uri: course?.chapter[0]?.video?.url,
        }}
        useNativeControls={true}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        
      />:
      <Image source={{uri:course?.banner?.url}} style={{width:'100%',height:200,borderRadius:10,marginTop:10}}/>}
      <View style={{display:'flex',gap:10,backgroundColor:Colors.WHITE,padding:15,borderRadius:10}}>
        <Text style={{fontSize:22,fontFamily:'outfit-bold'}}>{course.name}</Text>
        <Text style={{fontSize:14,fontFamily:'outfit',color:Colors.GRAY}}>{course.author}</Text>



<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
{course?.chapter?.length? 
<View style={{display:'flex',flexDirection:'row',gap:4,alignItems:'center',}}>
<Ionicons name="book" size={20} color={Colors.PRIMARY} />
<Text style={{color:Colors.GRAY,fontFamily:'outfit'}}>{course?.chapter?.length} Chapters</Text>
</View>:
<View style={{display:'flex',flexDirection:'row',gap:4,alignItems:'center'}}>
<Ionicons name="logo-youtube" size={20} color={'red'} />
 <Text style={{color:Colors.GRAY,fontFamily:'outfit'}}>Watch On Youtube</Text>
 </View>}
<Text style={{fontFamily:'outfit-bold',color:Colors.PRIMARY}}>{course.free?'Free':'Paid'}</Text>
</View>
<SectionHeading heading={'Description'}/>
<Text numberOfLines={5} style={{marginTop:-10,fontFamily:'outfit'}}>{course?.description}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  video:{
    width:'100%',
    height:250
  }
})
