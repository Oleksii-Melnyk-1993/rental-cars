import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { carsApi } from './operations';
import favoritesReducer from './slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const reducers = combineReducers({
  [carsApi.reducerPath]: carsApi.reducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: 'favorites',
  version: 1,
  storage,
  whiteList: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(carsApi.middleware),
});

export let persistor = persistStore(store);
