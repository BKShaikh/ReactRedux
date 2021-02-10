import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
import MyRoute from './MyRoute';

function App() {
  return (
    <Router>
      <MyRoute />
    </Router>
  );
}

export default App;
