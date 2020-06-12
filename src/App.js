import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Login, Register } from "./pages";
function App() {
  return (
    <>
      <Switch>
        {/* just passing multiple paths for the home page */}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
