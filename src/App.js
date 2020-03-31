import React from "react";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";

import { store } from "./store";
import HomePage from "containers";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <HomePage />
      </Container>
    </Provider>
  );
}

export default App;
