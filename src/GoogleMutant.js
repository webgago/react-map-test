import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.gridlayer.googlemutant';

export default class GoogleMutant extends MapLayer {
    componentWillMount() {
        super.componentWillMount();
        const {map} = this.props;

        this.leafletElement = L.gridLayer.googleMutant({
            type: 'roadmap'
        }).addTo(map);
    }

    render() {
        return null;
    }
}