import { PrimeIcons } from 'primereact/api';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import Localize from '../../components/localize';
import SpeedDialogue from '../../components/SpeedDialogue';
import { getBoards } from '../../features/board/boardSlice';
import BoardDto from '../../model/board/board.dto';
import Boards from './components/boards';

const Home = (): JSX.Element => {
	const [boards, setBoards] = useState<BoardDto[]>([]);
	const dispatch = useAppDispatch();

	const items = [
		{ label: Localize['Dial:CreateGame'], icon: PrimeIcons.PENCIL },
	];

	useEffect(() => {
		dispatch(getBoards('asdasd'))
			.unwrap()
			.then((data) => setBoards(data));
	}, []);

	return (
		<div>
			<div className='card'>
				<div className='flex flex-row'>
					<div className='col-12 lg:col-1'></div>
					<div className='col-12 md:col-6 lg:col-5 sm:flex-nowrap'>
						<Boards
							mode='own'
							data={boards.filter((board) => (board.Owner.id = 'asd'))}
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
		</div>
	);
};

export default Home;
