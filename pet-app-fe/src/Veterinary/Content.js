import * as LocationApi from "../api/Location"
import List from "./List"
import Map from "./Map"
import React from "react"
class Content extends React.Component {
    state = {
        locations: []
    }
    componentDidMount() {
        LocationApi.getLocations().then(response => this.setState({ locations: response }));
    }

    render() {
        console.log(this.state.locations)
        return (
            <div className="content">
                <List locations={this.state.locations} />
                <Map
                    locations={this.state.locations}

                />
            </div>
        )
    }
}
export default Content;