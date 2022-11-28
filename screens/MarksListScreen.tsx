import { FC } from 'react'
import { View, Button } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'
import { globalStyle } from '../utils/styles'
import ScreenTitle from '../components/ScreenTitle'
import MarksList from '../components/MarksList'

const MarksListScreen: FC<BottomTabBarProps> = () => {
    return (
        <View style={globalStyle.container}>
            <ScreenTitle text={'Список всех точек'}/>
            <MarksList />
        </View>
    )
}

export default MarksListScreen