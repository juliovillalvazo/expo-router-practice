import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
    return (
        <View style={style.container}>
            <Text>index</Text>
            <Link href='/profile' asChild>
                <Button title='Go To Profile' />
            </Link>
            <Link href='/feed' asChild>
                <Button title='Go To Feed' />
            </Link>
            <Link href='/details/2' asChild>
                <Button title='Go To Details2' />
            </Link>
            <Link href='/details/3' asChild>
                <Button title='Go To Details3' />
            </Link>
            <Link href='/drawer/profile' asChild replace>
                <Button title='Open drawer' />
            </Link>
            <Link href='/(tabs)' asChild replace>
                <Button title='Open screen with tabs' />
            </Link>
            <Link href='/modal' asChild push>
                <Button title='Open modal' />
            </Link>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default index;
