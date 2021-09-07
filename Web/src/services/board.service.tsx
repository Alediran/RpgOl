import axios from 'axios';
import BoardCreateNewGameDto from '../model/board/board-create.dto';
import BoardDto from '../model/board/board.dto';

export default class BoardService {
	apiUrl = 'https://localhost:5001';

	GetBoards = async (userId: string) => {
		const result = await axios.get<BoardDto[]>(
			`${this.apiUrl}/api/board?userId=${userId}`
		);

		return result;
	};

	CreateNewGame = async (newGame: BoardCreateNewGameDto) => {
		const result = await axios.post<BoardDto>(
			`${this.apiUrl}/api/board/newgame`,
			newGame
		);

		return result;
	};
}
