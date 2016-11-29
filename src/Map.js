import React from 'react';
import request from './request';
import GoogleMutant from './GoogleMutant'
import {Map as LeafletMap} from 'react-leaflet'
import Drivers from './Drivers'
import Deliveries from './Deliveries'

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {drivers: [], deliveries: []};
    }

    componentWillMount() {
        request('drivers').then(drivers =>
            this.setState({drivers: drivers.data})
        );
        request('deliveries').then(deliveries =>
            this.setState({deliveries: deliveries.data})
        );
    }

    render() {
        let position = [51.505, -0.09];
        if (this.state.drivers[0]) {
            position = [
                this.state.drivers[0].coordinates.latitude,
                this.state.drivers[0].coordinates.longitude
            ]
        }
        return (
            <LeafletMap center={position} zoom={13}>
                <GoogleMutant/>
                <Drivers drivers={this.state.drivers}/>
                <Deliveries deliveries={this.state.deliveries}/>
            </LeafletMap>
        );
    }
}