import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const tab2 = () => {
    const router = useRouter();
    return (
        <View>
            <Text>tab2</Text>
            <Button
                title='reset navigation'
                onPress={() => router.replace('/')}
            />
        </View>
    );
};

export default tab2;
