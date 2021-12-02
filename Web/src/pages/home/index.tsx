import { useState } from 'react';
import { PrimeIcons } from 'primereact/api';
import { Sidebar } from 'primereact/sidebar';
import { useAppSelector } from '../../app/hooks';
import Localize from '../../components/localize';
import SpeedDialogue from '../../components/SpeedDialogue';
import { selectSession } from '../../features/session/sessionSlice';
import Boards from './components/boards';
import GameCreate from './components/game-create';
import { useGetBoardsQuery } from '../../services/boardService';

const Home = (): JSX.Element => {
	const state = useAppSelector(selectSession);
	const session = useAppSelector(selectSession);
	const [newGamePanel, setNewGamePanel] = useState(false);
	const {
		data: boards,
		error: boardsFetchError,
		isLoading: isBoardsLoading,
	} = useGetBoardsQuery(session.user.id);

	const isLoading = () => isBoardsLoading;

	const items = [
		{
			label: Localize['Dial:CreateGame'],
			icon: PrimeIcons.PENCIL,
			command: () => {
				setNewGamePanel(true);
			},
		},
	];

	return (
		<div>
			<div className='card'>
				<div className='flex flex-row'>
					<div className='col-12 lg:col-1'></div>
					<div className='col-12 md:col-6 lg:col-5 sm:flex-nowrap'>
						<Boards
							loading={isLoading()}
							mode='own'
							data={
								boards
									? boards.filter((board) => (board.Owner.id = state.user.id))
									: []
							}
						/>
						<Boards mode='play' data={[]} />
					</div>
					<div className='col-12 md:col-6 lg:col-5'>
						<Boards
							loading={isLoading()}
							mode='general'
							data={boards ? boards.filter((board) => board.IsGeneral) : []}
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
