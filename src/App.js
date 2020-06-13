import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { PublicRoute, PrivateRoute } from "./components/routes";

function App() {
  return (
    <>
      <Switch>
        {/* just passing multiple paths for the home page */}
        <PrivateRoute component={Home} path='/' exact />
        <PublicRoute restricted={false} component={Login} path='/login' exact /> 
        <PublicRoute restricted={true} component={Register} path='/register' exact />
      </Switch>
    </>
  );
}

export default App;
