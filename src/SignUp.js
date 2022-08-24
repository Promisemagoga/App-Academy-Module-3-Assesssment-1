//import libraries
import React from 'react'
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { SafeAreaView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text style={styles.Text}>Sign Up</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
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
                <Text style={{ color: 'purple' }}>You already have an account?Login</Text>
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
        backgroundColor: "#6200ea",
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