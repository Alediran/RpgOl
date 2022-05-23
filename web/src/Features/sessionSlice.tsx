import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SessionTokenDto } from 'Types/Authentication';

interface SessionState {
  userId?: string,
  token?: SessionTokenDto
}

const initialState: SessionState = {
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => ({
        ...state,
        userId: action.payload,
      }),
    setToken: (state, action: PayloadAction<SessionTokenDto>) => {
      console.log("Saving the Token", action.payload);
      
      return {
        ...state,
        token: action.payload,
      }
    },
  }
})

export const { setUser, setToken } = sessionSlice.actions;
export default sessionSlice.reducer;