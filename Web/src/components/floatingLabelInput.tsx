import { InputText } from 'primereact/inputtext';

type Props = {
	id: string;
	label: string;
};
const FloatingLabelInput = (props: Props) => {
	const { id, label } = props;
	return (
		<div className='p-inputgroup'>
			<span className='p-float-label'>
				<InputText id={id} name={id} />
				<label htmlFor={id}>{label}</label>
			</span>
		</div>
	);
};

export default FloatingLabelInput;
