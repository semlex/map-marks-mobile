import { FC, useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import { globalStyle } from '../utils/styles'
import MapView from 'react-native-maps'
import { Marker, LatLng, MapEvent  } from 'react-native-maps'
import { toast } from '@jamsch/react-native-toastify'
import marks from '../store/marks'

const AddMarkForm: FC = () => {
    const [title, setTitle] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [coords, setCoords] = useState<LatLng>({
        latitude: 59.942,
        longitude: 30.315
    })

    const handlePress = () => {
        if (!title || !desc) {
            if (!title) {
                toast.warn('Введите название точки')
            }
            if (!desc) {
                toast.warn('Введите описание точки')
            }
        } else {
            marks.addMark({
                title,
                desc,
                lat: coords.latitude,
                long: coords.longitude
            })

            setTitle('')
            setDesc('')

            toast.success('Точка успешно добавлена!')
        }
    }

    return (
        <View style={globalStyle.wrapper}>
            <Text style={styles.label}>
                Название
            </Text>
            <TextInput
                value={title}
                style={styles.input}
                selectionColor={'black'}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>
                Описание
            </Text>
            <TextInput
                value={desc}
                style={styles.input}
                selectionColor={'black'}
                onChangeText={(text) => setDesc(text)}
            />
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 59.942,
                    longitude: 30.315,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5
                }}
                onRegionChange={(region) => setCoords({
                    latitude: region.latitude,
                    longitude: region.longitude
                })}
            >
                <Marker
                    coordinate={coords}
                />
            </MapView>
            <View style={styles.buttonWrapper}>
                <Pressable
                    android_ripple={{color: '#858585'}}
                    style={styles.button}
                    onPress={handlePress}
                >
                    <Text style={styles.buttonText}>
                        Сохранить
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        lineHeight: 18
    },
    input: {
        fontSize: 15,
        marginVertical: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    button: {
        paddingVertical: 10,
        backgroundColor: '#525252'
    },
    buttonWrapper: {
        marginTop: 15,
        borderRadius: 10,
        overflow: 'hidden'
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    }
})

export default AddMarkForm