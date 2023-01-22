/* eslint-disable no-param-reassign */
import { createSlice, Dictionary, PayloadAction } from "@reduxjs/toolkit";

interface CharacterState {
  attributes: Dictionary<string | number>;
}

const initialState: CharacterState = {
  attributes: {}
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setAttributes(state, action: PayloadAction<Dictionary<string|number>>) {
      state.attributes = action.payload;
    },
    updateAttribute(state, action: PayloadAction<{key: string, value: string|number}>) {
      const {key, value} = action.payload;

      state.attributes[key] = value;
    }
  }
});

export const { setAttributes, updateAttribute } = characterSlice.actions;
export default characterSlice.reducer;