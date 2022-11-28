import { LatLng } from 'react-native-maps'

export interface IMark {
    id: string,
    title: string,
    desc: string,
    lat: number,
    long: number,
    createdAt: number
}