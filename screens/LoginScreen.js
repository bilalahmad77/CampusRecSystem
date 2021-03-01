// import React, {useContext, useState} from 'react';
// import {View,Text,TouchableOpacity,Image,ScrollView} from 'native-base';
// import FormInput from '../components/FormInput';
// import FormButton from '../components/FormButton';
// const LoginScreen = ({navigation}) => {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
   
//     return (
//         <Container>
//         <Header />
//         <Content>
//           <FormInput>
//             <Item fixedLabel>
//                 labelValue={email}
//               <Label>Email</Label>
//               <Input />
//               onChangeText={(userEmail) => setEmail(userEmail)}
//             </Item>
            
//             <Item fixedLabel last>
//             labelValue={password}
//               <Label>Password</Label>
//               onChangeText={(userPassword) => setPassword(userPassword)}

//               <Input />
//             </Item>
//             <FormButton>
//             <Button primary><Text> Forgot Password </Text>
//             onPress={() => {}}
//             </Button>
//             <TouchableOpacity
//         onPress={() => navigation.navigate('Signup')}>
//             <Button hasText transparent>
//               <Text>Don't have an acount? Create here</Text>
//             </Button>
//       </TouchableOpacity>
//       </FormButton>
//           </FormInput>
//         </Content>
//       </Container>
//     );
//   };
   
//   export default LoginScreen;
   

import { AuthContext } from '../navigation/AuthProvider';
import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      /> */}
      <Text style={styles.text}>Campus Recruitment System</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
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