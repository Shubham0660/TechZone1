import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import CourseItemVertical from './CourseItemVertical'

export default function CourseListVertical({courseList}) {
  return (
    <View>
     
         <FlatList
            data={courseList}
            renderItem={({item,index})=>(
                <CourseItemVertical course={item} />
            )}
        />
    </View>
  )
}