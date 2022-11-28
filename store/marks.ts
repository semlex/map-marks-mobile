import AsyncStorage from '@react-native-async-storage/async-storage'
import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import { IMark } from '../utils/types'
import { LatLng } from 'react-native-maps'
import uuid from 'react-native-uuid'

interface INewMark {
    title: string,
    desc: string,
    lat: number,
    long: number
}

class Marks {
    marksList: IMark[] = []

    constructor() {
        makeAutoObservable(this)
        makePersistable(this, {
            name: 'Marks',
            properties: ['marksList'],
            storage: AsyncStorage
        })
    }

    addMark (newMark: INewMark) {
        this.marksList.push({
            id: uuid.v4().toString(),
            ...newMark,
            createdAt: Date.now()
        })
    }

    removeMark (id: string) {
        this.marksList = this.marksList.filter(mark => mark.id !== id)
    }

    removeAll () {
        this.marksList = []
    }
}

export default new Marks()