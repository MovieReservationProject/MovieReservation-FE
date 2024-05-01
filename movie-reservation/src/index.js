import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Reservation from "./pages/Reservation/Reservation";
import store from "./store/index";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* <Reservation></Reservation> */}
    {/* </React.StrictMode> */}
  </Provider>
);

reportWebVitals();
