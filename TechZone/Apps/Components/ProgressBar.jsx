import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function ProgressBar({perc}) {

    const screenWidth=Dimensions.get('screen').width*0.8;
    const progressWidth=screenWidth*perc;
  return (
    <View style={{backgroundColor:Colors.GRAY,borderRadius:99}}>
    <View style={{height:7,backgroundColor:Colors.PRIMARY,borderRadius:99,width:progressWidth}}>
    

    </View>
    </View>
  )
}