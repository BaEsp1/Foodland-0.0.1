import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
//import {store} from './redux/store'

/* NUEVO STORE*/
import { store2 } from "./redux/store2";

import { BrowserRouter } from "react-router-dom";

//React V17
ReactDOM.render(
  <Provider store={store2}>
    <Auth0Provider
      domain="dev-7azhwajhv4hw38nz.us.auth0.com"
      clientId="e3gB8LMAjd1Klyt5asWWQTY5xPBSu07g"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
