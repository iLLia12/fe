import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { persistedReducer } from './slices';
import { createLogger } from 'redux-logger';
import { DEBUG, NODE_ENVIRONMENTS } from '../utils/env';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const logger = createLogger({ collapsed: true });

export const middlewareOptions = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    ignoredPaths: [],
  },
};

export const setupStore = () => {
  const store = configureStore({
    devTools: process.env.NODE_ENV !== NODE_ENVIRONMENTS.PRODUCTION,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      switch (process.env.NODE_ENV) {
        case NODE_ENVIRONMENTS.DEVELOPMENT:
          if (DEBUG === 'true') {
            return getDefaultMiddleware(middlewareOptions).concat(logger);
          } else {
            return getDefaultMiddleware(middlewareOptions).concat();
          }
        default:
          return getDefaultMiddleware(middlewareOptions).concat();
      }
    },
  });
  //@ts-ignore
  store.__persistor = persistStore(store);

  return store;
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(setupStore);
