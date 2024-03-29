import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import api from 'Services';

// Slices
import sessionSlice from 'Features/sessionSlice';
import notificationSlice from 'Features/notificationSlice';
import gameSlice from 'Features/gameSlice';
import characterSlice from 'Features/characterSlice';

const store = configureStore({
  reducer: {
    session: sessionSlice,
    notification: notificationSlice,
    game: gameSlice,
    character: characterSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

setupListeners(store.dispatch);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;