import React, { useEffect } from "react";
import "./App.scss";
import Landing from "./container/Landing/Landing";
import { Route, Switch, useLocation } from "wouter";
import NotFound from "./pages/404/NotFound";
import RegSuccess from "./pages/Success/RegSuccess";
import NewsletterSuccess from "./pages/Success/NewsletterSuccess";
import ServerError from "./pages/404/ServerError";

const App = () => {
    
  return (
    <div className="app">
      <Switch >
        <Route path="/" component={Landing} />
        {/* <Route path="/terms-of-use" component={TermsAndConditions} /> */}
        {/* <Route path="/privacy-policy" component={PrivacyPolicy} /> */}
        <Route path="/reg-success" component={RegSuccess} />
        <Route path="/newsletter-success" component={NewsletterSuccess} />
        <Route path="/server-error" component={ServerError} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
};

export default App;
