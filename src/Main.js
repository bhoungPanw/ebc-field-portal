import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/Home/Home";
import BriefingTopics from "./containers/BriefingTopics/BriefingTopics";
import BriefingDocuments from "./containers/BriefingDocuments/BriefingDocuments";
import Directions from "./containers/Directions/Directions";
import Concierge from "./containers/Concierge/Concierge";
import Contact from "./containers/Contact/Contact";

const Main = () => {
  return (
    <main>
      <Switch>
        <Redirect from="/" exact to="/ebc/home" component={Home} />
        <Route exact path="/:id/briefing-topics" component={BriefingTopics} />
        <Route exact path="/:id/home" component={Home} />
        <Route
          exact
          path="/:id/briefing-documents"
          component={BriefingDocuments}
        />
        <Route exact path="/:id/directions" component={Directions} />
        <Route exact path="/:id/concierge" component={Concierge} />
        <Route exact path="/:id/contact" component={Contact} />
      </Switch>
    </main>
  );
};

export default Main;
