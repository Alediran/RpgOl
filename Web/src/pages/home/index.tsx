import { PrimeIcons } from 'primereact/api';
import { useEffect } from 'react';
import Localize from '../../components/localize';
import SpeedDialogue from '../../components/SpeedDialogue';
import Boards from './components/boards';

const Home = (): JSX.Element => {
	const items = [
		{ label: Localize['Dial:CreateGame'], icon: PrimeIcons.PENCIL },
	];

	useEffect(() => {}, []);

	return (
		<div>
			<div className='card'>
				<div className='flex flex-row'>
					<div className='col-12 lg:col-1'></div>
					<div className='col-12 md:col-6 lg:col-5 sm:flex-nowrap'>
						<Boards mode='own' data={[]} />
						<Boards mode='play' data={[]} />
					</div>
					<div className='col-12 md:col-6 lg:col-5'>
						<Boards mode='general' data={[]} />
					</div>
					<div className='col-12 lg:col-1'></div>
				</div>
			</div>
			<SpeedDialogue items={items} />
		</div>
	);
};

export default Home;
