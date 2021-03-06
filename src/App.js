import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About } from "./pages/About";
import { Index } from "./pages/Home";

import { UserContext } from "./UserContext";
const App = () => {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ value: user, setValue: setUser }), [
    user,
    setUser
  ]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default App;
