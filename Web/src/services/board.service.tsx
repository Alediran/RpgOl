import axios from 'axios';
import BoardCreateNewGameDto from '../model/validation/board-create.validation';

export default class BoardService {
	apiUrl = process.env.REACT_APP_API_URL;

	/*GetBoards = async (userId: string) => {
		const result = await axios.get<Board[]>(
			`${this.apiUrl}/api/board?userId=${userId}`
		);

		return result;
	};

	CreateNewGame = async (newGame: BoardCreateNewGameDto) => {
		const result = await axios.post<Board>(
			`${this.apiUrl}/api/board/newgame`,
			newGame
		);

		return result;
	};*/
}
