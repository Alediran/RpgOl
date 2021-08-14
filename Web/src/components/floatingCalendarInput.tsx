import { Calendar, CalendarChangeParams } from 'primereact/calendar';
import Localize from './localize';
type Props = {
	id: string;
	label: string;
	monthNavigator?: boolean;
	yearNavigator?: boolean;
	value?: Date | Date[];
	yearRange?: string;
	className?: string | undefined;
	labelClassName?: string | undefined;
	errors?: string;
	onChange?: (e: CalendarChangeParams) => void;
};

const FloatingCalendarInput = (props: Props) => {
	const {
		id,
		label,
		value,
		monthNavigator,
		yearNavigator,
		yearRange,
		className,
		labelClassName,
		errors,
		onChange,
	} = props;
	return (
		<div>
			<div>
				<span className='p-float-label'>
					<Calendar
						id={id}
						name={id}
						value={value}
						monthNavigator={monthNavigator}
						yearNavigator={yearNavigator}
						mask='99/99/9999'
						onChange={onChange}
						yearRange={yearRange}
						dateFormat={Localize.DateFormat}
						showIcon
						className={className}
					/>
					<label htmlFor='date' className={labelClassName}>
						Birthday
					</label>
				</span>
			</div>
			<div className='error-section'>
				<small className='p-error'>
					{errors} {''}
				</small>
			</div>
		</div>
	);
};

export default FloatingCalendarInput;
