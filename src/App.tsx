import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";

const Home = lazy(() => import('./Home'));
const Admin = lazy(() => import('./Admin/Admin'));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div style={{ color: 'white' }}>The Revolution Will Not Be Televised</div>}>
      <Navbar bg="dark" sticky="top" variant="dark" className="justify-content-center navbar-border" style={{ borderBottom: "1px solid #282c34" }}>
          <Navbar.Brand href="#">
              {process.env.REACT_APP_APPLICATION_NAME}
          </Navbar.Brand>
      </Navbar>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
