import * as React from "react";
import App from "./App";
import { createBrowserHistory as createHistory } from "history";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";

const history = createHistory();
history.listen(() => {
  window.scrollTo(0, 0);
});
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
