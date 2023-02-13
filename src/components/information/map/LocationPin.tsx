// @ts-ignore
import { Icon } from '@iconify/react'
// @ts-ignore
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = () => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">Bosanska 2, Fojnica 71270</p>
    </div>
)

export default LocationPin;