import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SessionState {
  userId?: string
}

const initialState: SessionState = {
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  }
})

export const { setUser } = sessionSlice.actions;
export default sessionSlice.reducer;