import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MyConText } from './App'
import { useContext } from 'react';
export default function App() {
    const { image, setImage } = useContext(MyConText)
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.5 }}></View>
            <View style={{ flex: 8 }}>
                <Image style={{ flex: 1, height: 361, width: 301, alignSelf: 'center' }}
                    source={image}></Image>
            </View>
            <View style={{ flex: 0.3 }}></View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 17, fontWeight: '400' }}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>
            <View style={{ flex: 0.8, flexDirection: 'row' }}>
                <Image style={{ flex: 1, height: 25, width: 310 }}
                    source={require('./assets/5stars.png')}></Image>
                <View style={{ flex: 0.1 }}></View>
                <a style={{ flex: 1, fontSize: 17, textAlign: 'center', alignSelf: 'center' }}>(Xem 828 đánh giá)</a>
            </View>
            <View style={{ flex: 0.1 }}></View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ flex: 1, color: 'black', fontSize: 20, fontWeight: '800', textAlign: 'center', fontFamily: 'Arial', alignSelf: 'center' }}>1.790.000 đ</Text>
                <View style={{ flex: 0.2 }}></View>
                <Text style={{ flex: 1, color: 'gray', fontSize: 17, fontWeight: '800', textAlign: 'center', fontFamily: 'Arial', alignSelf: 'center' }}><del>1.790.000 đ</del></Text>
                <View style={{ flex: 0.5 }}></View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ flex: 1, fontWeight: '900', color: 'red' }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN  </Text>
            </View>
            <View style={{ flex: 1, paddingLeft: '2%', paddingRight: '2%' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('screen02')}
                    style={{ flex: 1, flexDirection: 'row', borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                    <View style={{ flex: 0.2 }}></View>
                    <Text style={{ flex: 1, color: 'black', fontFamily: 'Arial', fontSize: 15, fontWeight: '400', textAlign: 'center' }}>4 MÀU-CHỌN MÀU</Text>
                    <View style={{ flex: 0.2 }}></View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1.5 }}></View>
            <View style={{ flex: 1, paddingLeft: '2%', paddingRight: '2%' }}>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: '#CA1536', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontFamily: 'Arial', fontSize: 20, fontWeight: 'bold' }}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
});
