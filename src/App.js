import React from 'react';
import {Route, Switch} from "react-router-dom";
import Counter from "./containers/Counter";
import {Container} from "reactstrap";
import Tasks from "./containers/Tasks";

const App = () => (
    <Container>
        <Switch>
            <Route path="/" exact component={Tasks}/>
            <Route path="/counter" exact component={Counter}/>
        </Switch>
    </Container>
);

export default App;
