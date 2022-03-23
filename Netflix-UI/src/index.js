import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Admin/context/authContext/AuthContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
