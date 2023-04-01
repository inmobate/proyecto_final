import "./index.css";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(

    <Auth0Provider
      domain="dev-jkdom0hu2zoe2dm8.us.auth0.com"
      clientId="jdILASD5sHvuzEUIS0pI1i0kyrRToZDV"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
      </Provider>
    </Auth0Provider>

);
