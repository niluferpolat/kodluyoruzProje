import { BrowserRouter as Router, Switch } from "react-router-dom"
import React from "react"
import Sidebar from "./Sidebar"
import Navbar from "../components/Navbar"
import addArticle from "../blog/addArticle";


function AdminDashboard() {
    return (
        <div>
            <Navbar />
            <Sidebar />
        </div>


    )
}
export default AdminDashboard;