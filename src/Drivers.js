import React from 'react';
import { CircleMarker, Popup } from 'react-leaflet'

export default class Drivers extends React.Component {
    render(){
        return <div>{this.props.drivers.map(driver => this.renderMarker(driver))}</div>;
    }

    renderMarker(driver){
        return (
            <CircleMarker key={driver.id} center={[driver.coordinates.latitude, driver.coordinates.longitude]} radius={5} fillOpacity={1} opacity={0.5} weight={1}>
                <Popup>
                    <span>{driver.first_name}</span>
                </Popup>
            </CircleMarker>
        )
    }
}