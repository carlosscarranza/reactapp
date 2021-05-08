import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes/index";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "10px", width: "10%", background: "#f0f0f0" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {routes.map((route, index) => (
              <li>
                <Link to={route.path}>Example {index + 1}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
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
