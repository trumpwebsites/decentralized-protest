import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(() => import('./Home'));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>The Revolution Will Not Be Televised</div>}>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
