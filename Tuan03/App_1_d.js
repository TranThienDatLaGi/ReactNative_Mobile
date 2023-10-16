import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
export default function App_1_d() {
    const navigation = useNavigation();
    return (
        <View style={styles.container} >
            <View style={styles.style1}>LOGIN</View>
            <View style={{
                flex: 1,
            }}>
                <TextInput
                    style={{ flex: 1, backgroundColor: '#9ac2b9', padding: 9, borderRadius: 5 }}
                    placeholder='Email'></TextInput>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 1.5, flexDirection: 'row', backgroundColor: '#9ac2b9', borderRadius: 5 }}>
                    <TextInput
                        style={{ flex: 1, backgroundColor: '#9ac2b9', padding: 9 }}
                        placeholder='Password'></TextInput>
                    <Image style={{ marginRight: 20, height: 40, width: 40, alignSelf: 'center', backgroundColor: '#9ac2b9' }} source={require('./assets/eyelock.png')}></Image>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>

            <View style={{ flex: 2 }}>
                <Button title='LOGIN' color="red" style={{ flex: 1 }}></Button>
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>When you agree to terms and condrons</Text>
                    <Text style={{ color: '#1565f7' }}>For got your password</Text>
                    <Text style={{ fontWeight: 'bold' }}>Or login with</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={{ flex: 1 }} source={require('./assets/facebook.png')}></Image>
                    <Image style={{ flex: 1 }} source={require('./assets/zalo.png')}></Image>
                    <Image style={{ flex: 1 }} source={require('./assets/google.png')}></Image>
                </View>
                <View style={{ flex: 1.5 }}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C7F4F6',
        paddingLeft: 20,
        paddingRight: 20,
    },
    style1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
    }

});
