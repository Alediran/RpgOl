import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import FloatingCalendarInput from '../../components/floatingCalendarInput';
import FloatingLabelInput from '../../components/floatingLabelInput';
import Localize from '../../components/localize';

const Signup = () => {
	const currentDate = new Date();
	const yearRange = `1900:${currentDate.getFullYear()}`;

	return (
		<Card title={Localize.CreateUser}>
			<div className='p-fluid'>
				<div className='p-field'>
					<FloatingLabelInput
						id='userName'
						type='input'
						label={Localize.Username}
					/>
				</div>
				<div className='p-field form-spacing'>
					<FloatingLabelInput
						id='email'
						type='input'
						label={Localize.Email}
						feedback={false}
					/>
				</div>
				<div className='p-field form-spacing'>
					<FloatingLabelInput
						id='password'
						type='password'
						label={Localize.Password}
						feedback
					/>
				</div>
				<div className='p-field form-spacing'>
					<FloatingLabelInput
						id='confirmPassword'
						type='password'
						label={Localize.ConfirmPassword}
						feedback={false}
					/>
				</div>
				<div className='p-field form-spacing'>
					<FloatingCalendarInput
						id='navigators'
						label={Localize.BirthDate}
						monthNavigator
						yearNavigator
						yearRange={yearRange}
					/>
				</div>
				<div className='form-spacing'>
					<Checkbox inputId='agree' value='New York' />
					<label htmlFor='agree' className='p-checkbox-label'>
						Sarasa
					</label>
				</div>
			</div>
		</Card>
	);
};

export default Signup;
