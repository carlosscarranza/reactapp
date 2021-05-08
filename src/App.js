import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes/index";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "10px", width: "10%", background: "#f0f0f0" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><Link to="/example1">example1</Link></li>
            <li><Link to="/example2">example2</Link></li>
            <li><Link to="/example3">example3</Link></li>
          </ul>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
