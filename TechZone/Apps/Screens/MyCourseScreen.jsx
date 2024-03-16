import { View, Text, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContext } from '../../App';
import GlobalApi from '../Utils/GlobalApi';
import CourseItem from '../Components/CourseItem';
import ProgressCourseItem from '../Components/ProgressCourseItem';

export default function MyCourseScreen() {

  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  const [enrolledCoursesLists,setEnrolledCoursesList]=useState();
  const [isLoading,setIsLoading]=useState(false);
  useEffect(()=>{
    userDetail&&getAllUserEnrollCourses();
  },[userDetail])

  const getAllUserEnrollCourses=()=>{
    setIsLoading(true)
    GlobalApi.getAllUserEnrollCourses(userDetail.email).then(resp=>{
    setEnrolledCoursesList(resp.userEnrolledCourses)
    setIsLoading(false)
    })
  }
  return (
    <View style={{padding:20,marginTop:25}}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:27
      }}>My Course</Text>


      {/* //List of Course Enrollment */}

      <FlatList
        data={enrolledCoursesLists}
        refreshing={isLoading}
        showsVerticalScrollIndicator={false}
        onRefresh={()=>getAllUserEnrollCourses()}
        renderItem={({item,index})=>(
          <View>
              <ProgressCourseItem 
              completedChapter={item?.completedChapter?.length}
              course={item.courseList} />
          </View>
        )}
      />
    </View>
  )
}