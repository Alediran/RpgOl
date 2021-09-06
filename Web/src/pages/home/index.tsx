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
			<SpeedDialogue items={items} />
		</div>
	);
};

export default Home;
