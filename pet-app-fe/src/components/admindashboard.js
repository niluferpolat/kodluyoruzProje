import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import React from "react"
import Sidebar from "./Sidebar"
import addArticle from "../blog/addArticle";


function AdminDashboard() {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route exact path="/add_article" component={addArticle}></Route>
            </Switch>
        </Router>



    )
}
export default AdminDashboard;