import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import boardSlice from '../features/board/boardSlice';
import sessionSlice from '../features/session/sessionSlice';
import userSlice from '../features/user/userSlice';
import { baseSliceApi } from '../services/baseSliceApi';

const store = configureStore({
  reducer: {
    session: sessionSlice,
    user: userSlice,
    board: boardSlice,
    [baseSliceApi.reducerPath]: baseSliceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseSliceApi.middleware)
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
