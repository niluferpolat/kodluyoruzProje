import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import NotFound from './components/NotFound';
import Blog from './blog/blog';
import Home from './Home/Home';
import HomePage from './HomePage/HomePage';
import Register from './components/Register';
import './components/Navbar/Navbar.css';
import Navbar from './components/Navbar';
import Map from './Veterinary/Map'
import AdminDashboard from './components/admindashboard';
import PostDetails from './blog/postdetails';
import Adoption from './adopt/Adoption';
import AdoptionDetails from './adopt/AdoptionDetails';
import addAdopt from './User/AddNewAdopt';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route exact path="/signin" component={Login}></Route>
				<Route exact path="/posts" component={Blog}></Route>
				<Route exact path="/posts/:id" component={PostDetails}></Route>
				<Route exact path="/signup" component={Register}></Route>
				<Route exact path="/adoption" component={Adoption}></Route>
				<Route exact path="/admin/dashboard" component={AdminDashboard}></Route>
				<Route exact path="/adoption/addAdopt" component={addAdopt}></Route>
				<Route exact path="/adoption/:id" component={AdoptionDetails}></Route>
				<Route exact path="/home" component={Home}></Route>
				<Route exact path="/map" component={Map}></Route>
				<Route exact component={NotFound}></Route>
			</Switch>
		</Router>
	);
}

export default App;
