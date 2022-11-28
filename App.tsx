import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, Text } from 'react-native'
import AppNavigator from './navigation/AppNavigator'

export default function App() {
    return (
        <>
            <AppNavigator />
        </>
    )
}
