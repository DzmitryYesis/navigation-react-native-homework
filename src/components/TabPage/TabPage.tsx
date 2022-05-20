import React from 'react';
import {Button, Text, View} from 'react-native';

type TabPageTypeProps = {
    setLogin:(title:string)=>void
}

export const TabPage = (props: TabPageTypeProps) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Tab Page</Text>
            <Button title={'Back to Login'} onPress={() => props.setLogin('')}/>
        </View>
    )
};