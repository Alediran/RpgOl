import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sessionSlice from '../features/session/sessionSlice';

const store = configureStore({
  reducer: {
    session: sessionSlice,
  },
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
