import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { App } from "./components/app/app";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./services/reducers/index";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { wsFeedMiddleware } from "./services/middleware/ws-feed-middleware";
import { wsOrdersMiddleware } from "./services/middleware/ws-orders-middleware";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, wsFeedMiddleware(), wsOrdersMiddleware())
);

const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
