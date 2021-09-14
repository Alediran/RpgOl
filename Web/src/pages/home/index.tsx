import { useEffect, useState } from 'react';
import { PrimeIcons } from 'primereact/api';
import { Sidebar } from 'primereact/sidebar';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Localize from '../../components/localize';
import SpeedDialogue from '../../components/SpeedDialogue';
import { getBoards } from '../../features/board/boardSlice';
import { selectSession } from '../../features/session/sessionSlice';
import BoardDto from '../../model/board/board.dto';
import Boards from './components/boards';
import GameCreate from './components/game-create';

const Home = (): JSX.Element => {
	const state = useAppSelector(selectSession);
	const dispatch = useAppDispatch();
	const [boards, setBoards] = useState<BoardDto[]>([]);
	const [newGamePanel, setNewGamePanel] = useState(false);

	const items = [
		{
			label: Localize['Dial:CreateGame'],
			icon: PrimeIcons.PENCIL,
			command: () => {
				setNewGamePanel(true);
			},
		},
	];

	useEffect(() => {
		dispatch(getBoards('asdasd'))
			.unwrap()
			.then((data) => setBoards(data));
	}, [dispatch]);

	return (
		<div>
			<div className='card'>
				<div className='flex flex-row'>
					<div className='col-12 lg:col-1'></div>
					<div className='col-12 md:col-6 lg:col-5 sm:flex-nowrap'>
						<Boards
							mode='own'
							data={boards.filter((board) => (board.Owner.id = state.user.id))}
						/>
						<Boards mode='play' data={[]} />
					</div>
					<div className='col-12 md:col-6 lg:col-5'>
						<Boards
							mode='general'
							data={boards.filter((board) => board.IsGeneral)}
						/>
					</div>
					<div className='col-12 lg:col-1'></div>
				</div>
			</div>
			<SpeedDialogue items={items} />
			<Sidebar
				visible={newGamePanel}
				position='right'
				onHide={() => setNewGamePanel(false)}
			>
				<GameCreate onCancel={() => setNewGamePanel(false)} />
			</Sidebar>
		</div>
	);
};

export default Home;
