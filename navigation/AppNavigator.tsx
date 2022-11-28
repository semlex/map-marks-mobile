import { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Feather, Ionicons } from '@expo/vector-icons'

import MapScreen from '../screens/MapScreen'
import AddMarkScreen from '../screens/AddMarkScreen'
import MarksListScreen from '../screens/MarksListScreen'
import { Provider } from 'react-native-paper'
import { ToastContainer } from '@jamsch/react-native-toastify'

const Tabs = createBottomTabNavigator()

const AppNavigator: FC = () => {
    return (
        <NavigationContainer>
            <Provider>
                <ToastContainer
                    position={"bottom-right"}
                    duration={0.25}
                    style={{marginBottom: '35%'}}
                />
                <Tabs.Navigator
                    initialRouteName="Map"
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerTintColor: '#fff',
                        headerStyle: { backgroundColor: '#525252' },
                        tabBarShowLabel: false,
                        tabBarStyle: { height: 60 }
                    }}
                >
                    <Tabs.Screen
                        name="Map"
                        component={MapScreen}
                        options={{
                            title: 'Карта',
                            tabBarIcon: (tabInfo) => (
                                <Feather
                                    name="map"
                                    size={24}
                                    color={tabInfo.focused ? 'black' : '#ababab'}
                                />
                            )
                        }}
                    />
                    <Tabs.Screen
                        name="AddMark"
                        component={AddMarkScreen}
                        options={{
                            title: 'Добавить точку',
                            tabBarIcon: (tabInfo) => (
                                <Feather
                                    name="plus-circle"
                                    size={25}
                                    color={tabInfo.focused ? 'black' : '#ababab'}
                                />
                            )
                        }}
                    />
                    <Tabs.Screen
                        name="MarksList"
                        component={MarksListScreen}
                        options={{
                            title: 'Список точек',
                            tabBarIcon: (tabInfo) => (
                                <Ionicons
                                    name="list"
                                    size={25}
                                    color={tabInfo.focused ? 'black' : '#ababab'}
                                />
                            )
                        }}
                    />
                </Tabs.Navigator>
            </Provider>
        </NavigationContainer>
    )
}

export default AppNavigator