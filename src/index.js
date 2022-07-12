import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Theme from "./Theme";
import { PersistGate } from "redux-persist/integration/react";

function Main() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Theme>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Theme>
      </Provider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
