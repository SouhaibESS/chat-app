import React from "react";
import { Switch } from "react-router-dom";
import { Home, ContactsPage, Login, Register } from "./pages";
import { PublicRoute, PrivateRoute } from "./components/routes";

function App() {
  return (
    <>
      <Switch>
        {/* just passing multiple paths for the home page */}
        <PublicRoute component={Home} path="/" exact />
        <PublicRoute component={ContactsPage} path="/contacts" />
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PublicRoute
          restricted={true}
          component={Register}
          path="/register"
          exact
        />
      </Switch>
    </>
  );
}

export default App;
