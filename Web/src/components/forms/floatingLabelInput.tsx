import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

type Props = {
	id: string;
	label: string;
	type: 'input' | 'password';
	value?: string | number | readonly string[];
	feedback?: boolean;
	className?: string | undefined;
	labelClassName?: string | undefined;
	errors?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
const FloatingLabelInput = (props: Props) => {
	const {
		id,
		label,
		type,
		value,
		feedback,
		className,
		labelClassName,
		errors,
		onChange,
	} = props;
	return (
		<div>
			<div className='p-inputgroup'>
				<span className='p-float-label'>
					{type === 'input' && (
						<InputText
							id={id}
							name={id}
							value={value}
							onChange={onChange}
							className={className}
						/>
					)}
					{type === 'password' && (
						<Password
							id={id}
							name={id}
							value={value}
							onChange={onChange}
							toggleMask
							feedback={feedback}
							className={className}
						/>
					)}
					<label htmlFor={id} className={labelClassName}>
						{label}
					</label>
				</span>
			</div>
			<div className='error-section'>
				<small className='p-error'>{errors}</small>
			</div>
		</div>
	);
};

export default FloatingLabelInput;
