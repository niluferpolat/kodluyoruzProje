import React from "react"
import Content from "./Content"
import Navbar from "../components/Navbar"
import * as LocationApi from "../api/Location"

export default class Veterinary extends React.Component {


    render() {

        return (
            <div>
                <Navbar />
                <Content />
            </div>);
    }
}