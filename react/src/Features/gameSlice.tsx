import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { boardsApi } from "Services/Boards";
import { BoardDto, DefaultBoardDto } from "Types/Board";

interface GameState {
  game: BoardDto;
  showCreateGameSidePanel: boolean;
}

const initialState: GameState = {
  game: DefaultBoardDto(),
  showCreateGameSidePanel: false
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setShowCreateGameSidePanel(state, action: PayloadAction<boolean>) {
      state.showCreateGameSidePanel = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(boardsApi.endpoints.getBoardById.matchFulfilled,(state, {payload}) => {
      state.game = payload
    })
  }
})

export const { setShowCreateGameSidePanel } = gameSlice.actions;
export default gameSlice.reducer;