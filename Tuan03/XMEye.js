import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
export default function XMEye() {
    const navigation = useNavigation();
    return (
        <View style={styles.container} >
            <View style={{ flex: 1 }}></View>
            <Image style={{ height: 100, width: 100, alignSelf: 'center' }} source={require('./assets/eye.png')}></Image>
            <View style={{ flex: 1 }}></View>

            <View style={{ flex: 1.5, flexDirection: 'row', borderBottomWidth: 2, borderColor: '#black' }}>
                <Image style={{ marginLeft: 10, height: 30, width: 30, alignSelf: 'center' }} source={require('./assets/user.png')}></Image>
                <TextInput
                    style={{ flex: 1, padding: 9 }}
                    placeholder='Please input user name'></TextInput>
            </View>
            <View style={{ flex: 0.6 }}></View>
            <View style={{ flex: 1.5, flexDirection: 'row', borderBottomWidth: 2, borderColor: '#black' }}>
                <Image style={{ marginLeft: 10, height: 30, width: 30, alignSelf: 'center' }} source={require('./assets/padlock.png')}></Image>
                <TextInput
                    style={{ flex: 1, padding: 9 }}
                    placeholder='Please input password'></TextInput>
            </View>

            <View style={{ flex: 1 }}></View>
            <Button
                style={{ flex: 1 }}
                color='blue'
                title='LOGIN'
            >
            </Button>
            <View style={{ flex: 0.4 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Register</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Forgot Password</Text>
            </View>
            <View style={{ flex: 0.7 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <hr style={{ flex: 1, color: 'black' }}></hr>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}> Orther Login Methods </Text>
                <hr style={{ flex: 1 }}></hr>
            </View>
            <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image style={{ height: 80, width: 80, alignSelf: 'center' }} source={require('./assets/add-friend.png')}></Image>
                <Image style={{ height: 80, width: 80, alignSelf: 'center' }} source={require('./assets/wifi.png')}></Image>
                <Image style={{ height: 80, width: 80, alignSelf: 'center' }} source={require('./assets/facebook.png')}></Image>
            </View>
            <View style={{ flex: 1 }}></View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },


});
