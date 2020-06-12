import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path={"/" | "/home"} />
        <Route path="/login" />
        <Route path="/register" />
      </Switch>
    </>
  );
}

export default App;
