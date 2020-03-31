import React from "react";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";
import { PersistGate } from "redux-persist/lib/integration/react";

import { store, persistor } from "./store";
import HomePage from "containers";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
          <HomePage />
        </Container>
      </PersistGate>
    </Provider>
  );
}

export default App;
