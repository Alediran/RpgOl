import './index.scss';
import { PrimeIcons } from 'primereact/api';
import Localize from '../../components/localize';
import SpeedDialogue from '../../components/SpeedDialogue';

const Home = (): JSX.Element => {
	const items = [
		{ label: Localize['Dial:CreateGame'], icon: PrimeIcons.PENCIL },
	];

	return (
		<div>
			Home
			<div className='grid'>
				<div className='col-12 md:col-6 lg:col-3 sm:flex-nowrap'>Hello</div>
				<div className='col-12 md:col-6 lg:col-3'>How are you</div>
			</div>
			<SpeedDialogue items={items} />
		</div>
	);
};

export default Home;
