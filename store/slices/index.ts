import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import feSettings from './feSettings';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth,
  feSettings,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
