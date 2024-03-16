import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Video, ResizeMode } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import LessionSection from '../Components/LessionSection';
import GlobalApi from '../Utils/GlobalApi';
import { ReloadMethodsContext, UserDetailContext } from '../../App';

export default function WatchLessons() {
  const {params}=useRoute();
  const [userEnrollment,setUserEnrollment]=useState(params?.userEnrollment);
  const [course,setCourse]=useState(params?.course);
  const [selectedChapter,setSelectedChapter]=useState()
  const {reload,setReload}=useContext(ReloadMethodsContext)
  const navigation=useNavigation();
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  const video = useRef(null);
  useEffect(()=>{
        console.log("---",selectedChapter?.video?.url)
        params&&setSelectedChapter(params?.course?.chapter[0]);
        params&&setUserEnrollment(params?.userEnrollment)
  },[params&&userEnrollment])
  
  const onChapterCompleted=()=>{
    GlobalApi.markChapterCompleted(userEnrollment[0]?.id,selectedChapter?.id).then(resp=>{
        console.log("--",resp);
        checkIsUserEnrollToCourse(course)
        setReload(Date.now())
        ToastAndroid.show('Chapter Mark Completed!',ToastAndroid.SHORT);
    })
}

const checkIsUserEnrollToCourse=(course)=>{
  console.log("EnrooledCourse")
  GlobalApi.checkUserCourseEnrollment(course?.slug,userDetail.email)
  .then(resp=>{
  console.log("EnrooledCourse",resp)

    setUserEnrollment(resp.userEnrollCourses)
  })
}

  return selectedChapter&& (
     <ScrollView style={{padding:20}}>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:75,marginTop:15}}>
        <TouchableOpacity 
        onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>
     
     <Text style={{fontSize:27,fontFamily:'outfit-bold',marginTop:5}}>Lessons</Text>
     </View>
      {selectedChapter&&<Video
        shouldPlay={false}
        style={styles.video}
        source={{
          uri:selectedChapter.video?.url,
        }}
        onReadyForDisplay={()=>console.log("READ...")}
        useNativeControls={true}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        
      />}
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:15}}>
        <Text style={{fontFamily:'outfit-bold',fontSize:20,flex:1}}>{selectedChapter?.name}
        </Text>
        <TouchableOpacity
         onPress={()=> onChapterCompleted()}
        style={{backgroundColor:Colors.PRIMARY,padding:4,borderRadius:4,paddingHorizontal:8}}>
        <Text style={{color:Colors.WHITE,textAlign:'center',fontFamily:'outfit'}}>Mark Completed</Text>
      </TouchableOpacity>
      </View>
      <LessionSection 
      course={course}
      userEnrollment={userEnrollment}
      onChapterSelect={(chapter)=>setSelectedChapter(chapter)}
      selectedChapter={selectedChapter}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  video:{
    width:'100%',
    height:250
  }
})
