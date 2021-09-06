import './SpeedDialogue.css';
import { MenuItem } from 'primereact/menuitem';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';

type Props = {
	items: MenuItem[];
};

const SpeedDialogue = (props: Props) => {
	const { items } = props;
	return (
		<div className='speeddial-tooltip'>
			<Tooltip
				target='.speeddial-tooltip .speeddial-right .p-speeddial-action'
				position='left'
			/>
			<SpeedDial model={items} direction='up' className='speeddial-right' />
		</div>
	);
};

export default SpeedDialogue;
