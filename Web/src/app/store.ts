import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import boardSlice from '../features/board/boardSlice';
import sessionSlice from '../features/session/sessionSlice';
import userSlice from '../features/user/userSlice';
import { api } from '../services';

const store = configureStore({
  reducer: {
    session: sessionSlice,
    user: userSlice,
    board: boardSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
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
