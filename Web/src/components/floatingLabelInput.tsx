import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

type Props = {
	id: string;
	label: string;
	type: 'input' | 'password';
	value?: string | number | readonly string[];
	feedback?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
const FloatingLabelInput = (props: Props) => {
	const { id, label, type, value, feedback, onChange } = props;
	return (
		<div className='p-inputgroup'>
			<span className='p-float-label'>
				{type === 'input' && (
					<InputText id={id} name={id} value={value} onChange={onChange} />
				)}
				{type === 'password' && (
					<Password
						id={id}
						name={id}
						value={value}
						onChange={onChange}
						toggleMask
						feedback={feedback}
					/>
				)}

				<label htmlFor={id}>{label}</label>
			</span>
		</div>
	);
};

export default FloatingLabelInput;
