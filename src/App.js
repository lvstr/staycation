import Checkout from "pages/Checkout";
import DetailsPage from "pages/DetailsPage";
import Example from "pages/Example";
import LandingPage from "pages/LandingPage";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route exact path="/example" component={Example} />
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
