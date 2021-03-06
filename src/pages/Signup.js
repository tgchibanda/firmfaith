import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import {Actions} from 'react-native-router-flux';



export default class Signup extends React.Component {
		constructor(props){
			super(props)
			this.state={
				userName:'',
				userContact:'',
				userPassword:''
			}
    }
		
		

    addUser(){
        var username = this.state.userName;
        var data = {
            "username": username,
            "contact": this.state.userContact,
            "password": this.state.userPassword,
     }
    
    fetch('http://www.cpstechnologies.co.za/Tests/slim/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
			body: JSON.stringify(data),
			
		})
		.then((response) => response.json())
			.then((responseData, err) => {
				alert(
					responseData,
					"Response Body -> " + JSON.stringify(responseData.body)
				);
				if(responseData=="Registered Successfully"){
					this.props.navigation.navigate('Home');
				}
				else{
					this.props.navigation.navigate('Signup');
				}
			})
			.done();
        
    
    }

    
		static navigationOptions = {
				title: 'Create Account',
			
					headerLeft: null,
			
  };
	
	
  render() {
      
    
    


	  const { navigate } = this.props.navigation;
	  
	  
    return (
      <View style={styles.container}>
	<ScrollView style={styles.scrollview}>
		<Logo/>
		<View style={styles.formcontainer}>
        <TextInput style={styles.inputBox} 
		underlineColorIos='#fff' 
		placeholder='Your name'
		selectionColor="#fff"
		placeholderTextColor="#ffffff"
		onChangeText={userName=> this.setState({userName})}
		/>
		
		
		
		
		<TextInput style={styles.inputBox} 
		underlineColorIos='#fff' 
		placeholder='Your contact number'
		selectionColor="#fff"
		keyboardType="numeric"
		placeholderTextColor="#ffffff"
		onChangeText={userContact=> this.setState({userContact})}
		/>
		
		
		
		<TextInput style={styles.inputBox} 
		underlineColorIos='#fff' 
		placeholder='Password'
		secureTextEntry={true}
		placeholderTextColor="#ffffff"
		onChangeText={userPassword=> this.setState({userPassword})}
		selectionColor="#fff"
		/>
		
		<TouchableOpacity style={styles.btn} onPress={() => this.addUser()} ><Text style={styles.btnText}>Signup</Text></TouchableOpacity >
      </View>
		<View style={styles.signupTextCont}>
			<Text style={styles.signupText}>Already have an account yet?</Text>
			<TouchableOpacity style={styles.signinLink} onPress={() => navigate('Home')}><Text style={styles.signupBtn}>Sign in</Text></TouchableOpacity>
		</View>
	  </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
	scrollview: {
	backgroundColor: '#455a64',
  },
  container: {
	flex:1,
    backgroundColor: '#455a64',
	paddingTop: 15,
  },
  signupTextCont: {
	flexDirection:'row',
    paddingVertical: 16,
	alignItems: 'flex-end',
	justifyContent: 'center',
  },
  signupText: {
	color:'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupBtn: {
	color:'#ffffff',
    fontSize: 16,
	fontWeight: '500',
	marginLeft:5,
  },
  signinLink: {
	  alignItems: 'center',
	  marginLeft: 2,
  },
  formcontainer: {
	  flex: 70,
	justifyContent: 'center',
	alignItems: 'center',
  },
  inputBox: {
	  width:300,
	  height:30,
	  backgroundColor:'rgba(255,255,255,0.2)',
	  borderRadius: 25,
	  paddingHorizontal: 16,
	  fontSize:16,
	  color:'#ffffff',
	  marginVertical:10,
  },
  btnText: {
	  fontSize:16,
	  color:'#ffffff',
	  fontWeight: '500',
  },
   btn: {
	  width:300,
	  borderRadius: 25,
	  backgroundColor:'rgba(255,255,255,0.3)',
	  marginVertical: 10,
	  alignItems: 'center',
	  paddingVertical: 12,
	  backgroundColor: "#1c313a"
  }
});
