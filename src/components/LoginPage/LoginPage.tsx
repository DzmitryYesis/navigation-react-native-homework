import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';

type LoginProps = {
    setLogin: (title: string) => void
}

const LoginPage = (props: LoginProps) => {

    const [login2, setLogin2] = useState('')


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>For test write 'Hello'</Text>
            <TextInput style={{backgroundColor: '#715c5c', width: 200, height: 40}}
                       value={login2} onChangeText={setLogin2}/>
            <Button title={'Login'} onPress={() => props.setLogin(login2)}/>
            <StatusBar style="auto"/>
        </View>
    );
};

export default LoginPage;