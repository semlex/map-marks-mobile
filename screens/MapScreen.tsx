import { FC } from 'react'
import { View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'
import { globalStyle } from '../utils/styles'
import MarksMap from '../components/MarksMap'
import ScreenTitle from '../components/ScreenTitle'

const MapScreen: FC<BottomTabBarProps> = () => {
    return (
        <View style={globalStyle.container}>
            <ScreenTitle text="Все точки на карте" />
            <MarksMap />
        </View>
    )
}

export default MapScreen