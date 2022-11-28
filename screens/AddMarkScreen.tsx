import { FC } from 'react'
import { View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'
import { globalStyle } from '../utils/styles'
import ScreenTitle from '../components/ScreenTitle'
import AddMarkForm from '../components/AddMarkForm'

const AddMarkScreen: FC<BottomTabBarProps> = () => {
    return (
        <View style={globalStyle.container}>
            <ScreenTitle text="Добавить новую точку" />
            <AddMarkForm />
        </View>
    )
}

export default AddMarkScreen