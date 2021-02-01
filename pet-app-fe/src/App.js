import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login"
import NotFound from "./components/NotFound"
import Blog from "./blog/blog"
import Home from "./components/Home"
import Register from "./components/Register"
import "./components/Navbar/Navbar.css"
import Navbar from "./components/Navbar"
import AdminDashboard from "./components/admindashboard";
import UserDashboard from "./components/User/userdashboard";
import PostDetails from "./blog/postdetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signin" component={Login}></Route>
        <Route exact path="/posts" component={Blog}></Route>
        <Route exact path="/posts/:id" component={PostDetails}></Route>
        <Route exact path="/signup" component={Register}></Route>
        <Route exact path="/admin/dashboard" component={AdminDashboard}></Route>
        <Route exact path="/user/dashboard" component={UserDashboard}></Route>
        <Route exact component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
