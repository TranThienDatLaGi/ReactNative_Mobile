import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
    return (
        <View style={styles.container} >
            <View style={{ flex: 2 }}></View>
            <Text style={{
                flex: 1,
                fontSize: 35,
                fontFamily: 'Arial',
                fontWeight: 'bold'
            }}>LOGIN</Text>
            <View style={{ flex: 2 }}></View>

            <View style={{ flex: 1.5, flexDirection: 'row', borderRadius: 5, borderWidth: 2, borderColor: '#fcfaf2' }}>
                <Image
                    style={{ marginLeft: 10, height: 30, width: 30, alignSelf: 'center' }}
                    source={require('./assets/userblack.png')}></Image>
                <TextInput
                    style={{ flex: 1, padding: 9 }}
                    placeholder='Name'></TextInput>
            </View>
            <View style={{ flex: 0.6 }}></View>
            <View style={{ flex: 1.5, flexDirection: 'row', borderRadius: 7, borderWidth: 1.5, borderColor: '#fcfaf2' }}>
                <Image
                    style={{ marginLeft: 10, height: 30, width: 30, alignSelf: 'center' }}
                    source={require('./assets/padlock.png')}></Image>
                <TextInput
                    style={{ flex: 1, padding: 9 }}
                    placeholder='Password'></TextInput>
                <Image
                    style={{ marginRight: 20, height: 40, width: 40, alignSelf: 'center' }}
                    source={require('./assets/eyelock.png')}></Image>
            </View>

            <View style={{ flex: 1 }}></View>
            <TouchableOpacity
                style={{ flex: 1.5, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderRadius: 3 }}>
                <Text
                    style={{ color: 'white', fontWeight: 'bold', fontSize: 20, fontFamily: 'Arial', }}
                >LOGIN</Text>
            </TouchableOpacity>
            <View style={{ flex: 1 }}></View>
            <Text
                style={{ flex: 1, fontWeight: 'bold', textAlign: 'center', fontSize: 18, fontFamily: 'Arial', }}
            >FORGOT YOUR PASSWORD</Text>
            <View style={{ flex: 4 }}></View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #FBCB00, #BF9A00)',
        paddingLeft: '5%',
        paddingRight: '5%',
    },

});
