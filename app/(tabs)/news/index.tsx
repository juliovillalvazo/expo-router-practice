import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
    return (
        <View>
            <Link href='/(tabs)/news/42' asChild replace>
                <Button title='Go to news 42' />
            </Link>
            <Link href='/(tabs)/news/134' asChild replace>
                <Button title='Go to news 134' />
            </Link>
        </View>
    );
};

export default index;
