//import libraries
import React, { useState } from 'react'
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { SafeAreaView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { registration } from './Backend/Authentication';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = ({ navigation }) => {
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const SignUpUser=()=>{
registration(FirstName,LastName,Email,Password)
    }

    return (
        <SafeAreaView>
            <Text style={styles.Text}>Sign Up</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={FirstName}
                    FirstName='FirstName'
                    onChange={(FirstName) =>{setFirstName(FirstName)}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={LastName}
                    LastName='LastName'
                    onChange={(LastName) =>{setLastName(LastName)}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={Email}
                    Email='Email'
                    onChange={(Email) =>{setEmailName(Email)}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={Password}
                    Password='Password'
                    onChange={(Password) =>{setPassword(Password)}}
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={{ color: 'white' }}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.Textbutton}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{ color: '#f50057' }}>You already have an account?Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

//define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#f50057",
        padding: 10,
        margin: 10,
        boarderRadius: 10,



    },
    Textbutton: {
        alignItems: "center",
        padding: 0,
        margin: 0,
        boarderRadius: 0,

    },
    Text: {
        fontSize: 50,
        top: 100,
        textAlign: "center"



    },
    form: {
        margin: 16,
        paddingTop: windowHeight / 4,
    }
});
//make this component available to the app
export default SignUp;