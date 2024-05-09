import { View, Text, Button } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

const details = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    return (
        <View>
            <Text>My id: {id}</Text>
            <Button
                title='update params'
                onPress={() => router.setParams({ id: '1234' })}
            />
        </View>
    );
};

export default details;
