import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react'
import * as Google from 'expo-auth-session/providers/google';

const Login = ({navigation}) => {
    const handleLogin = () => {
        navigation.navigate('Home');
    };
    const handleRegister = () => {
        navigation.navigate('Register');
    }
    const [agree, setAgree] = useState(false);
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.headContainer}>TIFFIN BOX</Text>
        {/* <Text style={styles.compContent}>LOGIN HERE</Text> */}
        <Text style={styles.labelController}>Enter your username</Text>
        <TextInput 
            style={styles.inputStyle} 
            placeholder='Enter username' 
            autoCapitalize="none" 
            autoCorrect={false}
        />
        <Text style={styles.labelController}>Enter your password</Text>
        <TextInput 
            style={styles.inputStyle} 
            placeholder='Enter Password' 
            secureTextEntry={true} 
            autoCapitalize="none" />
        <View style={styles.wrapper}>
            <Checkbox 
                boxType="square"
                value={agree}
                onValueChange={() => setAgree(!agree)}
                color={agree ? "#E65100" : undefined}
            />
            <Text style={styles.wrapperText}>Remember me</Text>
        </View>
        <View  style={styles.actionArea}>
        <TouchableOpacity style={[styles.buttonStyle,{
            backgroundColor: agree ? "#7CB342" : "#FFAB91"
        }]}
            // disabled={!agree}
            onPress={handleLogin}
        >
            <Text style={styles.buttonLabel} >LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newHereContainer}
            onPress={handleRegister}
        >
            <Text style={styles.newHere}>New Here? </Text>
        </TouchableOpacity>
        </View>
    </View>

  )
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "#FFCA28"
    },
    compContent: {
        paddingTop: 70,
        alignSelf: "center",
        fontFamily: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#000000"
    },
    headContainer: {
        paddingTop: 30,
        paddingBottom: 80,
        alignSelf: "center",
        fontFamily: "normal",
        fontWeight: "bold",
        fontSize: 30,
        color: "#000000"
    },
    labelController: {
        paddingTop: 30,
        paddingBottom: 5,
        alignSelf: "center",
        fontFamily: "normal",
        fontSize: 20,
        color: "#000000",
        opacity: 0.2
    },
    inputStyle: {
        borderColor: "#000000",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 20,
        fontFamily: "normal",
        width: "100%",
        height: 50,
        fontSize: 20
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        paddingVertical: 15,
    },
    wrapperText: {
        lineHeight: 30,
        marginLeft: 10,
        fontSize: 20,
        color: "#000000",
        opacity: 0.2
    },
    buttonStyle: {
        height: 40,
        width: 130,
        borderRadius: 15,
        alignContent: "center",
        paddingHorizontal: 25,
        paddingVertical: 8,
        shadowColor: 'inherit',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'inline'
    },
    buttonLabel: {
        alignSelf: "center",
        fontFamily: "normal",
        fontSize: 20,
    },
    newHereContainer: {
        paddingHorizontal: 15,
        paddingTop: 10,
        display: 'inline',
    },
    newHere: {
        fontSize: 20,
        opacity: 0.6,
    },
    actionArea: {
        flexDirection: 'row'
    }
})

export default Login