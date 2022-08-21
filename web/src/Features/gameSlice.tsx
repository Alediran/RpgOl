import { createSlice } from "@reduxjs/toolkit";
import { boardsApi } from "Services/Boards";
import { BoardDto, DefaultBoardDto } from "Types/Board";

interface GameState {
  game: BoardDto;
}

const initialState: GameState = {
  game: DefaultBoardDto()
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(boardsApi.endpoints.getBoardById.matchFulfilled,(state, {payload}) => {
      console.log("On Get Board by Id match fulfilled", payload)
      state.game = payload
    })
  }
})

export default gameSlice.reducer;