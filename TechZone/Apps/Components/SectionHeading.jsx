import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function SectionHeading({heading}) {
  return (
    <Text style={{fontFamily:'outfit-bold',fontSize:20,marginBottom:5,color:Colors.PRIMARY,marginTop:15}}>{heading}</Text>
  )
}