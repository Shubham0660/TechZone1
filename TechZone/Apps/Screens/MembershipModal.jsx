import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Colors from '../Utils/Colors';
import GlobalApi from '../Utils/GlobalApi';
import { MembershipContext, UserDetailContext } from '../../App';

export default function MembershipModal() {
  const [selectedMembership, setSelectedMembership] = useState();
  const navigation = useNavigation();
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  const {isMember,setIsMember}=useContext(MembershipContext)
  const saveNewMembership=()=>{
        GlobalApi.createNewMembership(userDetail.email).then(resp=>{
          if(resp)
          {
            setIsMember(true)
            Alert.alert('Great!!!','Thank you for joining membership',[
              {
                text:'Ok',
                onPress:()=>navigation.goBack(),
                style:'cancel'
              }
            ]);

          }
        })
  }

  

  return (
    <View style={{
    }}>
      <View>
        <Image source={require('./../../assets/images/rocket2.jpg')}
          style={{ width: '100%', height: 350 }}
        />
        <View style={{
          position: 'absolute', padding: 20, marginTop: 25,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          display: 'flex', justifyContent: 'space-between'
        }}>
          <Text style={{
            fontSize: 25,
            fontFamily: 'outfit-bold'
          }}>Upgrade to Pro </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ fontSize: 20, textAlign: 'right', }}>X</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={{ padding: 20 }}>
        <View style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly',
          marginTop: 25
        }}>
          <TouchableOpacity
            onPress={() => setSelectedMembership(4.99)}
            style={[{
              borderWidth: 0.5,

              shadowColor: Colors.PRIMARY,
              shadowOffset: { width: 0, height: 2 },
              padding: 15, paddingVertical: 25,
              justifyContent: 'center',

              borderRadius: 10
            }, selectedMembership == 4.99 && {
              borderColor: Colors.PRIMARY,
              backgroundColor: Colors.PRIMARY_LIGHT
            }]}>
            <Text style={{ fontSize: 20, fontFamily: 'outfit' }}>1 Month</Text>
            <View style={{
              height: 1, backgroundColor: Colors.GRAY,
            }}></View>

            <Text style={{ fontSize: 25, fontFamily: 'outfit-bold' }}>$4.99</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedMembership(39.99)}
            style={[{ borderWidth: 0.5, padding: 15, paddingVertical: 25, borderRadius: 10 },
            selectedMembership == 39.99 && {
              borderColor: Colors.PRIMARY,
              backgroundColor: Colors.PRIMARY_LIGHT
            }]}>
            <Text style={{ fontSize: 20, fontFamily: 'outfit', textAlign: 'center' }}>1 Year</Text>
            <View style={{
              height: 1, backgroundColor: Colors.GRAY,
            }}></View>

            <Text style={{ fontSize: 25, fontFamily: 'outfit-bold' }}>$39.99</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
        onPress={()=>selectedMembership&&saveNewMembership()}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
          marginTop: 20

        }}>
          <Text style={{
            textAlign: 'center', color: '#fff',
            fontSize: 17, fontFamily: 'outfit'
          }}>Get Membership Now</Text>
        </TouchableOpacity>

        <Text style={{
          color: Colors.GRAY, textAlign: 'center',
          fontSize: 16,
          fontFamily: 'outfit', marginTop: 10
        }}>You can purchase the membership to access all course along with source code and extras.

        </Text>
        <Text style={{
          color: Colors.GRAY, textAlign: 'center',
          fontSize: 16, fontFamily: 'outfit', marginTop: 10
        }}> If you want to cancel membership then email us on : admin@tubeguruji.com</Text>
      </View>
    </View>
  )
}