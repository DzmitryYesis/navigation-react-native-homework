import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import {TabPage} from './src/components/TabPage/TabPage';
import LoginPage from './src/components/LoginPage/LoginPage';

export default function App() {

    const [login, setLogin] = useState('')
    //const [test, setTest] = useState('')

    if (login==='Hello'){
        return <TabPage/>
    }

    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        {/*<TextInput style={{backgroundColor: '#715c5c', width: 200, height: 40}} value={test} onChangeText={setTest}/>*/}
        {/*    <View>*/}
        {/*        <Text>{test}</Text>*/}
        {/*    </View>*/}
        <LoginPage setLogin={setLogin}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
