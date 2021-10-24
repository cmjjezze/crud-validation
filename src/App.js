import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import ViewContact from "./components/contacts/ViewContact";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contacts/add" component={AddContact} />
          <Route exact path="/contacts/edit/:id" component={EditContact} />
          <Route exact path="/contacts/:id" component={ViewContact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
