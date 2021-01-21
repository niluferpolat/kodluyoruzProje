
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header"
import Register from "./components/Register"
import Login from "./components/login"
import NotFound from "./components/NotFound"
import Home from "./components/Home"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signup" component={Register}></Route>
          <Route exact path="/signin" component={Login}></Route>
          <Route exact component={NotFound}></Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
