import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { CookiesProvider } from "react-cookie";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  // eslint-disable-next-line no-undef
  <GoogleOAuthProvider clientId="717858955413-3i9ffvcbu6otdmqogt97rlc4d7k05e43.apps.googleusercontent.com">
    <CookiesProvider>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </CookiesProvider>
  </GoogleOAuthProvider>
);
