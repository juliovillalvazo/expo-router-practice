import { View, Text, Button } from 'react-native';
import React from 'react';
import { Stack, useNavigation } from 'expo-router';

const modal = () => {
    const navigation = useNavigation();
    const isPresented = navigation.canGoBack();

    return (
        <View>
            {isPresented ? (
                <Stack.Screen
                    options={{
                        headerLeft: () => (
                            <Button
                                title='close'
                                onPress={() => navigation.goBack()}
                                color='#000'
                            />
                        ),
                    }}
                />
            ) : null}
            <Text>modal</Text>
        </View>
    );
};

export default modal;
