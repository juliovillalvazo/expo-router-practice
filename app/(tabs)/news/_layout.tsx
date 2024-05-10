import { Stack, useGlobalSearchParams } from 'expo-router';

const NewsStack = () => {
    const { id } = useGlobalSearchParams();
    return (
        <Stack>
            <Stack.Screen
                name='[id]'
                options={{
                    headerTitle: `News ${id}`,
                }}
            />
            <Stack.Screen
                name='index'
                options={{
                    headerTitle: 'News Feed',
                }}
            />
        </Stack>
    );
};

export default NewsStack;
