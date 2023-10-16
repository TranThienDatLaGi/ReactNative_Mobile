import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Touchable } from 'react-native-web';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1.5,
                flexDirection: 'row'
            }}>
                <Image style={{
                    flex: 1,
                    width: 60,
                    height: 60,
                    alignItems: 'center'
                }}
                    source={require('./assets/USB.png')}></Image>
                <View style={{ flex: 0.3 }}></View>
                <Text style={{
                    flex: 4,
                    fontWeight: 'bold',
                    fontSize: 16
                }}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa Bluetooth</Text>
            </View>
            <View style={{ flex: 0.2 }}></View>
            <Text style={{
                flex: 0.5,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20
            }}>Cực kỳ hài lòng</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.2 }}></View>
                <Image style={{
                    flex: 0.6,
                    width: 300,
                    height: 30,
                }} source={require('./assets/rating.png')}
                ></Image>
            </View>
            <TouchableOpacity style={{
                flex: 0.8,
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 5,
                borderBlockColor: 'Blue'
            }}>
                <View style={{ flex: 0.2 }}></View>
                <Image style={{
                    flex: 0.25,
                    alignItems: 'center'
                }} source={require('./assets/photo-camera.png')}></Image>
                <Text style={{
                    flex: 1,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 18
                }}> Thêm hình ảnh</Text>
            </TouchableOpacity>
            <View style={{ flex: 0.2 }}></View>
            <TextInput style={{
                flex: 3,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: 'gray',
                padding: 10,
                fontSize: 15,
            }}
                placeholder="Hãy chỉa sẻ những điều mà bạn thích và sản phẩm"
            ></TextInput>
            <View style={{ flex: 0.2 }}></View>
            <TouchableOpacity style={{
                flex: 0.5,
                backgroundColor: 'blue',
                borderRadius: 5,
                borderWidth: 1
            }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Gửi</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
});
