import { Calendar, CalendarChangeParams } from 'primereact/calendar';
import Localize from './localize';
type Props = {
	id: string;
	label: string;
	monthNavigator?: boolean;
	yearNavigator?: boolean;
	value?: Date | Date[];
	yearRange?: string;
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
		onChange,
	} = props;
	return (
		<div className='p-field'>
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
				/>
				<label htmlFor='date'>Birthday</label>
			</span>
		</div>
	);
};

export default FloatingCalendarInput;
