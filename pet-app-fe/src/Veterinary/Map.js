

/*const addMarkers = (locations, map) => {
    let position;
    for (let i = 0; i < locations.length; i++) {
        position = {
            lat: locations[i].venue.location.lat,
            lng: locations[i].venue.location.lng
        }
    }
    map.setCenter(position)
    const marker = new window.H.map.Marker(position);
    map.addObject(marker);
    apikey: ""
     center: ,
}*/


import * as React from 'react';

class Map extends React.Component {
    mapRef = React.createRef();

    state = {
        // The map instance to use during cleanup
        map: null
    };

    componentDidMount() {

        const H = window.H;
        const platform = new H.service.Platform({
            apikey: "HwZ27WPyDArOX3J7UvPP5aAbVfCP2hNe7UU0fRBZpwk"
        });

        const defaultLayers = platform.createDefaultLayers();

        // Create an instance of the map
        const map = new H.Map(
            this.mapRef.current,
            defaultLayers.vector.normal.map,
            {
                // This map is centered over Europe
                center: { lat: 41.1558, lng: 27.8 },
                zoom: 12,
                pixelRatio: window.devicePixelRatio || 1
            }
        );

        this.setState({ map });
    }

    componentWillUnmount() {
        // Cleanup after the map to avoid memory leaks when this component exits the page
        this.state.map.dispose();
    }

    render() {
        return (
            // Set a height on the map so it will display
            <div ref={this.mapRef} style={{ height: "500px" }} />
        );
    }
}
export default Map;