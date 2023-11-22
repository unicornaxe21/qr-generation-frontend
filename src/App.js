import "./App.css";
import React from "react";
import { ClientForm } from "./pages/ClientForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PdfDowloading } from "./pages/PdfDowloading";
import { ThankYouPage } from "./pages/ThankYouPage";
import { PageNotFound } from "./pages/PageNotFound";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={ClientForm} />
        <Route exact path={"/downloading"} component={PdfDowloading} />
        <Route exact path={"/thank_you"} component={ThankYouPage} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
