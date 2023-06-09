import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
// import "react-toastify/dist/ReactToastify.css";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
import rootReducer from "redux/store/store";
import ToastContainerConfig from "components/toast/ToastContainer";
import { HelmetProvider } from "react-helmet-async";

const composeEnhancers =
  (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const container = document.getElementById("app");
const root = createRoot(container);
const store = createStore(rootReducer, enhancer);
root.render(
  <Provider store={store}>
    <MaterialUIControllerProvider>
      <ToastContainerConfig />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </MaterialUIControllerProvider>
  </Provider>
);
