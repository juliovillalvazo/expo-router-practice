import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

const DrawerContent = (props: DrawerContentComponentProps) => {
    const router = useRouter();
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label='close' onPress={router.back} />
        </DrawerContentScrollView>
    );
};

const DrawerLayout = () => {
    return <Drawer drawerContent={DrawerContent} />;
};

export default DrawerLayout;
