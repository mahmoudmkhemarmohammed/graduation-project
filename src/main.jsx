import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import "./styles/index.css";
import { Provider } from "react-redux";
import store from "./store/store";
// axios global variables
import "./services/axios-global"
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);