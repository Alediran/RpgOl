import './multiCheckboxes.css';
import { Checkbox, CheckboxChangeParams } from 'primereact/checkbox';
import ValuedOptions from '../../model/static/valuedOptions';

type Props = {
	mode: 'horizontal' | 'vertical';
	options: ValuedOptions[];
	selected?: ValuedOptions[];
	errors?: string;
	onChange?: (e: CheckboxChangeParams) => void;
};

const MultiCheckboxes = (props: Props) => {
	const { mode, options, errors, selected, onChange } = props;

	return (
		<div>
			<div className={mode === 'horizontal' ? 'p-inputgroup horizontal' : ''}>
				{options.map((option) => {
					return (
						<div className='padded'>
							<Checkbox
								inputId={`cb-${option.description}`}
								value={option.value}
								onChange={onChange}
								checked={selected?.includes(option)}
							></Checkbox>
							<label
								htmlFor={`cb-${option.description}`}
								className='p-checkbox-label'
							>
								{option.description}
							</label>
						</div>
					);
				})}
			</div>
			<div className='error-section'>
				<small className='p-error'>{errors}</small>
			</div>
		</div>
	);
};

export default MultiCheckboxes;
