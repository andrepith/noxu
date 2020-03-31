import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";

const persistConfig = {
  key: "noxu-root",
  storage,
  whitelist: ["favorites"]
};

const pReducer = persistReducer(persistConfig, reducers);

const middleWare = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(pReducer, composeEnhancers(middleWare));

const persistor = persistStore(store);

export { store, persistor };
