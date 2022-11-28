import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { View, FlatList, ScrollView, Text, Pressable, Alert, StyleSheet } from 'react-native'
import moment from 'moment'
import marks from '../store/marks'
import { MaterialIcons } from '@expo/vector-icons'

const MarksList: FC = observer(() => {
    const showConfirmDialog = (markId: string) => {
        return Alert.alert(
            'Удаление',
            'Вы уверены что хотите удалить точку?',
            [
                {
                    text: 'Да',
                    onPress: () => {
                        marks.removeMark(markId)
                    }
                },
                {
                    text: 'Нет'
                }
            ]
        )
    }

    return (
        <>
            {marks.marksList.length > 0 &&
               <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
                   {marks.marksList.map((mark) => (
                       <View key={mark.id} style={styles.markItem}>
                           <View style={styles.deleteButtonWrapper}>
                               <Pressable
                                   android_ripple={{color: '#858585'}}
                                   style={styles.deleteButton}
                                   onPress={() => showConfirmDialog(mark.id)}
                               >
                                   <MaterialIcons name="delete" size={20} color="white" />
                               </Pressable>
                           </View>
                           <Text style={styles.infoTitle}>
                               Название
                           </Text>
                           <Text style={styles.infoText}>
                               {mark.title}
                           </Text>
                           <Text style={styles.infoTitle}>
                               Описание
                           </Text>
                           <Text style={styles.infoText}>
                               {mark.desc}
                           </Text>
                           <Text style={styles.infoTitle}>
                               Дата и время создания
                           </Text>
                           <Text style={styles.infoText}>
                               {moment(mark.createdAt).format('DD.MM.YYYY HH:mm')}
                           </Text>
                           <Text style={styles.infoTitle}>
                               Координаты
                           </Text>
                           <Text style={styles.infoText}>
                               {mark.lat}, {mark.long}
                           </Text>
                       </View>
                   ))}
               </ScrollView>
            }
            {marks.marksList.length === 0 &&
               <View style={styles.noMarks}>
                  <Text style={styles.noMarksText}>
                     Точек нет
                  </Text>
               </View>
            }
        </>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    markItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    deleteButtonWrapper : {
        position: 'absolute',
        top: 15,
        right: 20,
        borderRadius: 7,
        overflow: 'hidden',
        backgroundColor: '#ff0000'
    },
    deleteButton: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5
    },
    infoText: {
        fontSize: 16,
        marginVertical: 5,
        paddingLeft: 8
    },
    noMarks: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noMarksText: {
        fontSize: 24,
        color: '#595959'
    }
})

export default MarksList