import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import Localize from '../../../components/localize';

type Props = {
	mode: 'own' | 'play' | 'general';
	data: any[];
};

const Boards = (props: Props) => {
	const { mode, data } = props;

	return (
		<DataTable value={data} className='p-datatable-sm'>
			<Column
				header={
					mode === 'own'
						? Localize['BoardMode:Own']
						: mode === 'play'
						? Localize['BoardMode:Play']
						: Localize['BoardMode:General']
				}
			></Column>
			<Column header={Localize['BoardMode:Owner']}></Column>
			<Column header={Localize['BoardMode:Posts']}></Column>
		</DataTable>
	);
};

export default Boards;
