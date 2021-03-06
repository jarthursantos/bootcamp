import React from "react";
import "./config/ReactotronConfig";

import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import Header from "./components/Header";

import GlobalStyle from "./styles/global";
import history from "./services/history";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
      </Router>
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}

export default App;
