import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
import Login from "./Login/Login";
import Home from './Home';
import Dashboard from './Dashboard/DashBoard';
import PrivateRoute from './PrivateRoute';
import Error404  from "./Error404";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard}  ></PrivateRoute>
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
