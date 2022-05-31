import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducers from "./reducers/rootReucers";


// Persist Configuration
// Define Persist ID & Determine which type of storage being used
const persistConfig = {
    key: 'primary',
    storage,
    whitelist: ['cart'],
}

// Persisted Reducer returns an enhaced Reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);

// Create Store
export const store = createStore(persistedReducer);
// Persiste Store
export const persistor = persistStore(store);
