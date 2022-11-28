import { FC, ReactChild, ReactNode  } from 'react'
import { Text } from 'react-native'
import { globalStyle } from '../utils/styles'

interface IProps {
    text: string
}

const ScreenTitle: FC<IProps> = ({ text }) => {
    return (
        <Text style={globalStyle.title}>
            {text}
        </Text>
    )
}

export default ScreenTitle