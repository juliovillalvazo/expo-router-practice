import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{ href: null }} />
            <Tabs.Screen
                name='news'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='newspaper' color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='tab1'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='alarm' color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name='tab2'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='stop-circle'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
