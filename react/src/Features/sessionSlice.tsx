import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SessionTokenDto } from 'Types/Authentication';

interface SessionState {
  userId: string,
  token_type: string;
  access_token: string;
}

const initialState: SessionState = {
  userId: '',
  access_token: '',
  token_type: '',
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => ({
      ...state,
      userId: action.payload,
    }),
    setToken: (state, action: PayloadAction<{access_token: string, token_type: string}>) => ({
      ...state,
      access_token: action.payload.access_token,
      token_type: action.payload.token_type
    }),
  }
})

export const { setUser, setToken } = sessionSlice.actions;
export default sessionSlice.reducer;