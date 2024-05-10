import {
    Stack,
    useGlobalSearchParams,
    useLocalSearchParams,
} from 'expo-router';

const StackLayout = () => {
    const { id } = useGlobalSearchParams();
    return (
        <Stack>
            <Stack.Screen name='index' />
            <Stack.Screen name='profile' />
            <Stack.Screen name='feed' />
            <Stack.Screen
                name='details/[id]'
                options={{ headerTitle: `Details/${id}` }}
            />
            <Stack.Screen name='drawer' options={{ headerShown: false }} />
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
        </Stack>
    );
};

export default StackLayout;
