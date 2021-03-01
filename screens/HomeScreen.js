import { AuthContext } from '../navigation/AuthProvider';
import React, { useContext,useState } from 'react';
import { View, Text, StyleSheet,ScrollView,SafeAreaView } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import database from '@react-native-firebase/database';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 
const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  const[fname,setFName]=useState("");
  const[lname,setLname]=useState("");
  const[Ph_no,setPh_no]=useState("");
  const[email,setEmail]=useState("");
  const[city,setCity]=useState("");
  const[country,setCountry]=useState("");
  const[education,setEducation]=useState("");

  const save_data=()=>
  {
    let student = {
      fname,
      lname,
      Ph_no,
      email,
      city,
      country,
      education

      
    }
    database().ref('/').child('students').push(student)
  }



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.text}>Welcome {user.uid}</Text>

      <FormInput
        labelValue={fname}
        placeholderText="FirstName"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text)=>setFName(text)}

      />
      <FormInput
        labelValue={lname}
        placeholderText="LastName"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text)=>setLname(text)}

      />
      <FormInput
        labelValue={Ph_no}
        placeholderText="PhoneNumber"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text)=>setPh_no(text)}
      />
      <FormInput
        labelValue={email}
        placeholderText="Email"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text)=>setEmail(text)}

      />
      <FormInput
        labelValue={city}
        placeholderText="City"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text)=>setCity(text)}


      />
      <FormInput
        labelValue={country}
        placeholderText="Country"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text)=>setCountry(text)}

      />
      <FormInput
        labelValue={education}
        placeholderText="Education"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text)=>setEducation(text)}

      />


      <FormButton
        buttonTitle="Save"
        onPress={save_data}
      />
       <FormButton
        buttonTitle="Find & Apply for a job"
        // onPress={() => navigation.navigate('JobsScreen')}
      />

      <FormButton buttonTitle='Logout' onPress={() => logout()} />
      </ScrollView>
    </SafeAreaView>
  );
}
 
export default HomeScreen;
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333333'
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

