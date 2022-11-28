import { FC, Fragment } from 'react'
import { observer } from 'mobx-react-lite'
import MapView, { Marker } from 'react-native-maps'
import marks from '../store/marks'

const MarksMap: FC = observer(() => {
    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: 59.942,
                longitude: 30.315,
                latitudeDelta: 0.5,
                longitudeDelta: 0.5
            }}
        >
            {marks.marksList.map((mark) => (
                <Fragment key={mark.id}>
                    <Marker
                        title={mark.title}
                        description={mark.desc}
                        coordinate={{latitude: mark.lat || 59, longitude: mark.long || 30}}
                    />
                </Fragment>
            ))}
        </MapView>
    )
})

export default MarksMap