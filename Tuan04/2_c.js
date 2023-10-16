import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, CheckBox } from 'react-native';

export default function App() {

    const [password, setPassword] = useState('');
    let [check1, setCheck1] = useState(false)
    let [check2, setCheck2] = useState(false)
    let [check3, setCheck3] = useState(false)
    let [check4, setCheck4] = useState(false)

    const generatePassword = () => {
        document.getElementById('pass').value = "";
        let l = parseInt(document.getElementById('lengthP').value);
        if (l <= 0) return;
        let newPassword = '';
        let pass = "";
        if (check1) {
            newPassword += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (check2) {
            newPassword += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (check3) {
            newPassword += '0123456789';
        }
        if (check4) {
            newPassword += '!@#$%^&*()';
        }
        for (let i = 0; i < l; i++) {
            const randomIndex = Math.floor(Math.random() * newPassword.length);
            pass += newPassword.charAt(randomIndex);
        }
        setPassword(pass);
        document.getElementById('pass').value = password;
    };
    return (
        <View style={styles.container} >
            <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textHead}>PASSWORD</Text>
                <Text style={styles.textHead}>GENERATOR</Text>
            </View>
            <TextInput id='pass' style={{
                flex: 0.7,
                fontSize: 17,
                backgroundColor: '#151537',
                padding: 12,
                color: 'white'
            }} placeholder='password show here'
            ></TextInput>
            <View style={{ flex: 0.7 }}></View>
            <View style={{ flex: 0.6, flexDirection: 'row' }}>
                <Text style={{
                    flex: 2,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                    alignItems: 'center'
                }}>Password length</Text>
                <TextInput id='lengthP' style={{
                    flex: 1,
                    backgroundColor: 'white',
                    padding: 10,
                    width: 50,
                    fontSize: 17,
                }}

                ></TextInput>
            </View>
            <View style={{ flex: 0.4 }}></View>
            <View style={{ flex: 4, flexDirection: 'row' }}>
                <View style={{ flex: 9 }}>
                    <Text style={styles.textBox}>Include lower case letters</Text>
                    <View style={{ flex: 0.3 }}></View>
                    <Text style={styles.textBox}>Include upcase letters</Text>
                    <View style={{ flex: 0.3 }}></View>
                    <Text style={styles.textBox}>Include number</Text>
                    <View style={{ flex: 0.3 }}></View>
                    <Text style={styles.textBox}>Include special symbol</Text>
                    <View style={{ flex: 0.3 }}></View>
                </View>
                <View style={{ flex: 2 }}>
                    <CheckBox value={check1} onValueChange={setCheck1}></CheckBox>
                    <View style={{ flex: 0.3 }}></View>
                    <CheckBox value={check2} onValueChange={setCheck2}></CheckBox>
                    <View style={{ flex: 0.3 }}></View>
                    <CheckBox value={check3} onValueChange={setCheck3}></CheckBox>
                    <View style={{ flex: 0.3 }}></View>
                    <CheckBox value={check4} onValueChange={setCheck4}></CheckBox>
                    <View style={{ flex: 0.3 }}></View>
                </View>
            </View>
            <View style={{ flex: 0.3 }}></View>
            <TouchableOpacity style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#3B3B98',
                borderRadius: 5
            }} onPress={generatePassword}>
                <Text style={{
                    color: 'white',
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>GENERATE PASSWORD</Text>
            </TouchableOpacity>
            <View style={{ flex: 1 }}></View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#23235B',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    textHead: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    textBox: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center'
    }


});
