import React, {Component} from 'react';
import './App.css';
require("leaflet/dist/leaflet.css")
import Map from './Map'

class App extends Component {
    render() {
        return (
            <Map/>
        );
    }
}

export default App;
