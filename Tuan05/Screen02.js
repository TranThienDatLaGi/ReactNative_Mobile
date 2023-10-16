import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MyConText } from './App'
export default function App() {
    const navigation = useNavigation();
    const { image, setImage } = useContext(MyConText);
    const [mau, setMau] = useState('')
    const [mau2, setMau2] = useState('')
    const [gia, setGia] = useState('')
    const [cung, setCung] = useState('')
    const [cung2, setCung2] = useState('')
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.2 }}></View>
            <View style={{ flex: 2, flexDirection: 'row' }}>
                <Image style={{ flex: 1, height: 132, width: 112 }} source={image}></Image>
                <View style={{ flex: 0.05 }}></View>
                <View style={{ flex: 2, flexDirection: 'column' }}>
                    <View style={{ flex: 1 }}><Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text> </View>
                    <View style={{ flex: 0.5 }}></View>
                    <View style={{ flex: 1, flexDirection: 'row' }}><Text>{mau}</Text><Text style={{ fontWeight: '800' }}>{mau2}</Text></View>
                    <View style={{ flex: 1, flexDirection: 'row' }}><Text>{cung}</Text><Text style={{ fontWeight: '800' }}>{cung2}</Text></View>
                    <View style={{ flex: 1 }}><Text style={{ fontWeight: '800' }}>{gia}</Text> </View>
                    <View style={{ flex: 0.5 }}></View>
                </View>
            </View>
            <View style={{ flex: 6, backgroundColor: '#C4C4C4', justifyContent: 'center', alignContent: 'center' }}>

                <View style={{ flex: 0.1 }}></View>
                <Text style={{ flex: 0.8, fontSize: 18 }}>Chọn một màu bên dưới:</Text>

                <TouchableOpacity
                    onPress={() => {
                        setImage(require('./assets/joy3white.jpg')),
                            setCung('Cung cấp bởi '),
                            setCung2('Tiki Tradding'),
                            setGia('1.790.000 đ'),
                            setMau('Màu: '),
                            setMau2('trắng')
                    }}
                    style={{ flex: 1, backgroundColor: '#C5F1FB', height: '80px', width: '85px', alignSelf: 'center' }}>
                </TouchableOpacity>


                <View style={{ flex: 0.2 }}></View>
                <TouchableOpacity
                    onPress={() => {
                        setImage(require('./assets/joy3red.jpg')),
                            setCung('Cung cấp bởi '),
                            setCung2('Tiki Tradding'),
                            setGia('1.790.000 đ'),
                            setMau('Màu: '),
                            setMau2('đỏ')
                    }}
                    style={{ flex: 1, backgroundColor: '#F30D0D', height: '80px', width: '85px', alignSelf: 'center' }}>
                </TouchableOpacity>

                <View style={{ flex: 0.2 }}></View>
                <TouchableOpacity
                    onPress={() => {
                        setImage(require('./assets/joy3black.jpg')),
                            setCung('Cung cấp bởi '),
                            setCung2('Tiki Tradding'),
                            setGia('1.790.000 đ'),
                            setMau('Màu: '),
                            setMau2('đen')
                    }}
                    style={{ flex: 1, backgroundColor: '#000000', height: '80px', width: '85px', alignSelf: 'center' }}>
                </TouchableOpacity>

                <View style={{ flex: 0.2 }}></View>
                <TouchableOpacity
                    onPress={() => {
                        setImage(require('./assets/joy3blue.jpg')),
                            setCung('Cung cấp bởi '),
                            setCung2('Tiki Tradding'),
                            setGia('1.790.000 đ'),
                            setMau('Màu: '),
                            setMau2('xanh')
                    }}
                    style={{ flex: 1, backgroundColor: '#234896', height: '80px', width: '85px', alignSelf: 'center' }}>
                </TouchableOpacity>

                <View style={{ flex: 1 }}></View>
                <View style={{
                    flex: 1, paddingLeft: '5%',
                    paddingRight: '5%'
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("screen01")}
                        style={{
                            flex: 1, justifyContent: 'center',
                            alignContent: 'center', backgroundColor: '#1952E294',
                            borderColor: '#CA1536', borderRadius: 10,
                        }}>
                        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>XONG</Text>
                    </TouchableOpacity>


                </View>


            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
