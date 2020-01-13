import React from 'react';
import {Route, Switch} from "react-router-dom";
import Counter from "./containers/Counter";

const App = () => (
      <Switch>
        <Route path="/counter" exact component={Counter}/>
      </Switch>
);

export default App;
