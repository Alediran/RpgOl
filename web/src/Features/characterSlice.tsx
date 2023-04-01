/* eslint-disable no-param-reassign */
import { createSlice, Dictionary, PayloadAction } from "@reduxjs/toolkit";
import { StructureLookupClassValue } from "Types/Sheet";


type AcceptedValueTypes = string | number | Array<StructureLookupClassValue>;


interface CharacterState {
  attributes: Dictionary<AcceptedValueTypes>;
}

const initialState: CharacterState = {
  attributes: {}
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setAttributes(state, action: PayloadAction<Dictionary<AcceptedValueTypes>>) {
      state.attributes = action.payload;
    },
    updateAttribute(state, action: PayloadAction<{key: string, value: AcceptedValueTypes}>) {
      const {key, value} = action.payload;

      console.log("Attribute update ", value)
      state.attributes[key] = value;
    }
  }
});

export const { setAttributes, updateAttribute } = characterSlice.actions;
export default characterSlice.reducer;