import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./styles/index.css";
import store, { persistor } from "./store/store";
// axios global variables
import "./services/axios-global";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
