import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

import { shazamcoreApi } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamcoreApi.reducerPath]: shazamcoreApi.reducer,
    player: playerReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamcoreApi.middleware),
});
