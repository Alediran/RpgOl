import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from 'primereact/menuitem';

interface SpeedDialState {
  model?: Array<MenuItem>;
  visible?: boolean;
}

const initialState: SpeedDialState = {

}

const speelDialSlice = createSlice({
  name: 'speedDial',
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<Array<MenuItem>>) => ({
      ...state,
      model: action.payload
    }),
    cleanMenu: (state) => ({
      ...state,
      model: undefined
    })
  }
})

export const { setMenu, cleanMenu } = speelDialSlice.actions;
export default speelDialSlice.reducer;