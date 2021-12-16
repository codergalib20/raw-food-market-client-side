import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import About from "./Pages/About/About";
import ResponsiveDrawer from "./Pages/Dashboard/ResponsiveDrawer";
import Foods from "./Pages/Foods/Foods";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/Login/LoginPage";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import OrderHere from "./Shared/OrderHere";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/foods" component={Foods} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/food/:id">
            <OrderHere />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <ResponsiveDrawer />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
