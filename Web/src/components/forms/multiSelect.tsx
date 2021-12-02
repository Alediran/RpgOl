import { MultiSelect, MultiSelectChangeParams } from 'primereact/multiselect';
import ValuedOptions from '../../model/static/valuedOptions';

type Props = {
	options: ValuedOptions[];
	errors?: string;
	value?: any;
	placeholder?: string;
	className?: string;
	display?: string;
	onChange?: (e: MultiSelectChangeParams) => void;
};

const FloatingMultiSelect = (props: Props) => {
	const { options, errors, value, placeholder, className, display, onChange } =
		props;

	return (
		<div>
			<div className='p-inputgroup'>
				<MultiSelect
					options={options}
					value={value}
					onChange={onChange}
					optionLabel='description'
					placeholder={placeholder}
					display={display}
					className={className}
				/>
			</div>
			<div className='error-section'>
				<small className='p-error'>{errors}</small>
			</div>
		</div>
	);
};

export default FloatingMultiSelect;
