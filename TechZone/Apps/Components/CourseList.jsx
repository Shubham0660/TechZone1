import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CourseItem from './CourseItem'

export default function CourseList({courseList}) {
  return (
    <View>
      <FlatList
          data={courseList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index})=>(
            <CourseItem course={item}/>
  )}
      
      
      
      
      
      />
    </View>
  )
}